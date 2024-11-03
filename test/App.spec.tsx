import * as React from "react";
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "../src/App";

describe("<App />", () => {
  test("App mounts properly", async () => {
    let wrapper;
    await act(async () => {
      wrapper = render(<App />);
    });
    expect(wrapper).toBeTruthy();

    // Get by text using the React testing library
    const text = screen.getByText(/CV - /i);
    expect(text.textContent).toBeTruthy();
  });
});
