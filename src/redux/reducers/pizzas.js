const initialState = {
  items: [],
  isLoaded: false,
};
// это редюсер фильтрации
const pizzas = (state = initialState, action) => {
  if (action.type === "SET_PIZZAS") {
    return {
      ...state,
      items: action.payload,
    };
  }
  if (action.type === "CLEAR_PIZZAS") {
    return {
      ...state,
      items: [],
    };
  }
  return state;
};

export default pizzas;
