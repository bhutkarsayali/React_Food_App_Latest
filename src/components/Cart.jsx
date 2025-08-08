import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/redux-store-slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    //dispatch an actin on clear cart btn click
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="w-10/12 m-auto mt-[180px] p-10">
      <h1 className="font-bold text-2xl text-center">Cart</h1>
      {cartItems.length !== 0 && (
        <button className="filter-btn" onClick={handleClearCart}>
          Clear Cart
        </button>
      )}
      {/* <ul>
        {cartItems.map((item) => (
          <li >{item?.card?.info?.name}</li>
        ))}
      </ul> */}
      <div>
        <ItemList items={cartItems} />
      </div>
      {cartItems.length === 0 && <h1>No items in cart</h1>}
    </div>
  );
};

export default Cart;
