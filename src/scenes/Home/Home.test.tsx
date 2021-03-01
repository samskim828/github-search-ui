import React from "react"
import { screen } from "@testing-library/react"
import { render } from '@testing-library/react'
import Home from "../Home"

test("renders search bar", () => {
  render(<Home />)
  const searchBarInput = screen.getByTestId('search-bar-container')
  expect(searchBarInput).toBeInTheDocument()
});
