import { describe, expect, it, vi } from "vitest";
import {act, render, screen} from "@testing-library/react";
import CardList from "./CardList";

describe("CardList", () => {
  it("should call courses api", async () => {
    const course = {
      name: "Name",
      category: "category",
      description: "Description",
      rating: 5,
    };

    vi.spyOn(global, 'fetch').mockResolvedValue({json: () => Promise.resolve([course])})

    await act(async () => render(<CardList fetchCourses={() => [course]} />));
    expect(screen.getByTestId("card-name")).toHaveTextContent("Name");
    expect(screen.getByTestId("card-description")).toHaveTextContent(
      "Description"
    );
    expect(screen.getAllByTestId("card")).toHaveLength(1);
  });
});
