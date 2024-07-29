from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse, FileResponse
from fastapi.middleware.cors import CORSMiddleware
import librosa
import librosa.display
import numpy as np
import matplotlib.pyplot as plt
import uuid
import os
import onnxruntime as ort

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create the temp directory if it doesn't exist
os.makedirs("temp", exist_ok=True)

# Load the ONNX model
model_path = "model.onnx"  # Replace with your actual ONNX model path
ort_session = ort.InferenceSession(model_path)

def preprocess(audio_path):
    """Preprocess audio file for model input."""
    y, sr = librosa.load(audio_path, sr=None)
    mel_spectrogram = librosa.feature.melspectrogram(y=y, sr=sr)
    log_mel_spectrogram = librosa.power_to_db(mel_spectrogram, ref=np.max)
    log_mel_spectrogram = resize_or_pad(log_mel_spectrogram, 512, 512)
    input_tensor = np.stack([log_mel_spectrogram] * 3, axis=0)
    return input_tensor[np.newaxis, :, :, :]

def resize_or_pad(spectrogram, target_height, target_width):
    """Resize or pad the spectrogram to the target size."""
    current_height, current_width = spectrogram.shape
    if current_height < target_height:
        pad_height = (target_height - current_height) // 2
        spectrogram = np.pad(spectrogram, ((pad_height, target_height - current_height - pad_height), (0, 0)), mode='constant')
    if current_width < target_width:
        pad_width = (target_width - current_width) // 2
        spectrogram = np.pad(spectrogram, ((0, 0), (pad_width, target_width - current_width - pad_width)), mode='constant')
    if current_height > target_height or current_width > target_width:
        spectrogram = spectrogram[:target_height, :target_width]
    return spectrogram

@app.post("/upload-audio")
async def upload_audio(file: UploadFile = File(...)):
    # Save the uploaded audio file
    audio_path = f"temp/{file.filename}"
    with open(audio_path, "wb") as f:
        f.write(await file.read())

    # Process the audio file to generate a scalogram
    y, sr = librosa.load(audio_path, sr=None)
    S = np.abs(librosa.cqt(y, sr=sr))
    plt.figure(figsize=(10, 4))
    librosa.display.specshow(librosa.amplitude_to_db(S, ref=np.max), sr=sr, x_axis='time', y_axis='cqt_note')
    plt.axis('off')  # Turn off the axis
    plt.tight_layout(pad=0)  # Ensure the image has no padding
    scalogram_filename = f"scalogram_{uuid.uuid4().hex}.png"
    scalogram_path = f"temp/{scalogram_filename}"
    plt.savefig(scalogram_path, bbox_inches='tight', pad_inches=0)
    plt.close()

    # Preprocess the audio for the ONNX model
    input_data = preprocess(audio_path)

    # Perform inference with ONNX model
    inputs = {ort_session.get_inputs()[0].name: input_data.astype(np.float32)}
    outputs = ort_session.run(None, inputs)
    prediction = outputs[0]

    # Convert prediction to human-readable form
    predicted_class_idx = np.argmax(prediction)  # Get index of max logit
    prediction_label = "Abnormal" if predicted_class_idx == 0 else "Normal"

    return JSONResponse(content={
        "scalogram_url": f"http://127.0.0.1:8000/temp/{scalogram_filename}",
        "prediction": prediction_label
    })

@app.get("/temp/{scalogram_filename}")
async def get_scalogram(scalogram_filename: str):
    return FileResponse(f"temp/{scalogram_filename}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000, log_level="info")
