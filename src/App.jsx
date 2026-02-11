import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  // 从 localStorage 加载数据
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  // 保存到 localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputValue,
          completed: false,
        },
      ])
      setInputValue('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  return (
    <div className="app">
      <div className="container">
        <h1>📝 Todo App</h1>
        
        <div className="input-section">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="添加新的待办事项..."
            className="todo-input"
          />
          <button onClick={addTodo} className="add-button">
            添加
          </button>
        </div>

        <div className="todos-section">
          {todos.length === 0 ? (
            <p className="empty-message">暂无待办事项，添加一个开始吧！</p>
          ) : (
            <ul className="todo-list">
              {todos.map((todo) => (
                <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="todo-checkbox"
                  />
                  <span className="todo-text">{todo.text}</span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="delete-button"
                  >
                    删除
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {todos.length > 0 && (
          <div className="stats">
            <p>
              总计: {todos.length} | 
              已完成: {todos.filter((t) => t.completed).length} | 
              待完成: {todos.filter((t) => !t.completed).length}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
