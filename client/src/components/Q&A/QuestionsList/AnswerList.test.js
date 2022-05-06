import React from "react";
import { act } from "react-dom/test-utils";
import { render, cleanup, screen, waitFor } from "@testing-library/react";
import AnswerList from "./AnswerList.jsx";
import "@testing-library/jest-dom";
import regeneratorRuntime from "regenerator-runtime";

const answers = [
  {
      "id": 5539391,
      "body": "!!!!!!!!!!!!!",
      "date": "2022-04-30T00:00:00.000Z",
      "answerer_name": "Nicole Qi",
      "helpfulness": 0,
      "photos": [],
      "reported": false
  },
  {
      "id": 5539390,
      "body": "this is your answer",
      "date": "2022-04-30T00:00:00.000Z",
      "answerer_name": "Gina",
      "helpfulness": 0,
      "photos": [],
      "reported": false
  },
  {
      "id": 5539380,
      "body": "test1",
      "date": "2022-04-30T00:00:00.000Z",
      "answerer_name": "Nicole Qi",
      "helpfulness": 0,
      "photos": [
          "https://i.ibb.co/vBHv1cf/871647716356-pic.jpg"
      ]
  }
]

describe('AnswerList Component Unit Tests', () => {
  it('renders and See More Answer button', () => {
    const {getByText} = render(
      <AnswerList
        answersArray={answers}
      />
    )
    expect(getByText(/See more answers/)).toBeInTheDocument();
  })
})



