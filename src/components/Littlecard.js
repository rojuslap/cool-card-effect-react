import React from "react";

function Littlecard(props) {
  return (
    <div className="flex justify-center absolute w-[100%]">
      <div className={`${props.littleClassName} md:w-[12vmin] w-[18vmin]`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Littlecard;
