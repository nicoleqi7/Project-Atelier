import React from "react";
import '@testing-library/jest-dom'
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import QuestionsList from './QuestionsList.jsx';
import { act } from "react-dom/test-utils";
import regeneratorRuntime from "regenerator-runtime";


describe("QuestionsList", () => {
  it('should render the class of "QAList"', () => {
    const { container } = render(<QuestionsList product_id={64623} />);
    expect(container.getElementsByClassName("QAList").length).toBe(1);
  });
});

describe('QuestionsList', () => {
  it('should have "QuestionsList Content"', () => {
    render(<QuestionsList product_id={64623}  />);
    const title = screen.getByText('Here are the questions for this product:0');
    expect(title).toBeInTheDocument();
  })
});