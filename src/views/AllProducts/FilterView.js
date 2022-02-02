import React from "react";

const FilterView = () => {
  return (
    <div>
      <div className="bg-white drop-shadow-lg rounded-3xl p-5">
        <h2 className="text-2xl">Category</h2>
        <div className="mt-4">
          <div>
            <input
              type="checkbox"
              name="electronics"
              value="electronics"
              id="electronics"
              className="w-4 h-4"
            ></input>
            <label className="text-lg"> electronics</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="electronics"
              value="electronics"
              id="electronics"
              className="w-4 h-4"
            ></input>
            <label className="text-lg"> electronics</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="electronics"
              value="electronics"
              id="electronics"
              className="w-4 h-4"
            ></input>
            <label className="text-lg"> electronics</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterView;
