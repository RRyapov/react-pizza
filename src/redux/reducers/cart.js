const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
  // cartAddedPizzaCount: ,
  // cartAddedPizzaPrice: 0,
};

// const _get = (obj, path) => {
//   const [firstKey, ...keys] = path.split(".");

//   return keys.reduce((val, key) => {
//     return val[key];
//   }, obj[firstKey]);
// };

// const getTotalSum = (obj, path) => {
//   // const item = obj[key];
//   // const value = obj[key].items.length + sum;
//   return Object.values(obj).reduce((sum, obj) => {
//     const value = _get(obj, path);
//     return sum + value;
//   }, 0);
// };

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);
// это редюсер фильтрации
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

    // Вариант, предложенный Арчаковым - нихрена не работает//
    // <div>
    // // const currentPizzaItems = !state.items[action.payload.id]
    // //   ? [action.payload]
    // //   : [...state.items[action.payload.id].items, action.payload];

    // // const newItems = {
    // //   ...state.items,
    // //   [action.payload.id]: {
    // //     items: currentPizzaItems,
    // //     totalPrice: getTotalPrice(currentPizzaItems),
    // //   },
    // // };

    // // const totalCount = getTotalSum(newItems, "items.length");
    // // const totalPrice = getTotalSum(newItems, "totalPrice");

    // // const items = Object.values(newItems).map((obj) => obj.items);
    // // const totalCount = Object.keys(newItems).reduce(
    // //   (sum, key) => newItems[key].items.length + sum,
    // //   0
    // // );
    // // const allPizzas = [].concat.apply([], items);
    // // const totalPrice = Object.keys(newItems).reduce(
    // //   (sum, key) => newItems[key].totalPrice + sum,
    // //   0
    // // );

    // //   return {
    // //     ...state,
    // //     items: newItems,
    // //     totalCount,
    // //     totalPrice,
    // //   };
    // // }
    // //     case "SET_TOTAL_COUNT":
    // //       return {
    // //         ...state,
    // //         totalCount: action.payload,
    // //       };
    // </div>

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
      // console.log("Значение currentTotalCount:" + currentTotalCount);
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    case "PLUS_CART_ITEM": {
      // const newItems = {
      //   ...state.items[action.payload].items,
      // };
      // console.log(
      //   "Выводимые элементы" +
      //     state.items[action.payload].items.reduce(
      //       (sum, obj) => obj.price + sum,
      //       0
      //     )
      // );

      // let similarItems = {
      //   [action.payload.items]
      // }

      const pizzaAddedToCartPrice = state.items[action.payload].items[0].price;
      const pizzaAddedToCartSum =
        state.items[action.payload].totalPrice + pizzaAddedToCartPrice;
      console.log(pizzaAddedToCartSum);

      // const priceItems = {
      //   ...state.items[action.payload].items,
      //   [action.payload]: {
      //     items: newItems,
      //     totalPrice: state.items[action.payload].items.reduce(
      //       (sum, obj) => obj.price + sum,
      //       0
      //     ),
      //   },
      // };

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
        // [state.items[action.payload].totalPrice]:
        //   state.items[action.payload].totalPrice + pizzaAddedToCartPrice,
      };
    }
    default:
      return state;
  }
};
export default cart;

// {
//   [state.items[action.payload].totalPrice]:
//     state.items[action.payload].totalPrice +
//     state.items[action.payload].items[0].price,
// },

// ...state.items[action.payload].totalPrice:
// };

// case "PLUS_CART_ITEM": {
//   // =============================Попытка 4===================================
//   // const currentPizzaItems = [...state.items[action.payload].items];
//   // console.log(currentPizzaItems);
//   // const newItems = {
//   //   ...state.items,
//   //   items: currentPizzaItems,
//   //   totalPrice: getTotalPrice(currentPizzaItems),
//   // };
//   // console.log(newItems);
//   // const items = Object.values(newItems).map((obj) => obj.items);
//   // const allPizzas = [].concat.apply([], items);
//   // const allPizzasPrice = getTotalPrice(allPizzas);
//   // console.log("Значение items:" + items);
//   // console.log("Значение  allPizzas:" + allPizzas);
//   // console.log("Значение  allPizzasPrice:" + allPizzasPrice);
//   // return {
//   //   ...state,
//   //   // items: newItems,
//   //   totalCount: allPizzas.length,
//   //   totalPrice: allPizzasPrice,
//   // };
// }

// ==========================Попытка 3====================================
//   const cartAddedPizzaItems = [...state.items[action.payload].items];

//   // const newItems = {
//   //   ...state.items,
//   //   [action.payload]: {
//   //     items: cartAddedPizzaItems,
//   //     totalPrice: getTotalPrice(cartAddedPizzaItems),
//   //   },
//   // };
//   // console.log(newItems);

//   const items = Object.values(cartAddedPizzaItems).map((obj) => obj.items);
//   // console.log(items);
//   const allCartAddedPizzas = [].concat.apply([], items);
//   console.log(allCartAddedPizzas);
//   const allCartAddedPizzasPrice = getTotalPrice(allCartAddedPizzas);

//   return {
//     ...state,
//     items: cartAddedPizzaItems,
//     totalCount: allCartAddedPizzas.length,
//     totalPrice: allCartAddedPizzasPrice,
//   };
// }
// ============================= Попытка 1 ==================================
// const newItems = {
//   ...state.items,
// };

// const allCartAddedPizzasPrice = state.items[action.payload].items.reduce(
//   (sum, obj) => obj.price + sum,
//   0
// );
// console.log(allCartAddedPizzasPrice);

// const currentPizzaPrice = state.items[action.payload].items[0].price;

// const currentPizzaCount = state.items[action.payload].items.length + 1;
// console.log("Значение currentTotalCount:" + currentTotalCount);
// delete newItems[action.payload];
// return {
//   ...state,
//   [action.payload]: {
//     totalPrice: allCartAddedPizzasPrice,
//   },
//   // cartAddedPizzaPrice:
// };

// ============================= Попытка 2 ==================================

/*TODO нужно будет удалить после успешной реализации своего варианта*/
// <div>
// // case "PLUS_CART_ITEM":
// //   const newItems = [
// //     ...state.items[action.payload].items,
// //     state.items[action.payload].items[0],
// //   ];
// //   return {
// //     ...state,
// //     items: {
// //       ...state.items,
// //       [action.payload]: {
// //         items: newItems,
// //         totalPrice: getTotalPrice(newItems),
// //       },
// //     },
// //   };
// </div>
