import Card from "./components/Card";
import { AiFillHeart } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

function App() {
  return (
    <div className="bg-black w-full h-screen">
      <div className="text-3xl text-white"></div>
      <div className="pt-32">
        <Card />
      </div>
      <div className="text-center flex items-center justify-center mt-7 text-3xl relative">
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
