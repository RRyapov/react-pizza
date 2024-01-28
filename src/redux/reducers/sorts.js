const popularType = { name: "популярности", type: "popular" };
const alphabetType = { name: "алфавиту", type: "alphabet" };
const priceType = { name: "цене", type: "price" };

const initialState = {
  sorts: [popularType, alphabetType, priceType],
  activeSortBy: popularType.type,
};
// это редюсер фильтрации
const sorts = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SORT_BY": {
      return {
        ...state,
        activeSortBy: action.payload,
      };
    }
    default:
      return state;
  }
};

export default sorts;
