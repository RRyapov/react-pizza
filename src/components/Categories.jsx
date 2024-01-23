import React, { useState } from "react";
import { useSelector } from "react-redux";
import filters from "../redux/reducers/filters";

const Categories = React.memo(function Categories({ onClickItem }) {
  const [activeItem, setActiveItem] = useState(null);
  const categories = useSelector(({ filters }) => filters.categories);

  const onSelectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => setActiveItem(null)}
        >
          Все
        </li>
        {categories &&
          categories.map((name, index) => (
            <li
              className={activeItem === index ? "active" : ""}
              onClick={() => onSelectItem(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
});

// const mapStateToProps = ({ filters }) => ({
//   categories: filters.categories,
// });

export default Categories;
