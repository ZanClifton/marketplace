import { useEffect, useState } from "react";
import { ItemPage } from "../routes/ItemPage";
import { Item } from "./Item";

export const ItemList = ({ category }) => {
  const [showItems, setShowItems] = useState([]);
  const [selectCategory, setSelectCategory] = useState("");

  useEffect(() => {
    let fetchString = `https://marketplace-api-72935.herokuapp.com/api/items`;

    if (selectCategory !== "select") {
      fetchString += `?category_name=${selectCategory}`;
    }

    fetch(fetchString)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setShowItems(data.items);
      });
  }, [selectCategory]);

  console.log(category, "<< category");

  return (
    <div>
      <select
        name="selector"
        id=""
        onChange={(event) => {
          setSelectCategory(event.target.value);
        }}
      >
        <option value="select" key="select">
          Select Category
        </option>
        {category.map((cat) => {
          return (
            <option value={cat.category_name} key={cat.category_name}>
              {cat.category_name}
            </option>
          );
        })}
      </select>
      <Item items={showItems} />
      <ItemPage items={showItems} />
    </div>
  );
};
