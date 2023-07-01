import { logRoles, render, screen } from "@testing-library/react"
import Login from "./Login"

describe('Login', () => {
    test('should render correctly', () => {
        const view = render(<Login />)
        logRoles(view.container)
        const usernameInput = screen.getByPlaceholderText('Username')
        const passwordInput = screen.getByPlaceholderText('Password')
        const loginBtn = screen.getByRole('button', { name: 'Login' })
        expect(usernameInput).toBeInTheDocument()
        expect(passwordInput).toBeInTheDocument()
        expect(loginBtn).toBeInTheDocument()
    })
})
