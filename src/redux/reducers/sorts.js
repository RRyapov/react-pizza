const initialState = {
  sorts: [
    { name: "популярности", type: "popular" },
    { name: "алфавиту", type: "alphabet" },
    { name: "цене", type: "price" },
  ],
  sortBy: "popular",
};
// это редюсер фильтрации
const sorts = (state = initialState, action) => {
  if (action.type === "SET_SORT_BY") {
    return {
      ...state,
      sortBy: action.payload,
    };
  }

  return state;
};

export default sorts;
