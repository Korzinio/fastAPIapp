@echo off
REM Скрипт для запуску FastAPI сервера на Windows
uvicorn main:app --reload --host 0.0.0.0 --port 8000

