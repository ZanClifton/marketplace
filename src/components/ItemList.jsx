import { useEffect, useState } from "react";
import { Item } from "./Item";

export const ItemList = () => {
  const [showItems, setShowItems] = useState([]);

  useEffect(() => {
    fetch("https://marketplace-api-72935.herokuapp.com/api/items")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setShowItems(data.items);
      });
  }, []);

  return (
    <div>
      <Item items={showItems} />
    </div>
  );
};
