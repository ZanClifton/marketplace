import React from "react";
import { ItemList } from "../components/ItemList";
import { useState, useEffect } from "react";

export const Home = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://marketplace-api-72935.herokuapp.com/api/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data.categories)
        setCategory(data.categories);
      });
  }, []);

  return (
    <div>
      Home
     
      <ItemList category={category}/>
    </div>
  );
};
