import React from "react";
import Image from "next/image";
import Copy from "../public/copy.svg";
import Copy1 from "../public/copy1.svg";
import Options from "../public/option.svg";
import Options1 from "../public/option1.svg";
import { useAppSelector } from "../redux/hook";

type Props = {
  image: string;
  alt: string;
  amount: string;
  account_no: string;
  bank_name: string;
};

const BankCards = ({ bank_name, image, alt, account_no, amount }: Props) => {
  const { darkMode } = useAppSelector((state) => state.root);
  return (
    <div className="bg-lightBlue dark:bg-darkColor w-[100%] h-[170px] px-[24px] rounded-[16px] py-[28px] shadow">
      <div className="flex flex-col justify-between h-full">
        <div className="flex items-start justify-between gap-[32px]">
          <div className="flex flex-col gap-[6px]">
            <span className="font-b-700 text-[16px] leading-[24px] text-[#1F2937] dark:text-white">
              {bank_name}
            </span>
            <div className="flex items-center gap-[10px]">
              <span className="text-[12px] leading-[16px] dark:text-white">
                {account_no}
              </span>
              <Image src={darkMode ? Copy1 : Copy} alt="copy" />
            </div>
          </div>
          <Image src={image} alt={alt} />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[18px] leading-[24px] font-b-600 dark:text-white">
            ₦{amount}
          </span>
          <Image
            src={darkMode ? Options1 : Options}
            alt="Options"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default BankCards;
