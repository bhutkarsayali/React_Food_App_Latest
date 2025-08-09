import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "./../mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      //   return Promise.resolve(data);
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the Body component and should search resList for Pizza- text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  // 1. before search filter my cards.length should be 8
  const cardsBeforeSearch = screen.getAllByTestId("rescard");

  // 2.
  expect(cardsBeforeSearch.length).toBe(8);

  //3.
  const searchBtn = screen.getByRole("button", { name: "Search" });

  //4.
  const searchInput = screen.getByTestId("searchInput");

  //   expect(searchBtn).toBeInTheDocument();
  //   expect(searchInput).toBeInTheDocument();

  //now check what is being typed inside search input box
  // 5.
  fireEvent.change(searchInput, { target: { value: "Pizza" } });

  //now click on search btn
  //6.
  fireEvent.click(searchBtn);

  ///when I actually search on app for burger it is giving me 2 cards as a filtered result
  // so screen should load 1 card
  // const filteredCards = screen.getByTestId("rescard");
  //7.
  const cardsAfterSearch = screen.getAllByTestId("rescard");

  //now length of filtered cards should be 2
  // 8.
  expect(cardsAfterSearch.length).toBe(2);
});
