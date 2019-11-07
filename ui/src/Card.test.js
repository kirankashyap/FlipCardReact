import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Card from "./Card";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Card Tests", function(){
  it("Card renders properly with correct title", () => {
    act(() => {
      render(<Card title="abc" />, container);
    });
    expect(container.textContent).toBe("abc");
  });
})
