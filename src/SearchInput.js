import React, { useState } from "react";

const fruitsList = [
  "apple",
  "banana",
  "grapes",
  "strawberry",
  "appy",
  "berry",
  "mango",
  "pineapple"
];

const SearchInput = () => {
  const [fruits, setFruits] = useState(fruitsList);
  const handleSearch = (event) => {
    console.log(event.target.value);
    // if (event.target.value === "") {
    //   setFruits(fruitsList);
    //   return;
    // }
    const filteredValues = fruitsList.filter((item) =>
      item.includes(event.target.value)
    );

    console.log("filteredValues", filteredValues);
    setFruits(filteredValues);
  };
  return (
    <div className="input-box">
      <input type="text" onChange={handleSearch} />
      <div className="text-items">
        {fruits.map((fruit, index) => {
          return (
            <h3 key={index} onClick={() => alert(fruit)}>
              {fruit}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default SearchInput;
