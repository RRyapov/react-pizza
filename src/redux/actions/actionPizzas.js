import axios from "axios";

export const setLoaded = (payload) => ({
  type: "SET_LOADED",
  payload,
});

export const fetchPizzas = (activeSortBy, category) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `http://localhost:3001/pizzas?${
        category !== null ? `category=${category}` : ""
      }&_sort=${activeSortBy}`
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setPizzas = (items) => ({
  type: "SET_PIZZAS",
  payload: items,
});

// export const setCategory = (catIndex) => ({
//   type: "SET_CATEGORY",
//   payload: name,
// });
