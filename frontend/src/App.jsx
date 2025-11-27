import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState({ text: '', author: '' })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/messages')
      if (!response.ok) throw new Error('Помилка завантаження повідомлень')
      const data = await response.json()
      setMessages(data)
      setError(null)
    } catch (err) {
      setError('Не вдалося підключитися до сервера. Переконайтеся, що backend запущений на http://localhost:8000')
      console.error('Помилка:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!newMessage.text.trim() || !newMessage.author.trim()) {
      alert('Будь ласка, заповніть всі поля')
      return
    }

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMessage),
      })

      if (!response.ok) throw new Error('Помилка створення повідомлення')
      
      const createdMessage = await response.json()
      setMessages([...messages, createdMessage])
      setNewMessage({ text: '', author: '' })
      setError(null)
    } catch (err) {
      setError('Не вдалося відправити повідомлення. Переконайтеся, що backend запущений.')
      console.error('Помилка:', err)
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🚀 React + FastAPI</h1>
        <p>Сучасний веб-додаток</p>
      </header>

      <main className="main">
        <div className="container">
          <section className="messages-section">
            <div className="section-header">
              <h2>Повідомлення</h2>
              <button onClick={fetchMessages} className="refresh-btn">
                🔄 Оновити
              </button>
            </div>

            {loading && <div className="loading">Завантаження...</div>}
            {error && <div className="error">❌ {error}</div>}

            <div className="messages-list">
              {messages.map((message) => (
                <div key={message.id} className="message-card">
                  <div className="message-header">
                    <span className="author">👤 {message.author}</span>
                    <span className="timestamp">
                      {new Date(message.timestamp).toLocaleString('uk-UA')}
                    </span>
                  </div>
                  <div className="message-text">{message.text}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="form-section">
            <h2>Додати нове повідомлення</h2>
            <form onSubmit={handleSubmit} className="message-form">
              <div className="form-group">
                <label htmlFor="author">Ваше ім'я:</label>
                <input
                  type="text"
                  id="author"
                  value={newMessage.author}
                  onChange={(e) =>
                    setNewMessage({ ...newMessage, author: e.target.value })
                  }
                  placeholder="Введіть ваше ім'я"
                />
              </div>
              <div className="form-group">
                <label htmlFor="text">Повідомлення:</label>
                <textarea
                  id="text"
                  value={newMessage.text}
                  onChange={(e) =>
                    setNewMessage({ ...newMessage, text: e.target.value })
                  }
                  placeholder="Введіть повідомлення"
                  rows="4"
                />
              </div>
              <button type="submit" className="submit-btn">
                Відправити
              </button>
            </form>
          </section>
        </div>
      </main>

      <footer className="footer">
        <p>Створено з React та FastAPI</p>
      </footer>
    </div>
  )
}

export default App

