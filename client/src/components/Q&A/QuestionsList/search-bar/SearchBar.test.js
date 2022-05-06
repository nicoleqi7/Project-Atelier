import React from "react";
import '@testing-library/jest-dom'
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import SearchBar from './SearchBar.jsx';
import { act } from "react-dom/test-utils";
import regeneratorRuntime from "regenerator-runtime";


describe("SearchBar", () => {
  it('should render the class of "search"', () => {
    const { container } = render(<SearchBar/>);
    expect(container.getElementsByClassName("search").length).toBe(1);
  });
});

describe('SearchBar', () => {
  it('should render the SearchBar', () => {
    render(<SearchBar/>);
    screen.queryByPlaceholderText(/Search your questions here/i)
  })
});