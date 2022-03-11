import React from "react";

const SortView = (props) => {
  const { items, products, setCategory, setMin, setMax } = props;

  const categories = products[0].reduce((acc, curr) => {
    if (acc.indexOf(curr.category) === -1) {
      acc.push(curr.category);
    }
    return acc;
  }, []);

  const handleChange = (e, filterType) => {
    switch (filterType) {
      case "category":
        setCategory(e.target.value);
        break;
      case "min":
        setMin(e.target.value);
        break;
      case "max":
        setMax(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="flex flex-wrap lg:justify-between items-center  mb-6 lg:space-x-6">
        <p>Results: ({items.length} Entries) </p>

        <div className="flex flex-wrap">
          <div>
            <label>Category:</label>
            <select
              className="mx-5"
              onChange={(e) => handleChange(e, "category")}
            >
              <option value="all">All</option>
              {categories.map((category, i) => {
                return (
                  <option key={i} value={category}>
                    {category[0].toUpperCase() + category.substring(1)}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex flex-wrap mt-5 md:mt-0">
            <input
              type="number"
              name="minPrice"
              placeholder="Min Price"
              onChange={(e) => handleChange(e, "min")}
              min={0}
              className="w-2/5 md:w-auto"
            ></input>
            <p className="mx-5">to</p>
            <input
              type="number"
              name="maxPrice"
              placeholder="Max Price"
              className="w-2/5 md:w-auto"
              min={0}
              onChange={(e) => handleChange(e, "max")}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortView;
