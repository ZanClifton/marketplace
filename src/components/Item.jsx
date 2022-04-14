import React from "react";
import { Link } from "react-router-dom";

export const Item = (props) => {
  const { items } = props;
  return (
    <div>
      <ul className="list-item">
        {items.map((item) => {
          return (
            <li key={item.item_id}>
              <img className="top-left" src={item.img_url} alt="" />
              <h4 className="top-right">Name: {item.item_name}</h4>
              <p className="bottom">
                <span>Category:</span> {item.category_name}
              </p>
              <p className="bottom">
                <span>Description:</span> {item.description}
              </p>
              <p className="top-right">
                <span>Price: £</span> {item.price}
              </p>
              <Link className="Link" to={`/items/${item.item_id}`}>
                Buy Now
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
