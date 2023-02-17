import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";
//  Counter component should render, with all the button and the default value of 0
//  onClick functionality like add and reduce should work
//  should show count value
//  reduce should be disabled at 0

describe("Testing Counter Component", () => {
  it("Counter component is getting renderd, with the count and buttons", () => {
    render(<Counter />);
    expect(screen.getByTestId("count-tag")).toBeInTheDocument();
    expect(screen.getByTestId("count-tag")).toHaveTextContent("Count is 8");
    expect(screen.getByTestId("addBtn")).toBeInTheDocument();
    expect(screen.getByTestId("reduceBtn")).toBeInTheDocument();
  });

  it("Should add count in the counter application", () => {
    render(<Counter />);
    expect(screen.getByTestId("count-tag")).toHaveTextContent("Count is 8");
    let addButton = screen.getByTestId("addBtn");
    userEvent.click(addButton);
    userEvent.click(addButton);
    expect(screen.getByTestId("count-tag")).toHaveTextContent("Count is 10");
  });

  it("Should reduce count in the counter application", () => {
    render(<Counter />);
    expect(screen.getByTestId("count-tag")).toHaveTextContent("Count is 8");
    let reduceButton = screen.getByTestId("reduceBtn");
    userEvent.click(reduceButton);
    userEvent.click(reduceButton);
    expect(screen.getByTestId("count-tag")).toHaveTextContent("Count is 6");
  });

  it("Should disabled the reduce count in the counter application", () => {
    render(<Counter />);
    expect(screen.getByTestId("count-tag")).toHaveTextContent("Count is 8");
    let reduceBtn = screen.getByTestId("reduceBtn");
    for (let i = 0; i < 10; i++) {
      userEvent.click(reduceBtn);
    }
    expect(screen.getByTestId("count-tag")).toHaveTextContent("Count is 0");
  });
});
