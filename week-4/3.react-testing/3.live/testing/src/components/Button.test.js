import { render, screen } from "@testing-library/react";
import Button from "./Button";
import App from "../App";

describe("Testing Button Component", () => {
  // if the Button components is going to work in different scenarios or not
  it("Should render/ Should be in the DOM tree", () => {
    render(<Button>Testing</Button>); // virtual tree
    // document.get
    let button = screen.getByText("Testing");
    // Expecting button to be in the document
    expect(button).toBeInTheDocument();
  });

  // Checking the default state of my app.js file (Should not do)
  it("Should render a button with the text click me in App.js", () => {
    render(<App />);
    let button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
  });

  // Checking the default state of my app.js file
  it("Should render a button in App.js", () => {
    render(<App />);
    let button = screen.getByTestId("customBtn");
    expect(button).toHaveTextContent("Click me");
    expect(button).toBeInTheDocument();
  });

  it("Should render a blue button", () => {
    render(<Button colorScheme="blue">Green Btn</Button>);
    let button = screen.getByTestId("customBtn");
    expect(button).toHaveClass("blue");
  });
});
