import Random from "./components/Random"
import Tag from "./components/Tag";

export default function App() {
  return (

    <div className="w-full  font-mono h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className=" border-black border-2 bg-purple-400 rounded-lg w-11/12 text-center mt-[40px]
       px-10 py-2 text-4xl font-bold ">
      RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>

  );
}
