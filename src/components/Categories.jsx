import React, { useState } from "react";
import { connect } from "react-redux";

function Categories({ categories }) {
  const [activeItem, setActiveItem] = useState(null);

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
              onClick={() => setActiveItem(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}

const mapStateToProps = ({ filters }) => ({
  categories: filters.categories,
});

export default connect(mapStateToProps)(Categories);
