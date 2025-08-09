import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "./../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { mockProps } from "../mocks/MockPropsForRestaurantcsrd";

//Wrap the component with HOC
const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

it("Should render RestaurantCard component with props data", () => {
  // it takes props in actual componnet i.e. resData
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Theobroma");
  expect(name).toBeInTheDocument();
});
it("Should render RestaurantCard component with promoted label(render higher order component)", () => {
  render(<PromotedRestaurantCard {...mockProps} />);
  const name = screen.getByText(/Promoted/i);
//   const cuisines = screen.getByText(/Bakery/i);
  expect(name).toBeInTheDocument();
//   expect(cuisines).toBeInTheDocument();
});
