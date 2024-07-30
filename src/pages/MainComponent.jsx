/* eslint-disable react/no-unescaped-entities */
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineArrowOutward } from "react-icons/md";
import { LuFileSpreadsheet } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { PiContactlessPaymentLight } from "react-icons/pi";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { LiaLinkSolid } from "react-icons/lia";
import { IoMailUnreadOutline } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { SiVexxhost } from "react-icons/si";
import bankImg from "../assets/bankpng.png";

import { Link } from "react-router-dom";
import Statement from "../components/Statement";
import { FaSyncAlt } from "react-icons/fa";
import razorPay from "../assets/razorpay.jpg"
const MainComponent = () => {
  return (
    <div className="h-screen w-full flex justify-between bg-gray-900">
      <div className="w-[360px] hidden lg:flex h-full lg:flex-col gap-4  pl-4 pt-6 bg-gray-800 text-white">
        <h1 className="text-xl">
          Razorpay<span className="text-4xl">x</span>
        </h1>

        <ul className="flex flex-col text-sm gap-6  ">
          <li className="flex gap-1 items-center hover:bg-slate-800">
            <AiOutlineHome />
            <Link to="/" className="hover:text-blue-500 ">
              Home
            </Link>
          </li>
          <li className="flex gap-1 items-center">
            <MdOutlineArrowOutward />{" "}
            <a href="#" className="hover:text-blue-500 ">
              Payouts
            </a>
          </li>
          <li className="flex gap-1 items-center">
            <LuFileSpreadsheet />{" "}
            <Link to="/acccount" className="hover:text-blue-500 ">
              Account statement
            </Link>
          </li>
          <li className="flex gap-1 items-center text-white">
            <CiUser />{" "}
            <a href="#" className="hover:text-blue-500 ">
              Contacts
            </a>
          </li>
        </ul>

        <hr className="border-slate-700 relative right-2" />
        <ul className="flex flex-col text-sm gap-5">
          <li className="flex gap-1 items-center text-white">
            <LiaRupeeSignSolid /> Loans
          </li>
          <li className="flex flex-wrap items-center gap-1">
            <PiContactlessPaymentLight />
            vendor Payments
            <span className="pl-1 tracking-tighter ">
              <span className="bg-green-400 px-2 py-0.5 rounded-xl">New</span>{" "}
              <span className="text-blue-500">Invoice approvals →</span>{" "}
            </span>
          </li>
          <li className="flex gap-1 items-center text-white">
            <HiOutlineReceiptTax /> Tax Payments
          </li>
          <li className="flex gap-1 items-center text-white">
            <LiaLinkSolid /> Payout Links
          </li>
          <li className="flex gap-1 items-center text-white">
            <IoMailUnreadOutline /> Payroll
          </li>
          <li className="flex gap-1 items-center text-white">
            <TbReportSearch /> Reports
          </li>
        </ul>
      </div>
      <div className="w-full flex  flex-col items-center gap-4 pt-1 pb-6 mx-20  h-full text-white">
        <div className="container w-full lg:max-w-screen-lg h-28 mx-auto ">
          <div className="  flex gap-6 pl-10 rounded-sm items-center   h-24">
            <div className="pl-6">
              <h2 className="text-sm font-medium flex items-center gap-2">
                <SiVexxhost />
                RazorpayX Lite{" "}
                <span className="text-xs font-light text-white/35 flex gap-2 ">
                  as of a few second ago <FaSyncAlt />
                </span>
              </h2>
              <p className="text-xs font-extralight text-white/35">
                ₹ <span className="text-white text-lg font-semibold">100</span>
                <span>.09</span>
              </p>
            </div>
            <hr className="rotate-90 w-12  " />
            <div>
              <h2 className="text-xs  ">
                <div className="text-sm flex text-blue-500 gap-2 ">
                  + Add balance
                </div>{" "}
              </h2>
            </div>
          </div>
        </div>
        <h2 className="text-white text-sm py-3 pl-6  w-full lg:w-[1024px] border-2 border-dotted rounded-lg border-white/65 ">
          🎉 You're all caught up . There are no more items pending on you.
        </h2>
        <div className="w-[1024px] flex flex-col gap-1">
          <p className="text-xs">
            Onboarding Updates <span className="text-white/35">(1)</span>
          </p>
          <div className="w-full bg-gray-800  h-[164px] flex">
            <div className="h-full bg-blue-400 rounded-r-full w-36">
              {" "}
              <img
                src={bankImg}
                alt=""
                className="h-full  p-2 relative bottom-3 "
              />
              <p className=" w-12 relative left-10 bottom-8 text-xs uppercase ">
                Current Account
              </p>
            </div>
            <div className="flex flex-col gap-2 p-2">
              <p>Open your RazorpayX account.</p>
              <p className="text-sm tracking-tighter ">
                Don't let bankache come in the way to your growth. Apply for
                your RazorpayX account with a few basic details
              </p>
              <div className="flex gap-2 ">
                <hr className=" border-2 border-green-400 w-[calc(100%-75%)]" />
                <hr className="h-2 w-[calc(100%-75%)]" />
                <hr className="h-2 w-[calc(100%-75%)]" />
                <hr className="h-2 w-[calc(100%-75%)]" />
              </div>
              <button className="py-2 px-5 bg-blue-400 text-xs rounded-lg w-40 ">
                Start Application →{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-gray-800  gap-2">
          <Statement />
        </div>
        
        <div className="w-[1024px] h-20 bg-gradient-to-l from-blue-800  flex  justify-between  ">

        <img src={razorPay} alt="logo" className="h-20 py-2 relative left-10 m-2" />
        <div className="bg-gray-800 px-16 rounded-es-full py-2 m-1 flex items-center ">
          <span>
            <h1>
              <span className="font-extrabold text-xl text-green-400">\</span>{" "}
              Automate BookKeeping For Payouts
            </h1>
            <p className="text-xs font-light w-72">
              close your books 60% faster and with better accuracy automating
              bookkeeping for your Payouts.
            </p>
          </span>
          <button className="w-40 h-8 px-2 relative left-2 text-xs  bg-blue-400 rounded-lg">Connect zoho Books →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
