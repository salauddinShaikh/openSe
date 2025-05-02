import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CardList from "./CardList";

describe("CardList", () => {
  it("should call courses api", () => {
    const course = {
      name: "Name",
      category: "category",
      description: "Description",
      rating: 5,
    };
    render(<CardList fetchCourses={() => [course]} />);
    expect(screen.getByTestId("card-name")).toHaveTextContent("Name");
  });
});
