import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { act } from "react";
import App from "../../src/App";

describe("<AppHeader/>", () => {
  it("should show avatar when not printing", async () => {
    await act(async () => {
      render(<App />);
    });

    //avatar is shown by default
    const img = screen.queryByRole("img");
    expect(img).toBeTruthy();
  });

  it("should show progress bar for languages when not printing", async () => {
    await act(async () => {
      render(<App />);
    });

    //language bars are shown by default
    const bars = screen.queryAllByRole("progressbar");
    expect(bars).toBeTruthy();
  });

  it("should hide avatar when printing", async () => {
    vi.useFakeTimers();
    let windowSpy = vi.spyOn(window, "print");
    await act(async () => {
      render(<App />);
    });

    const printButton = screen.getByRole("button", { name: /print/i });
    expect(printButton).toBeTruthy();
    if (printButton) {
      act(() => {
        fireEvent.click(printButton);
      });

      // avatar is hidden on print
      const img = screen.queryByRole("img");
      expect(img).toBeFalsy();

      act(() => vi.advanceTimersByTime(300));
      expect(windowSpy).toHaveBeenCalledTimes(1);
    }
  });

  it("should hide language bars when printing", async () => {
    vi.useFakeTimers();
    let windowSpy = vi.spyOn(window, "print");
    await act(async () => {
      render(<App />);
    });

    const printButton = screen.getByRole("button", { name: /print/i });
    expect(printButton).toBeTruthy();
    if (printButton) {
      act(() => {
        fireEvent.click(printButton);
      });

      //language bars are shown by default
      const bars = screen.queryAllByRole("progressbar");
      expect(bars.length).toBe(0);

      act(() => vi.advanceTimersByTime(300));
      expect(windowSpy).toHaveBeenCalledTimes(1);
    }
  });
});
