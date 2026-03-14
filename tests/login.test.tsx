import { render, screen } from "@testing-library/react"
import LoginPage from "../src/app/login/page"

describe("Login Page", () => {
  test("renders login form inputs", () => {
    render(<LoginPage />)

    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
  })
})