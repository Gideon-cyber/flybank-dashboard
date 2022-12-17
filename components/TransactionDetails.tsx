import React from "react";
import Image from "next/image";
import ArrowDown from "../public/Arrowdown.svg";
import Tags from "./Tags";

type Props = {
  name: string;
  date: string;
  amount: string;
  type: string;
  tag: string;
  background: string;
  color: string;
};

const TransactionDetails = ({
  name,
  date,
  amount,
  type,
  tag,
  color,
  background,
}: Props) => {
  return (
    <div className="flex items-center justify-center h-[55px] gap-[56px]">
      <div className="w-[50px] h-[15px] flex items-center">
        <span className="font-b-500 text-[12px] leading-[15px] text-textColor dark:text-white text-left">
          {date}
        </span>
      </div>
      <div className="w-[120px] h-[17px] flex items-center">
        <span className="text-textColor dark:text-white text-[14px] leading-[17px] font-b-500 text-left">
          {name}
        </span>
      </div>
      <div className="w-[100px] h-[17px] flex items-center">
        <span className="text-textColor dark:text-white text-[14px] leading-[17px] font-b-400 text-left">
          {type}
        </span>
      </div>
      <div className="w-[80px] h-[23px] flex items-center">
        {/* <div
          className={`px-[8px] py-[4px] rounded-[42px] flex items-center justify-center ${
            tag === "Clothes" && "bg-[#FFEDD6] text-[#C0421B]"
          } ${tag === "Music" && "bg-[#EDFBCD] text-[#406119]"} ${
            tag === "Electricity" && "bg-[#DDFCE8] text-[#0B4E3C]"
          } ${tag === "Bills" && "bg-[#FEF3C9] text-[#914017]"} `}
        >
          <span className={`text-[12px] leading-[15px] font-b-500`}>{tag}</span>
        </div> */}
        <Tags background={background} color={color} text={name} />
      </div>
      <div className="w-[120px] h-[17px] flex items-center justify-end">
        <span className="text-[14px] leading-[17px] font-b-500 text-textColor dark:text-white">
          -₦{amount}
        </span>
        <Image src={ArrowDown} alt="arrow-down" />
      </div>
    </div>
  );
};

export default TransactionDetails;
