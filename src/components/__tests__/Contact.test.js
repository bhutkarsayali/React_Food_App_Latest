import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact page test cases", () => {
  test("should load contact us component", () => {
    //check if contact component is got loaded onto the dom or not?
    //whenever testing UI componnet in react, first render that component into jsdom
    // to check this check if any of the text on that page is rendered on the screen
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });
  test("Should load button inside contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  test("Should load button that has 'submit' text inside contact component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    //   const button = screen.getByText("To fail test case");// Try this To fail test case and check terminalF
    expect(button).toBeInTheDocument();
  });
  test("Should load input name (with placeholder name) inside contact component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });
  test("Should load all input boxes inside contact component", () => {
    render(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes);

    //Asserion
    expect(inputBoxes[1]).toBeInTheDocument();
  });

  it("Should check length of input boxes inside contact component", () => {
    render(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes.length);

    //Asserion
    expect(inputBoxes.length).toBe(2);
  });

  it("Should not have 4 input input boxes inside contact component", () => {
    render(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes.length);

    //Asserion
    expect(inputBoxes.length).not.toBe(4);
  });
});
