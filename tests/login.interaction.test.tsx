import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import LoginPage from "../src/app/login/page"

describe("Login interaction", () => {
  test("user can type into login fields", async () => {
    render(<LoginPage />)

    const email = screen.getByLabelText(/email/i)

    await userEvent.type(email, "test@email.com")

    expect(email).toHaveValue("test@email.com")
  })
})