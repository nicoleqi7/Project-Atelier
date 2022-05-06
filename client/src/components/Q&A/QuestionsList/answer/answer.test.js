import React from "react";
import { act } from "react-dom/test-utils";
import { render, cleanup, screen, waitFor } from "@testing-library/react";
import Answer from "./answer.jsx";
import "@testing-library/jest-dom";
import regeneratorRuntime from "regenerator-runtime";
const answer =  {
  id: 3073949,
  body: "Saepe quia aliquam ea voluptatibus doloremque distinctio.",
  date: "2021-06-25T00:00:00.000Z",
  answerer_name: "Dante18",
  helpfulness: 4,
  photos: [
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
  ],
  reported: false
}

describe("answer", () => {
  it('should render the class of "right" and "right_item"', () => {
    const { container } = render(<Answer answer={answer} />);
    expect(
      container.getElementsByClassName("right").length
    ).toBe(1);
    expect(container.getElementsByClassName("right_item").length).toBe(2);
  });
});

describe("answer", () => {
  it('should render the class of "answer_item", "answerImage" and "answerer_info"', () => {

    const { container } = render(<Answer answer={answer} />);
    expect(container.getElementsByClassName("answer_item").length).toBe(1);
    expect(container.getElementsByClassName("answerer_info").length).toBe(1);
    expect(container.getElementsByClassName("answerImage").length).toBe(1);
  });
});



