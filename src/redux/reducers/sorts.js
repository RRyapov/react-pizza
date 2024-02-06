const popularType = { name: "популярности", type: "popular" };
const nameType = { name: "алфавиту", type: "name" };
const priceType = { name: "цене", type: "price" };

const initialState = {
  sorts: [popularType, nameType, priceType],
  activeSortBy: popularType.type,
};
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
