import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // <-- Add this import
import TeamCard from "./TeamCard";

describe("TeamCard", () => {
  it("renders member info", () => {
    render(
      <TeamCard
        
        name="Test User"
        role="Test Role"
        linkedin="https://linkedin.com"
      />
    );
    expect(screen.getByText("Test User")).toBeInTheDocument();
    expect(screen.getByText("Test Role")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toHaveAttribute("href", "https://linkedin.com");
  });
});