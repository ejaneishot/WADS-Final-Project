/// <reference types="jest" />

describe("Homepage", () => {
  test("sample test", () => {
    expect(1 + 1).toBe(2)
  })
})

import { render, screen } from "@testing-library/react"
import HomePage from "../src/app/page"

describe("Homepage", () => {
  test("renders Learning Paths section", () => {
    render(<HomePage />)

    const text = screen.getByText(/learning paths/i)

    expect(text).toBeInTheDocument()
  })
})