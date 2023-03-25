import React from "react";

function Card(props) {
  return (
    <div className="">
      <div className="absolute md:w-[30vmin] w-[40vmin]">
        <div className={props.className}></div>
      </div>
    </div>
  );
}

export default Card;
