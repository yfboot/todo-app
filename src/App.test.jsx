import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('App', () => {
  it('renders todo app title', () => {
    render(<App />)
    expect(screen.getByText(/Todo App/i)).toBeInTheDocument()
  })

  it('renders input placeholder', () => {
    render(<App />)
    expect(screen.getByPlaceholderText(/添加新的待办事项/i)).toBeInTheDocument()
  })
})
