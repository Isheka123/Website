import Marketstories from "./Components/Marketstories";

export default function Home() {
  return (
    <div className="flex w-full justify-center text-red-600 mt-3">
      <div className="w-4/5 ml-10 mb-5">
        <h1 className="uppercase font-bold mb-10">Discussion Forum</h1>
      </div>
      <div className="w-1/5">
        <h1 className="uppercase font-bold text-center pb-5">Market Stories</h1>
        <Marketstories />
        <Marketstories />
      </div>
    </div>
  );
}
