import React from "react";

function Card(props) {
  return (
    <div className="">
      <div className="absolute  w-[30vmin]">
        <div className={props.className}></div>
      </div>
    </div>
  );
}

export default Card;
