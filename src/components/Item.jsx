import React from "react";

export const Item = (props) => {
  const { items } = props;
  return (
    <div>
      <ul className="list-item">
        {items.map((item) => {
          return (
            <li key={item.item_id}>
              <img src={item.img_url} alt="" />
              <h4>Name: {item.item_name}</h4>
              <p>
                <span>Category:</span> {item.category_name}
              </p>
              <p>
                <span>Description:</span> {item.description}
              </p>
              <p>
                <span>Price: £</span> {item.price}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
