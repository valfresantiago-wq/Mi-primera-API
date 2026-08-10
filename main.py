from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://valfresantiago-wq.github.io"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def inicio():
    return {"mensaje": "Mi primera API funciona"}

@app.get("/productos")
def productos():
    return [
        {"id": 1, "nombre": "Resma A4", "precio": 6000},
        {"id": 2, "nombre": "Lapicera", "precio": 999,99}
    ]
