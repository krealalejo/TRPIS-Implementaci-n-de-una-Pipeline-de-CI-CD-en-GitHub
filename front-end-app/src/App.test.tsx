import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />)
    const heading = screen.getByText('Vite + React')
    expect(heading).toBeInTheDocument()
  })

  it('renders the count button with initial value', () => {
    render(<App />)
    const button = screen.getByText('count is 0')
    expect(button).toBeInTheDocument()
  })

  it('renders the edit instruction', () => {
    render(<App />)
    const codeElement = screen.getByText('src/App.tsx')
    expect(codeElement).toBeInTheDocument()
  })
})
