import { AiFillHeart } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { createContext, useState, useEffect } from "react";
import Cardgroup from "./components/Cardgroup";
import classNames from "classnames";

function App() {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(1);
  const [state3, setState3] = useState(2);

  const handleClickLove1 = () => {
    setState1((state1 + 1) % 3);
    setState2((state2 + 1) % 3);
    setState3((state3 + 1) % 3);
  };
  const handleClickHate1 = () => {
    setState1((state1 + 1) % 3);
    setState2((state2 + 1) % 3);
    setState3((state3 + 1) % 3);
  };

  const box1ClassNames = classNames(
    { "-translate-x-[70%] translate-y-[10rem] scale-0": state1 === 0 },
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
    { "-translate-x-[70%] translate-y-[10rem] scale-0": state2 === 0 },
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
    { "-translate-x-[70%] translate-y-[10rem] scale-0": state3 === 0 },
    {
      "translate-x-[70$] duration-300 ease-in-out scale-1 delay-200":
        state3 === 1,
    },
    {
      "scale-0 translate-x-[70%] translate-y-[10rem] duration-300 ease-in-out":
        state3 === 2,
    }
  );
  return (
    <div className="bg-black w-full h-screen items-center grid justify-center">
      <div className="text-3xl text-white"></div>
      <div className="mx-auto">
        <div className={box1ClassNames}>
          <Cardgroup />
        </div>
        <div className={box2ClassNames}>
          <Cardgroup />
        </div>
        <div className={box3ClassNames}>
          <Cardgroup />
        </div>
      </div>
      <div className="text-center flex items-center justify-center mt-[17rem] text-3xl mb-[8rem]">
        <div>
          <div className="absolute bg-neutral-400 mx-8 p-3 w-12 h-12 rounded-full hover:blur duration-300 cursor-pointer"></div>
          <RxCross1 className="text-neutral-400 mx-8 p-3 box-border outline outline-neutral-400 rounded-full w-12 h-12 relative bg-black pointer-events-none" />
        </div>
        <div>
          <div className="absolute bg-green-600 mx-8 p-3 w-12 h-12 rounded-full hover:blur duration-300 cursor-pointer"></div>
          <AiFillHeart
            onClick={handleClickLove1}
            className="text-green-600 mx-8 p-3 box-border outline outline-green-600 rounded-full w-12 h-12 relative bg-black"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
