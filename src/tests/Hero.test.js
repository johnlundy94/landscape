import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero";

jest.mock("../assets/five-star.svg", () => "mock-star.svg");

describe("Hero Component", () => {
  it("renders the navigation links", () => {
    render(<Hero />);

    expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Quote/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Properties/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Services/i })).toBeInTheDocument();
  });

  it("renders the hero title", () => {
    render(<Hero />);

    const title = screen.getByRole("heading", {
      name: /Verdant Visions Landscaping/i,
    });
    expect(title).toBeInTheDocument();
  });

  it("renders the hero text", () => {
    render(<Hero />);

    const description = screen.getByText(
      /Verdant Visions Landscaping brings your vision/i
    );
    expect(description).toBeInTheDocument();
  });

  it("renders the video element", () => {
    render(<Hero />);

    const video = screen.getByTestId("hero-video");
    expect(video).toBeInTheDocument();
  });

  it("renders all testimonials", () => {
    render(<Hero />);

    const testimonials = screen.getAllByText(/Residence/i);
    expect(testimonials).toHaveLength(3);
  });
});
