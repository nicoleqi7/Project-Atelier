import React from "react";
import '@testing-library/jest-dom'
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import Window from './window.jsx';
import { act } from "react-dom/test-utils";
import regeneratorRuntime from "regenerator-runtime";



describe("Window", () => {
  it('should render the claseName of "windowBox"', () => {
    const { container } = render(<Window/>);
    expect(container.getElementsByClassName("windowBox").length).toBe(1);
  });
});
describe('Window', () => {
  it('should have "X" for window', () => {
    render(<Window />);
    const close = screen.getByText('X');
    expect(close).toBeInTheDocument();
  })
});



