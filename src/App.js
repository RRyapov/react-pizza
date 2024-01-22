import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

import { setPizzas } from "./redux/actions/actionPizzas";
import { Header } from "./components";
import { Home, Cart } from "./pages";

// function App() {
//   //   const [pizzas, setPizzas] = useState([]);
//   //   const {pizzas: {items}} = useStore([]);

//   useEffect(() => {
//     axios.get("http://localhost:3000/db.json").then(({ data }) => {
//       setPizzas(data.pizzas);
//     });
//   }, []);

//   return;
// }
class App extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      window.store.dispatch({
        type: "SET_PIZZAS",
        payload: data.pizzas,
      });
    });
  }

  render() {
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
}

// console.log(mapStateToProps());
export default App;
