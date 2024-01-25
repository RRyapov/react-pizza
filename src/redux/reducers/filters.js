const initialState = {
  categories: ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"],
  category: null,
};
// это редюсер фильтрации
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
