import React from "react";

const FilterView = (props) => {
  const { activeFilter, setActiveFilter, products } = props;

  const categories = products[0].reduce((acc, curr) => {
    if (acc.indexOf(curr.category) === -1) {
      acc.push(curr.category);
    }
    return acc;
  }, []);

  const handleChange = (text) => (event) => {
    setActiveFilter((prev) => ({
      ...prev,
      [text]: event.target.checked,
    }));
  };

  return (
    <div className="sticky top-0.5">
      <div className="bg-white drop-shadow-lg rounded-2xl p-5 ">
        <h2 className="text-lg">Category</h2>
        <div className="mt-4">
          {categories.map((category, i) => {
            return (
              <div key={i}>
                <input
                  type="checkbox"
                  name={category}
                  value={category}
                  id={category}
                  onChange={handleChange(category)}
                ></input>
                <label className="text-sm"> {category}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterView;
