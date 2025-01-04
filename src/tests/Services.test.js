import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Services from "../components/Services";

jest.mock("../data/servicesData", () => [
  {
    id: 1,
    image: "mock-service1.png",
    title: "Mock Landscape Design",
    description: "Mock description for Landscape design",
    link: "/design",
  },
  {
    id: 2,
    image: "mock-service2.png",
    title: "Mock Outdoor Living Spaces",
    description: "Mock description for Outdoor Living Spaces",
    link: "/design",
  },
  {
    id: 3,
    image: "mock-service3.png",
    title: "Mock Irrigation",
    description: "Mock description for Irrigation",
    link: "/design",
  },
]);

jest.mock(
  "../components/CustomCard",
  () =>
    ({ className, image, title, description, link }) =>
      (
        <div data-testid="custom-card">
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link}>Learn More</a>
        </div>
      )
);

describe("Services Component", () => {
  it("renders the services title", () => {
    render(
      <MemoryRouter>
        <Services />
      </MemoryRouter>
    );

    const title = screen.getByRole("heading", { name: /Services Offered/i });
    expect(title).toBeInTheDocument();
  });

  it("renders the correct number of CustomCard components", () => {
    render(
      <MemoryRouter>
        <Services />
      </MemoryRouter>
    );

    const cards = screen.getAllByTestId("custom-card");
    expect(cards).toHaveLength(3);
  });

  it("renders each CustomCard with correct props", () => {
    render(
      <MemoryRouter>
        <Services />
      </MemoryRouter>
    );

    const cards = screen.getAllByTestId("custom-card");

    // Validate the first card
    expect(cards[0]).toHaveTextContent("Mock Landscape Design");
    expect(cards[0].querySelector("img")).toHaveAttribute(
      "src",
      "mock-service1.png"
    );
    expect(cards[0].querySelector("a")).toHaveAttribute("href", "/design");

    // Validate the second card
    expect(cards[1]).toHaveTextContent("Mock Outdoor Living Spaces");
    expect(cards[1].querySelector("img")).toHaveAttribute(
      "src",
      "mock-service2.png"
    );
    expect(cards[1].querySelector("a")).toHaveAttribute("href", "/design");

    // Validate the third card
    expect(cards[2]).toHaveTextContent("Mock Irrigation");
    expect(cards[2].querySelector("img")).toHaveAttribute(
      "src",
      "mock-service3.png"
    );
    expect(cards[2].querySelector("a")).toHaveAttribute("href", "/design");
  });
});
