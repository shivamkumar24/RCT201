import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartRequest,
  getCartSuccess,
  getCartError,
} from "../../Redux/Cart/cart.actions";

const Cart = () => {
  const { products, isLoading, isError } = useSelector(
    (state) => state.CartReducer
  );
  console.log(products, isLoading, isError);
  const dispatch = useDispatch();

  const getCartProduct = () => {
    dispatch(getCartRequest());

    axios
      .get(`http://localhost:8080/cart`)
      .then((res) => {
        dispatch(getCartSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getCartError());
      });
  };

  useEffect(() => {
    getCartProduct();
  }, []);

  return (
    <div>
      {" "}
      {products.length &&
        products.map((el) => {
          return (
            <p>
              {el.id} ---- {el.title} ---- {el.status}{" "}
            </p>
          );
        })}
    </div>
  );
};

export default Cart;
