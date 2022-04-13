import { useEffect, useState } from "react";
// import { Item } from './Item';

export const ItemList = () => {
  const [showItems, setShowItems] = useState([]);

  useEffect(() => {
    fetch("https://marketplace-api-72935.herokuapp.com/api/items")
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        setShowItems(data);
        //   console.log()
      });
  }, []);

  
  return (
      <div>
          {console.log(showItems.items)}
        {/* {showItems[0]} */}
    </div>
  );
};
