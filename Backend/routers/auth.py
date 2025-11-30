from fastapi import APIRouter, Depends
from passlib.hash import bcrypt
from sqlalchemy.orm import Session
from database import SessionLocal
import models

router = APIRouter(prefix="/auth")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/login")
def login(email: str, password: str, db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.email == email).first()
    if user and bcrypt.verify(password, user.password):
        return {"status": "success", "user_id": user.id, "name": user.name}
    return {"status": "error", "msg": "Invalid credentials"}
