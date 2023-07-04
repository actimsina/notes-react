import { logRoles, render, screen } from "@testing-library/react"
import Login from "./Login"
import { BrowserRouter } from "react-router-dom"

describe('Login', () => {
    test('should render correctly', () => {
        const view = render(<BrowserRouter><Login /></BrowserRouter>)
        logRoles(view.container)
        const usernameInput = screen.getByPlaceholderText('Username')
        const passwordInput = screen.getByPlaceholderText('Password')
        const loginBtn = screen.getByRole('button', { name: 'Login' })
        expect(usernameInput).toBeInTheDocument()
        expect(passwordInput).toBeInTheDocument()
        expect(loginBtn).toBeInTheDocument()
    })
})
