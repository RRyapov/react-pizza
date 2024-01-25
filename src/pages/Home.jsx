import React, { useCallback, useEffect } from "react";
import {
  Categories,
  SortPopup,
  PizzaBlock,
  PizzaLoadingBlock,
} from "../components";
import { useSelector, useDispatch } from "react-redux";

import { fetchPizzas } from "../redux/actions/actionPizzas";

import { setCategory } from "../redux/actions/actionFilters";

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category } = useSelector(({ filters }) => filters);
  const sorts = useSelector(({ sorting }) => sorting);
  console.log(category);

  useEffect(() => {
    //   axios.get("http://localhost:3001/pizzas").then(({ data }) => {
    //     // window.store.dispatch(setPizzas(data.pizzas));
    //     dispatch(setPizzas(data));
    //   });
    dispatch(fetchPizzas());
  }, [category]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={onSelectCategory} />
        <SortPopup />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
          : Array(8)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
