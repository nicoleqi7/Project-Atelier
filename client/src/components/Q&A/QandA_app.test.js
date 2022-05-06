import React from "react";
import '@testing-library/jest-dom'
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import QandA from './QandA_app.jsx';
import { act } from "react-dom/test-utils";
import regeneratorRuntime from "regenerator-runtime";


describe("QandA", () => {
  it('should render the class of "QA_line"', () => {
    const { container } = render(<QandA product_id={64623} />);
    expect(container.getElementsByClassName("left").length).toBe(1);
    expect(container.getElementsByClassName("right").length).toBe(1);
  });
});


describe('QandA', () => {
  it('should have "QandA Content"', () => {
    render(<QandA product_id={64623}  />);
    const title1 = screen.getByText('Questions & Answers');
    expect(title1).toBeInTheDocument();
  })
});

describe('QandA', () => {
  it('should have "QandA Content"', () => {
    render(<QandA product_id={64623}  />);
    const title2 = screen.getByText('Ask a Question');
    expect(title2).toBeInTheDocument();
  })
});