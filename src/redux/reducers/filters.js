const initialState = {
  categories: ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"],
  category: null,
};
const filters = (state = initialState, action) => {
  if (action.type === "SET_CATEGORY") {
    return {
      ...state,
      category: action.payload,
    };
  }
  return state;
};

export default filters;
