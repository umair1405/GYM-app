from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from database import Base
from datetime import datetime

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True)
    password = Column(String)
    name = Column(String)

class Attendance(Base):
    __tablename__ = "attendance"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    check_in = Column(DateTime, default=datetime.utcnow)
    check_out = Column(DateTime, nullable=True)

class WorkoutCategory(Base):
    __tablename__ = "workout_category"
    id = Column(Integer, primary_key=True)
    name = Column(String)

class Exercise(Base):
    __tablename__ = "exercise"
    id = Column(Integer, primary_key=True)
    category_id = Column(Integer, ForeignKey("workout_category.id"))
    name = Column(String)
    image_url = Column(String)
    description = Column(String)
