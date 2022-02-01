import React, { useState } from "react";

const Collapsible = (props) => {
  const [open, setOpen] = useState(false);

  const openCollapsible = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <div
        onClick={openCollapsible}
        className=" cursor-pointer p-10 items-center flex justify-between rounded-lg mt-16 border-2 border-gray-400"
      >
        <h1 className="text-2xl font-bold">{props.title}</h1>{" "}
        <i className="text-dark-green fas fa-caret-down fa-2x"></i>
      </div>
      <div
        className={`${
          open ? "" : "hidden"
        } bg-white mx-2 h-72 p-5 flex items-center border border-gray-600 `}
      >
        <p>{props.description}</p>
      </div>
    </div>
  );
};
export default Collapsible;