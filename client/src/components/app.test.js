import React from "react";
import {render} from '@testing-library/react';
import App from './app.jsx';
import "@testing-library/jest-dom/extend-expect";
import Overview from "./overview/Overview.jsx";
import RelatedProducts from "./relatedProduct/RelatedProducts.jsx";
import QandA from "./Q&A/QandA_app.jsx";
import RR_app from "./Ratings&Reviews/RR_app.jsx";
import Navbar from "./navbar.jsx";
import regeneratorRuntime from "regenerator-runtime";


test("header renders with correct text", () => {
  const {getByTestId} = render(<App />);
  const headerEl = getByTestId("header1")

  expect(headerEl.textContent).toBe(" Good Deals Only ")
})