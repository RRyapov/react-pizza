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
import { addPizzaToCart } from "../redux/actions/actionCart";

import { setCategory, setSortBy } from "../redux/actions/actionFilters";

function Home() {
  const dispatch = useDispatch();
  const { items, isLoaded, category, sorts, activeSortBy } = useSelector(
    ({ pizzas, filters, sorting }) => ({
      items: pizzas.items,
      isLoaded: pizzas.isLoaded,
      category: filters.category,
      sorts: sorting.sorts,
      activeSortBy: sorting.activeSortBy,
    })
  );

  useEffect(() => {
    //   axios.get("http://localhost:3001/pizzas/activeSort").then(({ data }) => {
    //     // window.store.dispatch(setPizzas(data.pizzas));
    //     dispatch(setPizzas(data));
    //   });
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
                /*TODO нужно разобраться с багом: функция консоль выполянетсяпо всем элементам при загрузке (возможно, что-то с зависимостями на UseEffect)*/
                onClickAddPizza={handleAddPizzaToCart}
                key={obj.id}
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
