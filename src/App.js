import Card from "./components/Card";
import { AiFillHeart } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import Littlecard from "./components/Littlecard";
import { useState } from "react";

function App() {
  return (
    <div className="bg-black w-full h-screen items-center grid justify-center">
      <div className="text-3xl text-white"></div>
      <div className="relative w-[30vmin] [&>*:nth-child(1)]:hover:-translate-x-[100%] [&>*:nth-child(1)]:hover:translate-y-[2rem] [&>*:nth-child(1)]:hover:-rotate-[16deg] [&>*:nth-child(2)]:hover:-translate-x-[40%] [&>*:nth-child(2)]:hover:-translate-y-[1.5rem] [&>*:nth-child(2)]:hover:-rotate-12 [&>*:nth-child(3)]:hover:translate-x-[100%] [&>*:nth-child(3)]:hover:translate-y-[2rem] [&>*:nth-child(3)]:hover:rotate-[16deg] [&>*:nth-child(4)]:hover:translate-x-[40%] [&>*:nth-child(4)]:hover:-translate-y-[1.5rem] [&>*:nth-child(4)]:hover:rotate-12 [&>*:nth-child(5)]:hover:-translate-x-[110%] [&>*:nth-child(5)]:hover:translate-y-[20rem] [&>*:nth-child(5)]:hover:-rotate-[12deg] [&>*:nth-child(6)]:hover:-translate-x-[40%] [&>*:nth-child(6)]:hover:-translate-y-[6rem] [&>*:nth-child(6)]:hover:rotate-12 [&>*:nth-child(7)]:hover:translate-x-[100%] [&>*:nth-child(7)]:hover:-translate-y-[4rem] [&>*:nth-child(7)]:hover:-rotate-[16deg] [&>*:nth-child(8)]:hover:translate-x-[130%] [&>*:nth-child(8)]:hover:translate-y-[20rem] [&>*:nth-child(8)]:hover:rotate-[32deg]">
        <div className="-translate-x-10 -rotate-3 ease-[cubic-bezier(.16,.79,.36,.89)] duration-500 pointer-events-auto z-10">
          <Card />
        </div>
        <div className="ease-[cubic-bezier(.16,.79,.36,.89)] duration-500 pointer-events-auto">
          <Card />
        </div>
        <div className="-translate-x-5 -rotate-3 ease-[cubic-bezier(.16,.79,.36,.89)] duration-500 relative z-10">
          <Card />
        </div>
        <div className="translate-x-3 rotate-3 ease-[cubic-bezier(.16,.79,.36,.89)] duration-500 ">
          <Card />
        </div>
        <div className="translate-y-1 ease-[cubic-bezier(.16,.79,.36,.89)] duration-500">
          <Littlecard />
        </div>
        <div className="translate-y-1 ease-[cubic-bezier(.16,.79,.36,.89)] duration-500">
          <Littlecard />
        </div>
        <div className=" translate-y-1 ease-[cubic-bezier(.16,.79,.36,.89)] duration-500">
          <Littlecard />
        </div>
        <div className="translate-y-1 ease-[cubic-bezier(.16,.79,.36,.89)] duration-500">
          <Littlecard />
        </div>
      </div>
      <div className="text-center flex items-center justify-center mt-[17rem] text-3xl mb-[8rem]">
        <div>
          <div className="absolute bg-neutral-400 mx-8 p-3 w-12 h-12 rounded-full hover:blur duration-300 cursor-pointer"></div>
          <RxCross1 className="text-neutral-400 mx-8 p-3 box-border outline outline-neutral-400 rounded-full w-12 h-12 relative bg-black pointer-events-none" />
        </div>
        <div>
          <div className="absolute bg-green-600 mx-8 p-3 w-12 h-12 rounded-full hover:blur duration-300 cursor-pointer"></div>
          <AiFillHeart className="text-green-600 mx-8 p-3 box-border outline outline-green-600 rounded-full w-12 h-12 relative bg-black pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

export default App;
