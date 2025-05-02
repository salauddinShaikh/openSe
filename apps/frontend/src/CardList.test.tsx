import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CardList from "./CardList";

describe("CardList", () => {
  it("matches snapshot", () => {
    const { container } = render(<CardList />);
    expect(container).toMatchSnapshot();
  });
});
