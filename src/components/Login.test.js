import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Login from "./Login"
describe('Login test', () => {
    test('should render Login component', () => {
        render(<BrowserRouter><Login /></BrowserRouter>)
        const userElement = screen.getByText(/Username/i)
        expect(userElement).toBeInTheDocument()
        expect(true).toBeTruthy()
    })
})
