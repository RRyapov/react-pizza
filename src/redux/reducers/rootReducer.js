import { combineReducers } from "redux";
import filtersReducer from "./filters";
import pizzasReducer from "./pizzas";
import cartReducer from "./cart";
import sorts from "./sorts";

const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
  sorting: sorts,
  cart: cartReducer,
});

export default rootReducer;
