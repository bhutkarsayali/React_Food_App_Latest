import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "./../../utils/appStore";
import { BrowserRouter } from "react-router";

it("Should render Header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //   const loginBtn = screen.getByRole("button");
  //If we have multiple btns on the component then we can identify specific btn by passing an extrra parameter and giving button name
  const loginBtn = screen.getByRole("button", { name: "Login" });
  //   const loginBtn = screen.getByText("Login");
  expect(loginBtn).toBeInTheDocument();
});
it("Should render Header component with Cart (0 items)", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const CartItems = screen.getByText("Cart (0 items)");
  expect(CartItems).toBeInTheDocument();
});
it("Should render Header component with Cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //  Just to check cart and not exact string we can use regex
  const CartItems = screen.getByText(/Cart/);
  expect(CartItems).toBeInTheDocument();
});
it("Should change login btn to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });
  //user fireevent to simulate events like click etc
  fireEvent.click(loginBtn);
  const logoutBtn = screen.getByRole("button", { name: "Logout" });
  expect(logoutBtn).toBeInTheDocument();
});
