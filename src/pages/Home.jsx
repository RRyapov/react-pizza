import React from "react";
import { Categories, SortPopup, PizzaBlock } from "../components";
import { connect, useSelector, useDispatch } from "react-redux";

function Home({ items }) {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <SortPopup />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

const mapStateToProps = ({ pizzas }) => {
  return {
    items: pizzas.items,
  };
};

export default connect(mapStateToProps)(Home);
