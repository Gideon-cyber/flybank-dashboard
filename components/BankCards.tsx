import React from "react";
import Image from "next/image";
import Copy from "../public/copy.svg";
import GTB from "../public/GTB.svg";
import Options from "../public/option.svg";

type Props = {
  image: string;
  alt: string;
  amount: string;
  account_no: string;
  bank_name: string;
};

const BankCards = ({ bank_name, image, alt, account_no, amount }: Props) => {
  return (
    <div className="bg-lightBlue w-[100%] h-[170px] px-[24px] rounded-[16px] py-[28px]">
      <div className="flex flex-col justify-between h-full">
        <div className="flex items-start justify-between gap-[32px]">
          <div className="flex flex-col gap-[6px]">
            <span className="font-b-700 text-[16px] leading-[24px] text-[#1F2937]">
              {bank_name}
            </span>
            <div className="flex items-center gap-[10px]">
              <span className="text-[12px] leading-[16px]">{account_no}</span>
              <Image src={Copy} alt="copy" />
            </div>
          </div>
          <Image src={image} alt={alt} />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[18px] leading-[24px] font-b-600">
            ₦{amount}
          </span>
          <Image src={Options} alt="Options" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default BankCards;
