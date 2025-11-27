from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from datetime import datetime

app = FastAPI(title="FastAPI + React App")

# Налаштування CORS для комунікації з React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Моделі даних
class Message(BaseModel):
    id: int
    text: str
    author: str
    timestamp: str

class MessageCreate(BaseModel):
    text: str
    author: str

# Базове сховище даних (в пам'яті)
messages_db: List[Message] = [
    Message(id=1, text="Ласкаво просимо до нашого додатку!", author="Система", timestamp=datetime.now().isoformat()),
    Message(id=2, text="Це приклад повідомлення", author="Користувач", timestamp=datetime.now().isoformat()),
]

# Ендпоінти
@app.get("/")
async def root():
    return {"message": "FastAPI працює! 🚀"}

@app.get("/api/messages", response_model=List[Message])
async def get_messages():
    return messages_db

@app.post("/api/messages", response_model=Message)
async def create_message(message: MessageCreate):
    new_message = Message(
        id=len(messages_db) + 1,
        text=message.text,
        author=message.author,
        timestamp=datetime.now().isoformat()
    )
    messages_db.append(new_message)
    return new_message

@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now().isoformat()}

