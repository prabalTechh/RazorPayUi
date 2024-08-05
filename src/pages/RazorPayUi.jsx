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
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import logo from "../assets/logo img.png"
import ping from "../assets/pngwing.com (5).png"

const RazorPayUi = () => {
  return (
    <div className="h-screen w-full flex justify-between bg-[rgba(13,18,25,255)]">
      <div className="w-[360px] hidden lg:flex h-full lg:flex-col gap-8 pl-4 pt-6 bg-[rgba(26,33,43,255)] text-white">
      <h1 className="text-xl flex items-center">
          <img src={ping} alt="" className="h-6" />
          Razorpay
          <span className="text-4xl">
            <img src={logo} alt="" className="h-8" />
          </span>
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
      <div className="w-full flex flex-col items-center gap-2 py-3 max-w-screen-md lg:max-w-screen-xl mx-auto  h-full">
        <div className="lg:w-2/3  relative pb-2   w-full h-[200px] mt-4 bg-[rgba(23,29,38,255)]  ">
          <div className="flex justify-between py-1 relative bottom-6  text-white text-xs mx-2">
            <h4>Insights</h4>{" "}
            <h4 className="text-[rgba(43,76,142,255)]">Detailed Insight →</h4>
          </div>
          <div className=" flex flex-col gap-10  ">
            <div className="px-4 relative bottom-5 py-2  ">
              <p className="text-xs tracking-tighter text-slate-400">
                Payout volume - last 30 days
              </p>
              <h2 className="text-sm text-white">
                <span className="text-xs ">₹</span>236,695.
                <span className="text-xs">00</span>
              </h2>
            </div>{" "}
            <div className=" flex relative  gap-[48px]  ">
              <hr className="border-[rgba(43,76,142,255)] w-[25px] border  " />
              <hr className="border-[rgba(55,91,192,255)] border  w-[70px] absolute  rotate-[-70deg] bottom-7  " />
              <hr className="border-[rgba(55,91,192,255)] border w-[70px] absolute  rotate-[70deg] bottom-7 left-[24px] " />
              <hr className="border-[rgba(43,76,142,255)] w-[100%] border  " />
            </div>
          </div>
        </div>
        <div className="text-base lg:w-2/3 w-full  h-[100vh]  bg-backg flex flex-col bg-cover bg-center  pt-4 px-4">
        
          <div className="flex justify-between">
            {" "}
            <h2 className="text-sm font-semibold text-white  ">
              Avtivity Feed{" "}
              <span className="text-xs text-gray-400 pl-1">
                {" "}
                updated a few seconds ago
              </span>
            </h2>
            <h2 className="text-[rgba(116,169,248,255)] flex items-center gap-2 text-xs">
              Show filters <FaAngleDown />
            </h2>
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
              logo={logo}
              focus={300}
            />
            <FadedBox
              date="1 JUL"
              day="Monday"
              mainContent="payout worth ₹2,36,695.00 created"
              logo={logo}
              focus="1"
            />
            <FadedBox
              date="24 JUN"
              day="Monday"
              mainContent=""
              logo={logo}
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
