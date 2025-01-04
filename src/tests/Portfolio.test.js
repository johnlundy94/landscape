import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { fireEvent } from "@testing-library/react";
import Portfolio from "../components/Portfolio";

jest.mock("../assets/serenity/serenity1.png"), () => "mock-serenity1.png";
jest.mock("../assets/elysian/elysian1.png"), () => "mock-elysian1.png";
jest.mock("../assets/eden/eden1.png"), () => "mock-eden1.png";
jest.mock("../assets/oasis/oasis1.png"), () => "mock-oasis1.png";

describe("Portfolio Component", () => {
  it("renders the portfolio title", () => {
    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>
    );

    const title = screen.getByRole("heading", {
      name: /Our Portfolio/i,
    });
    expect(title).toBeInTheDocument();
  });

  it("renders all images", () => {
    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>
    );

    expect(screen.getByAltText(/Slide image 1/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Slide image 2/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Slide image 3/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Slide image 4/i)).toBeInTheDocument();
  });

  it("renders the next and previous buttons", () => {
    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>
    );
    const nextButton = screen.getByRole("button", { name: /Next/i });
    const prevButton = screen.getByRole("button", { name: /Previous/i });

    expect(nextButton).toBeInTheDocument();
    expect(prevButton).toBeInTheDocument();
  });

  it("updates the active slide when the Next and Previous buttons are clicked", () => {
    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>
    );
    const nextButton = screen.getByRole("button", { name: /Next/i });
    const prevButton = screen.getByRole("button", { name: /Previous/i });

    const activeImage1 = screen.getByTestId("slider-image-0");
    expect(activeImage1).toHaveClass("slider-image");

    fireEvent.click(nextButton);
    const activeImage2 = screen.getByTestId("slider-image-1");
    expect(activeImage2).toHaveClass("slider-image");

    fireEvent.click(prevButton);
    expect(activeImage1).toHaveClass("slider-image");
  });

  it("renders all slide links with correct names", () => {
    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>
    );
    expect(screen.getByText(/Serenity Gardens/i)).toBeInTheDocument();
    expect(screen.getByText(/Elysian Fields/i)).toBeInTheDocument();
    expect(screen.getByText(/Eden Enclave/i)).toBeInTheDocument();
    expect(screen.getByText(/Oasis Estates/i)).toBeInTheDocument();
  });
});
