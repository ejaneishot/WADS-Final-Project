/**
 * Register page render tests — ensures the submit control is present.
 */
import { render, screen } from "@testing-library/react"
import RegisterPage from "../src/app/register/page"

describe("Register Page", () => {
  test("renders register button", () => {
    render(<RegisterPage />)

    const button = screen.getByRole("button")

    expect(button).toBeInTheDocument()
  })
})