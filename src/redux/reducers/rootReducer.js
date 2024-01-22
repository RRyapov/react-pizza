import { combineReducers } from "redux";
import filtersReducer from "./filters";
import pizzasReducer from "./pizzas";
import sorts from "./sorts";

// откуда берется filtersReducer, если в самом файле filters.js отсутствует сущность с таким названием??
// импортируемые из файла редюсеры можно называть произвольно?

const rootReducer = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
  sorting: sorts,
});

export default rootReducer;
