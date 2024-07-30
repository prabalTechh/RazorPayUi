import FadedBox from "../components/FadedBox";
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
import { FaRegUser } from "react-icons/fa";
import { SiVexxhost } from "react-icons/si";
import {Link} from "react-router-dom"
const RazorPayUi = () => {
  return (
    <div className="h-screen w-full flex justify-between bg-gray-900">
      <div className="w-[360px] hidden lg:flex h-full lg:flex-col gap-8 pl-4 pt-6 bg-gray-800 text-white">
        <h1 className="text-xl">
          Razorpay<span className="text-4xl">x</span>
        </h1>

        <ul className="flex flex-col text-sm gap-6  ">
          <li className="flex gap-1 items-center hover:bg-slate-800">
            <AiOutlineHome />
            <Link to="/" className="hover:text-blue-500 ">Home</Link>
          </li>
          <li className="flex gap-1 items-center">
            <MdOutlineArrowOutward /> <a href="#" className="hover:text-blue-500 " >Payouts</a> 
          </li>
          <li className="flex gap-1 items-center">
            <LuFileSpreadsheet /> <Link to="/acccount" className="hover:text-blue-500 ">Account statement</Link> 
          </li>
          <li className="flex gap-1 items-center text-white">
            <CiUser /> <a href="#" className="hover:text-blue-500 ">Contacts</a> 
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
      <div className="w-full flex flex-col items-center gap-2 py-8 mx-20  h-full">
        <div className="lg:w-2/3  w-full h-[160px] bg-gray-800">
          <div className="flex justify-between relative bottom-6 text-white text-xs mx-2">
            <h4>Insights</h4>{" "}
            <h4 className="text-blue-500">Detailed Insight →</h4>
          </div>
          <div className="relative bottom-5 left-5 p-2">
            <p className="text-xs tracking-tighter text-slate-400">
              Payout volume - last 30 days
            </p>
            <h2 className="text-sm text-white">
              <span className="text-xs ">₹</span>236,695.
              <span className="text-xs">00</span>
            </h2>{" "}
          </div>
          <div className=" relative top-[38px]   ">
            <hr className="border-blue-400 w-[78px] " />
            <hr className="border-blue-400 w-[70px] rotate-[-70deg] relative left-11 bottom-7" />
            <hr className="border-blue-400 w-[70px] relative left-[79px] rotate-[70deg] bottom-7 " />
            <hr className="border-blue-400 w-[calc(100%-6.3rem)] relative bottom-1 left-[126px]  overflow-hidden" />
          </div>
        </div>
        <div className="text-base lg:w-2/3 w-full  h-[calc(100%)] bg-gray-800 flex flex-col  pt-4 px-4">
          <div className="flex justify-between">
            {" "}
            <h2 className="text-sm font-semibold text-white  ">
              Avtivity Feed{" "}
              <span className="text-xs text-gray-400 pl-1">
                {" "}
                updated a few seconds ago
              </span>
            </h2>
            <h2 className="text-blue-300 text-xs">Show filters</h2>
          </div>
          <div className="flex w-3/4 flex-col gap-2 pt-6 mx-12 ">
            <FadedBox
              date="23 JUL"
              day="Tuesday"
              mainContent="contact created"
              icon=<FaRegUser />
              focus={1}
            />
            <FadedBox
              date="9 JUL"
              day="Tuesday"
              mainContent={` credited into the account`}
              icon=<SiVexxhost />
              focus={300}

            />
            <FadedBox
              date="1 JUL"
              day="Monday"
              mainContent="payout worth ₹2,36,695.00 created"
              icon=<SiVexxhost />
              focus="1"
            />
            <FadedBox
              date="24 JUN"
              day="Monday"
              mainContent=""
              icon=<SiVexxhost />
              
            />
          </div>
          <div className="mt-6 bg-gray-700 text-white  mx-auto p-2">
            {" "}
            <h2 className="w-full text-xs font-semibold text-center px-3 uppercase">
              Look for older activities ↓{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RazorPayUi;
