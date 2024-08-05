/* eslint-disable react/prop-types */



const FadedBox = (props) => {
    return (
      <div className="bg-gradient-to-r from-[rgba(28,33,42,255)] text-white flex gap-6 pl-10 rounded-sm items-center   h-20">
        <div className="pl-6">
          <h2 className="text-sm font-medium">{props.date}</h2>
          <p className="text-xs font-extralight text-white/35">{props.day}</p>
        </div>
        <hr className="rotate-90 w-12  " />
        <div>
          <h2 className="text-xs  ">
            <div className="text-xs flex items-center text-white gap-2 ">
              <img src={props.logo} alt="" className="h-5" />
              <span>{props.icon}</span>
              <span className="font-bold text-xs ">{props.focus}</span>
  
              <span className="text-xs text-white/35">{props.mainContent} </span>
            </div>{" "}
          </h2>
        </div>
      </div>
    );
  };
  
  export default FadedBox;
  