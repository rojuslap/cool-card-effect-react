import React from "react";
import Littlecard from "./Littlecard";
import Card from "./Card";

function Cardgroup(props) {
  return (
    <div className="relative w-[30vmin] [&>*:nth-child(1)]:hover:-translate-x-[100%] [&>*:nth-child(1)]:hover:translate-y-[2rem] [&>*:nth-child(1)]:hover:-rotate-[16deg] [&>*:nth-child(2)]:hover:-translate-x-[40%] [&>*:nth-child(2)]:hover:-translate-y-[1.5rem] [&>*:nth-child(2)]:hover:-rotate-12 [&>*:nth-child(3)]:hover:translate-x-[100%] [&>*:nth-child(3)]:hover:translate-y-[2rem] [&>*:nth-child(3)]:hover:rotate-[16deg] [&>*:nth-child(4)]:hover:translate-x-[40%] [&>*:nth-child(4)]:hover:-translate-y-[1.5rem] [&>*:nth-child(4)]:hover:rotate-12 [&>*:nth-child(5)]:hover:-translate-x-[110%] [&>*:nth-child(5)]:hover:translate-y-[15rem] md:[&>*:nth-child(5)]:hover:translate-y-[20rem] [&>*:nth-child(5)]:hover:-rotate-[12deg] [&>*:nth-child(6)]:hover:-translate-x-[40%] [&>*:nth-child(6)]:hover:-translate-y-[6rem] [&>*:nth-child(6)]:hover:rotate-12 [&>*:nth-child(7)]:hover:translate-x-[100%] [&>*:nth-child(7)]:hover:-translate-y-[4rem] [&>*:nth-child(7)]:hover:-rotate-[16deg] [&>*:nth-child(8)]:hover:translate-x-[130%] [&>*:nth-child(8)]:hover:translate-y-[17rem] md:[&>*:nth-child(8)]:hover:translate-y-[20rem] [&>*:nth-child(8)]:hover:rotate-[32deg]">
      <div className="-translate-x-10 -rotate-3 ease-[cubic-bezier(.16,.79,.36,.89)] duration-500 pointer-events-auto z-10">
        <Card className={`${props.className} ${props.card1}`} />
      </div>
      <div className="ease-[cubic-bezier(.16,.79,.36,.89)] duration-500 pointer-events-auto">
        <Card className={`${props.className} ${props.card2}`} />
      </div>
      <div className="-translate-x-5 -rotate-3 ease-[cubic-bezier(.16,.79,.36,.89)] duration-500 relative z-10">
        <Card className={`${props.className} ${props.card3}`} />
      </div>
      <div className="translate-x-3 rotate-3 ease-[cubic-bezier(.16,.79,.36,.89)] duration-500 ">
        <Card className={`${props.className} ${props.card4}`} />
      </div>
      <div className="translate-y-1 ease-[cubic-bezier(.16,.79,.36,.89)] duration-500">
        <Littlecard
          littleClassName={`${props.littleClassName} ${props.littleCard1}`}
        />
      </div>
      <div className="translate-y-1 ease-[cubic-bezier(.16,.79,.36,.89)] duration-500">
        <Littlecard
          littleClassName={`${props.littleClassName} ${props.littleCard2}`}
        />
      </div>
      <div className=" translate-y-1 ease-[cubic-bezier(.16,.79,.36,.89)] duration-500">
        <Littlecard
          littleClassName={`${props.littleClassName} ${props.littleCard3}`}
        />
      </div>
      <div className="translate-y-1 ease-[cubic-bezier(.16,.79,.36,.89)] duration-500">
        <Littlecard
          littleClassName={`${props.littleClassName} ${props.littleCard4}`}
        />
      </div>
    </div>
  );
}

export default Cardgroup;
