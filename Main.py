from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def inicio():
    return {"mensaje": "Mi primera API funciona"}


@app.get("/productos")
def productos():
    return [
        {"id": 1, "nombre": "Resma A4", "precio": 6000},
        {"id": 2, "nombre": "Lapicera", "precio": 879}
    ]
