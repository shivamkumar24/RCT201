import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getProductRequest,
  getProductSuccess,
  getProductError,
  postProductRequest,
  postProductSuccess,
  postProductError,
} from "../../Redux/Home/home.actions";

const Home = () => {
  const { products, isLoading, isError } = useSelector(
    (state) => state.HomeReducer
  );
  // console.log(products, isLoading, isError);

  const dispatch = useDispatch();

  const getProduct = () => {
    dispatch(getProductRequest());

    axios
      .get(`http://localhost:8080/products`)
      .then((res) => {
        dispatch(getProductSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getProductError());
      });
  };

  const addCart = (title) => {
    dispatch(postProductRequest());
    const payload = {
      title,
      status: "false",
    };

    axios
      .post(`http://localhost:8080/cart`, payload)
      .then((res) => {
        dispatch(postProductSuccess(res.data));
      })
      .catch((err) => {
        dispatch(postProductError());
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  // console.log("Total Products: ", products);

  return (
    <div>
      <div>
        <Link
          to="/"
          style={{ margin: "10px 50px", fontSize: "22px", fontWeight: "bold" }}
        >
          Home
        </Link>
        <Link
          to="/cart"
          style={{ margin: "10px 50px", fontSize: "22px", fontWeight: "bold" }}
        >
          Cart
        </Link>
        <Link
          to="/auth"
          style={{ margin: "10px 50px", fontSize: "22px", fontWeight: "bold" }}
        >
          Login
        </Link>
      </div>
      <div>
        {products.length &&
          products.map((el) => {
            return (
              <Link to="/cart">
                <p onClick={() => addCart(el.title)}>
                  {el.id} ---- {el.title} ---- {el.status}{" "}
                </p>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
