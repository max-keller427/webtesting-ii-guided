import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
  render,
  queryByAltText,
  queryByText,
  fireEvent
} from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

xit("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

xit("renders without crashing", () => {
  render(<App />);
});

xit("displays hello world", () => {
  const { queryByText } = render(<App />);
  const header = queryByText(/'ello world/i);
  expect(header).toBeVisible();
});

xit("displays greeting when button is clicked", () => {
  const { getByText } = render(<App />);
  const button = getByText(/greet/i);

  fireEvent.click(button);
  getByText(/hello FSWPT4/i);
});
