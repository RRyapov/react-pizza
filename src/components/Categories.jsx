import React, { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

// import filters from "../redux/reducers/filters";

const Categories = React.memo(function Categories({
  activeCategory,
  onClickCategory,
}) {
  // const [activeItem, setActiveItem] = useState(null);
  const categories = useSelector(({ filters }) => filters.categories);

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          // onClick={() => setActiveItem(null)}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {categories &&
          categories.map((name, index) => (
            <li
              className={activeCategory === index ? "active" : ""}
              onClick={() => onClickCategory(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  activeCategory: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.object),
  onClickCategory: PropTypes.func,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};

export default Categories;
