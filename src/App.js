import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { setPizzas } from "./redux/actions/actionPizzas";
import { useDispatch } from "react-redux";

import { Header } from "./components";
import { Home, Cart } from "./pages";
// import sorts from "./redux/reducers/sorts";

function App() {
  const dispatch = useDispatch();
  // const storage = useSelector(({ pizzas, sorting }) => {
  //   return {
  //     items: pizzas.items,
  //     sorts: sorting.sorts,
  //   };
  // });

  useEffect(() => {
    axios.get("http://localhost:3001/pizzas").then(({ data }) => {
      // window.store.dispatch(setPizzas(data.pizzas));
      dispatch(setPizzas(data));
    });
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
