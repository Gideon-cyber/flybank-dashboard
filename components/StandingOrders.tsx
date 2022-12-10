import React from "react";
import Image from "next/image";
import LoopPic from "../public/loopPic.svg";
import Calender from "../public/Calender.svg";

type Props = {};

const StandingOrders = (props: Props) => {
  return (
    <div className="bg-primBlue rounded-[16px] w-[507px] h-[260px] p-[33px]">
      <div className="flex flex-col items-start justify-between h-full">
        <div className="flex items-start justify-between w-full">
          <div className="flex flex-col gap-[16px]">
            <span className="text-[14px] leading-[18px] font-b-600 text-secWhite">
              Define standing orders
            </span>
            <span className="text-[12px] leading-[16px] text-[#7797E5] w-[290px]">
              We help you remember about recurring payments for the fixed price.
              Define once standing order and bank will take care of your regular
              transfers.
            </span>
          </div>
          <Image src={LoopPic} alt="loopPic" />
        </div>
        <div className="flex items-end justify-between w-full">
          <button className="bg-[#0C0FCE] p-[10px] text-[12px] leading-[16px] flex items-center rounded-[5px] text-[#D8D2FB]">
            Define standing order
          </button>
          <Image src={Calender} alt="Calender" />
        </div>
      </div>
    </div>
  );
};

export default StandingOrders;
