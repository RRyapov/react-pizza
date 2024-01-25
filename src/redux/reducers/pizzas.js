const initialState = {
  items: [],
  isLoaded: false,
};
// это редюсер фильтрации
const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PIZZAS":
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };

    case "SET-LOADED":
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};
export default pizzas;
