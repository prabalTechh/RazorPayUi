/* eslint-disable react/no-unescaped-entities */
import { TiTick } from "react-icons/ti";
const Statement = () => {
  return (
    <>
      <div className="w-screen mx-auto lg:w-[1024px] h-32 border-t-2 border-green-400 flex pt-6 bg-[rgba(23,29,38,255)] justify-between">
        <h1 className="pl-10 w-40 text-sm">Amazon instant Settlements</h1>
        <span className="flex flex-col items-baseline gap-2 ">
          <p className="text-xs  flex relative right-5 px-2 gap-4">
            <input type="checkbox" />
            let's get you started
            <br />
            complete your application and get instant access to your Amazon
            payout
          </p>
          <button className="py-2 relative right-4 px-5 bg-blue-400 rounded-sm text-xs uppercase">
            Apply now
          </button>
        </span>
      </div>
      <div className="w-screen mx-auto lg:w-[1024px] h-32 border-t-2 border-green-400 flex pt-2 pr-6 bg-[rgba(23,29,38,255)]  justify-between">
        <h1 className="pl-10 w-40 text-sm">Creating payouts in Live mode</h1>
        <span className="flex flex-col items-baseline gap-2 ">
          <p className="text-xs px-2 pr-2 flex gap-4">
            <span className="bg-slate-600 rounded-full h-3 text-blue-400">
              <TiTick />
            </span>
            Add balance to create payouts in Live mode
          </p>
          <hr className="border-2 border-gray-700 w-full" />
          <div className="text-xs px-2 flex flex-col ">
            <h2> Create payout</h2>
            <p>
              There are multiple waysin which you can create the first payout
            </p>
          </div>
          <div className="flex gap-2 pr-10">
            <button className="py-2 px-5 bg-blue-400 rounded-sm text-xs uppercase">
              Apply now
            </button>
            <button className="py-2 px-5 bg-[#2e353f] rounded-sm text-xs uppercase">
              Show Apps for Me
            </button>
            <button className="py-2 px-5 bg-[#2e353f] rounded-sm text-xs uppercase">
              api payouts
            </button>
          </div>
        </span>
      </div>
    </>
  );
};

export default Statement;
