from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse, FileResponse
from fastapi.middleware.cors import CORSMiddleware
import librosa
import numpy as np
import matplotlib.pyplot as plt
import uuid
import os
import random
import time


app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Create the temp directory if it doesn't exist
os.makedirs("temp", exist_ok=True)

def fake_predict():
    """Simulate prediction for demo purposes."""
    return random.choice(["Normal"])

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
    plt.colorbar(format='%+2.0f dB')

    # Save the scalogram image
    scalogram_filename = f"scalogram_{uuid.uuid4().hex}.png"
    scalogram_path = f"temp/{scalogram_filename}"
    plt.savefig(scalogram_path)
    plt.close()

    # Simulate a prediction
    prediction = fake_predict()


    time.sleep(1)

    return JSONResponse(content={
        "scalogram_url": f"http://127.0.0.1:8000/temp/{scalogram_filename}",
        "prediction": prediction
    })

@app.get("/temp/{scalogram_filename}")
async def get_scalogram(scalogram_filename: str):
    return FileResponse(f"temp/{scalogram_filename}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000, log_level="info")
