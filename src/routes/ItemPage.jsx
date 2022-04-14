import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const ItemPage = () => {
  const { item_id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`https://marketplace-api-72935.herokuapp.com/api/items/${item_id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItem(data.item);
      });
  }, []);
  return (
    <div className="item-container">
      <div className="item">
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
      </div>
    </div>
  );
};
