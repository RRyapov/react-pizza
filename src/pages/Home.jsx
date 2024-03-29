// npx json-server --watch public/db.json --port=3001

import React, { useCallback, useEffect } from "react";
import {
  Categories,
  SortPopup,
  PizzaBlock,
  PizzaLoadingBlock,
} from "../components";
import { useSelector, useDispatch } from "react-redux";

import { fetchPizzas } from "../redux/actions/actionPizzas";

import { setCategory, setSortBy } from "../redux/actions/actionFilters";

function Home() {
  const dispatch = useDispatch();
  const { items, isLoaded, category, sorts, activeSortBy, cartItems } =
    useSelector(({ pizzas, filters, sorting, cart }) => ({
      items: pizzas.items,
      isLoaded: pizzas.isLoaded,
      category: filters.category,
      sorts: sorting.sorts,
      activeSortBy: sorting.activeSortBy,
      cartItems: cart.items,
    }));

  console.log(cartItems);

  useEffect(() => {
    dispatch(fetchPizzas(activeSortBy, category));
  }, [category, activeSortBy]);

  const onSelectCategory = useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [dispatch]
  );

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: "ADD_PIZZA_CART",
      payload: obj,
    });
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
        />
        <SortPopup
          activeSortType={activeSortBy}
          sorts={sorts}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                onClickAddPizza={handleAddPizzaToCart}
                key={obj.id}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                {...obj}
              />
            ))
          : Array(8)
              .fill(0)
              .map((_, index) => (
                <PizzaLoadingBlock className="pizza-block" key={index} />
              ))}
      </div>
    </div>
  );
}

export default Home;
