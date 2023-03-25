import { AiFillHeart } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import Cardgroup from "./components/Cardgroup";
import classNames from "classnames";
import Card from "./components/Card";

function App() {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(1);
  const [state3, setState3] = useState(2);

  const handleClickLove1 = () => {
    setState1((state1 + 1) % 3);
    setState2((state2 + 1) % 3);
    setState3((state3 + 1) % 3);
    const button = document.querySelector(".love-button");
    button.classList.add("scale-75");

    // Remove the class after a brief delay
    setTimeout(() => {
      button.classList.remove("scale-75");
    }, 100);
  };
  const handleClickHate1 = () => {
    setState1((state1 - 1 + 3) % 3);
    setState2((state2 - 1 + 3) % 3);
    setState3((state3 - 1 + 3) % 3);
    const button = document.querySelector(".hate-button");
    button.classList.add("scale-75");

    // Remove the class after a brief delay
    setTimeout(() => {
      button.classList.remove("scale-75");
    }, 100);
  };

  const box1ClassNames = classNames(
    {
      "-translate-x-[70%] translate-y-[10rem] scale-0 duration-300 ease-in-out":
        state1 === 0,
    },
    {
      "translate-x-[70$] duration-300 scale-1 delay-200 ease-in-out":
        state1 === 1,
    },
    {
      "translate-x-[70%] translate-y-[10rem] duration-300 ease-in-out scale-0":
        state1 === 2,
    }
  );

  const box2ClassNames = classNames(
    {
      "-translate-x-[70%] translate-y-[10rem] scale-0 duration-300 ease-in-out":
        state2 === 0,
    },
    {
      "translate-x-[70$] duration-300 ease-in-out scale-1 delay-200":
        state2 === 1,
    },
    {
      "translate-x-[70%] translate-y-[10rem] duration-300 ease-in-out scale-0":
        state2 === 2,
    }
  );

  const box3ClassNames = classNames(
    {
      "-translate-x-[70%] translate-y-[10rem] scale-0 duration-300 ease-in-out":
        state3 === 0,
    },
    {
      "translate-x-[70$] duration-300 ease-in-out scale-1 delay-200":
        state3 === 1,
    },
    {
      "scale-0 translate-x-[70%] translate-y-[10rem] duration-300 ease-in-out":
        state3 === 2,
    }
  );
  const classNames1 = [
    "aspect-[5/7] bg-red-500 rounded-3xl",
    "aspect-[5/7] bg-green-500 rounded-3xl",
    "aspect-[5/7] bg-blue-500 rounded-3xl",
    "aspect-[5/7] bg-yellow-500 rounded-3xl",
  ];
  return (
    <div className="bg-black w-full h-screen items-center grid justify-center">
      <div className="mx-auto max-w-screen-lg">
        <div className="">
          <div className={box1ClassNames}>
            <Cardgroup
              className={`aspect-[5/7] bg-blue-400 rounded-3xl [&>*:nth-child(1)]:bg-green-600`}
              littleClassName="aspect-[5/7] md:w-[12vmin] bg-neutral-600 rounded-3xl"
              card1="bg-blue-100"
              card2="bg-blue-300"
              card3="bg-blue-400"
              card4="bg-blue-700"
              littleCard1="bg-blue-100"
              littleCard2="bg-blue-200"
              littleCard3="bg-blue-300"
              littleCard4="bg-blue-700"
            />
          </div>
        </div>
        <div className={box2ClassNames}>
          <div>
            <Cardgroup
              className={`aspect-[5/7] bg-blue-400 rounded-3xl [&>*:nth-child(1)]:bg-green-600`}
              littleClassName="aspect-[5/7] w-[12vmin] bg-neutral-600 rounded-3xl"
              card1="bg-red-100"
              card2="bg-red-300"
              card3="bg-red-500"
              card4="bg-red-700"
              littleCard1="bg-red-100"
              littleCard2="bg-red-400"
              littleCard3="bg-red-600"
              littleCard4="bg-red-700"
            />
          </div>
        </div>
        <div className={box3ClassNames}>
          <div>
            <Cardgroup
              className={`aspect-[5/7] bg-blue-400 rounded-3xl [&>*:nth-child(1)]:bg-green-600`}
              littleClassName="aspect-[5/7] w-[12vmin] bg-neutral-600 rounded-3xl"
              card1="bg-green-100"
              card2="bg-green-400"
              card3="bg-green-500"
              card4="bg-green-700"
              littleCard1="bg-green-100"
              littleCard2="bg-green-300"
              littleCard3="bg-green-400"
              littleCard4="bg-green-700"
            />
          </div>
        </div>
      </div>
      <div className="text-center flex md:mt-[70%] text-3xl">
        <div>
          <div
            onClick={handleClickHate1}
            className="absolute bg-neutral-400 mx-8 p-3 w-12 h-12 rounded-full hover:blur duration-300 cursor-pointer"
          ></div>
          <RxCross1 className="text-neutral-400 mx-8 p-3 box-border outline outline-neutral-400 rounded-full w-12 h-12 relative bg-black pointer-events-none hate-button duration-200" />
        </div>
        <div>
          <div
            onClick={handleClickLove1}
            className="absolute bg-green-600 mx-8 p-3 w-12 h-12 rounded-full hover:blur duration-300 cursor-pointer"
          ></div>
          <AiFillHeart className="text-green-600 mx-8 p-3 box-border outline outline-green-600 rounded-full w-12 h-12 relative bg-black pointer-events-none love-button duration-200" />
        </div>
      </div>
    </div>
  );
}

export default App;
