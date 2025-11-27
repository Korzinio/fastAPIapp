# React + FastAPI Додаток

Сучасний веб-додаток з React frontend та FastAPI backend.

## Структура проєкту

```
fastapiapp/
├── backend/          # FastAPI backend
│   ├── main.py       # Головний файл API
│   └── requirements.txt
├── frontend/         # React frontend
│   ├── src/
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Встановлення та запуск

### Backend (FastAPI)

1. Перейдіть до директорії backend:
```bash
cd backend
```

2. Створіть віртуальне середовище (рекомендовано):
```bash
python -m venv venv
```

3. Активуйте віртуальне середовище:
- **Windows (Command Prompt):**
```bash
venv\Scripts\activate
```

- **Windows (PowerShell):**
```bash
venv\Scripts\Activate.ps1
```

- **Windows (Git Bash):**
```bash
source venv/Scripts/activate
```

- **Linux/Mac:**
```bash
source venv/bin/activate
```

**Примітка:** Після активації ви побачите `(venv)` перед вашим промптом.

4. Встановіть залежності:
```bash
pip install -r requirements.txt
```

5. Запустіть сервер:
```bash
uvicorn main:app --reload
```

Backend буде доступний на `http://localhost:8000`
API документація: `http://localhost:8000/docs`

### Frontend (React)

1. Перейдіть до директорії frontend:
```bash
cd frontend
```

2. Встановіть залежності:
```bash
npm install
```

3. Запустіть dev сервер:
```bash
npm run dev
```

Frontend буде доступний на `http://localhost:3000`

## Функціонал

- ✅ Відображення списку повідомлень
- ✅ Додавання нових повідомлень
- ✅ Оновлення списку повідомлень
- ✅ Сучасний та адаптивний UI
- ✅ CORS налаштування для комунікації між frontend та backend

## API Ендпоінти

- `GET /` - Перевірка роботи API
- `GET /api/messages` - Отримати всі повідомлення
- `POST /api/messages` - Створити нове повідомлення
- `GET /api/health` - Перевірка здоров'я API

## Технології

- **Backend**: FastAPI, Python
- **Frontend**: React, Vite
- **Стилізація**: CSS3 з сучасними ефектами

## Завантаження на GitHub

### Перший раз (створення репозиторію):

1. Створіть новий репозиторій на GitHub (через веб-інтерфейс)

2. Ініціалізуйте Git репозиторій:
```bash
git init
```

3. Додайте всі файли:
```bash
git add .
```

4. Створіть перший коміт:
```bash
git commit -m "Initial commit: React + FastAPI app"
```

5. Додайте remote репозиторій (замініть `YOUR_USERNAME` та `YOUR_REPO_NAME`):
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

6. Завантажте код на GitHub:
```bash
git branch -M main
git push -u origin main
```

### Подальші оновлення:

```bash
git add .
git commit -m "Опис ваших змін"
git push
```

## Примітки

- Backend використовує in-memory сховище даних (повідомлення зберігаються в пам'яті)
- Для production використання додайте базу даних (PostgreSQL, MongoDB тощо)
- CORS налаштований для локальної розробки
- Файл `.gitignore` налаштований для виключення `venv/`, `node_modules/` та інших непотрібних файлів

