const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};
// это редюсер фильтрации
const cart = (state = initialState, action) => {
  switch (action.type) {
    case "'ADD_PIZZA-CART'":
      return {
        ...state,
        items: {
          [action.payload.id]: [
            ...state.items[action.payload.id],
            action.payload,
          ],
        },
      };

    //     case "SET_TOTAL_COUNT":
    //       return {
    //         ...state,
    //         totalCount: action.payload,
    //       };

    default:
      return state;
  }
};
export default cart;
