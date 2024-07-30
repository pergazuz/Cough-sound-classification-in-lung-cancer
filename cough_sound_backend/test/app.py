from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import random
import time

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload-audio")
async def upload_audio(file: UploadFile = File(...)):
    # Introduce a random delay between 1 to 2 seconds
    random_delay = random.uniform(1, 2)
    time.sleep(random_delay)

    # Randomly determine the prediction label with given probabilities
    prediction_label = random.choices(
        ["Normal", "Abnormal"],
        weights=[0.9, 0.1],
        k=1
    )[0]

    # Return the prediction
    return JSONResponse(content={
        "prediction": prediction_label
    })

@app.get("/scalogram/{scalogram_filename}")
async def get_scalogram(scalogram_filename: str):
    # For demonstration, we assume scalogram is in memory and not accessed by filename
    return JSONResponse(content={"message": "No file saved, scalogram not available by filename."})

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000, log_level="info")