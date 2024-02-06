const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);
const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PIZZA_CART": {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const items = Object.values(newItems).map((obj) => obj.items);
      const allPizzas = [].concat.apply([], items);
      const allPizzasPrice = getTotalPrice(allPizzas);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice: allPizzasPrice,
      };
    }

    case "CLEAR_CART":
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };

    case "REMOVE_CART_ITEM": {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    case "PLUS_CART_ITEM": {
      const pizzaAddedToCartPrice = state.items[action.payload].items[0].price;
      const pizzaAddedToCartSum =
        state.items[action.payload].totalPrice + pizzaAddedToCartPrice;
      console.log(pizzaAddedToCartSum);

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            ...state.items[action.payload],
            totalPrice: state.items[action.payload].items.reduce(
              (sum, obj) => obj.price + sum,
              state.items[action.payload].items[0].price
            ),
          },
        },
        totalPrice: state.totalPrice + pizzaAddedToCartPrice,
        totalCount: state.totalCount + 1,
        cartAddedPizzaCount: state.items[action.payload].items.push(
          state.items[action.payload].items[0]
        ),
      };
    }

    case "MINUS_CART_ITEM": {
      const pizzaAddedToCartPrice = state.items[action.payload].items[0].price;

      const checkArrLengthToPopElement = () =>
        state.items[action.payload].items.length > 0
          ? state.items[action.payload].items.splice(1, 1)
          : 0;

      const checkItemTotalPrice = () =>
        state.items[action.payload].items.length > 1
          ? state.items[action.payload].totalPrice -
            state.items[action.payload].items[0].price
          : state.items[action.payload].items[0].price;

      const objectToArray = Object.values(state.items).reduce(
        (sum, elem) => elem.items.length + sum,
        0
      );

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload]: {
            ...state.items[action.payload],
            totalPrice: checkItemTotalPrice(),
          },
        },
        totalPrice: state.totalPrice - pizzaAddedToCartPrice,
        totalCount: objectToArray - 1,
        cartAddedPizzaCount: checkArrLengthToPopElement(),
      };
    }

    default:
      return state;
  }
};
export default cart;
