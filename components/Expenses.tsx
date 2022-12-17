import Image from "next/image";
import React from "react";
import ArrowDown from "../public/Arrowdown.svg";
import Chart from "../public/Chart.svg";
import Tags from "./Tags";
import { useAppSelector } from "../redux/hook";

type Props = {};

type Detail = {
  tag: string;
  amount: string;
};

type Details = Detail[];

type Tag = {
  background: string;
  color: string;
  text: string;
};

type Tags = Tag[];

const Expenses = (props: Props) => {
  const { Details, Tag, darkMode } = useAppSelector((state) => state.root);

  return (
    <div className="w-[100%] md:w-[553px] h-[458px] rounded-[16px] bg-lightBlue dark:bg-darkColor py-[24px] md:py-[35px] px-[16px] md:px-[37px] shadow">
      <div className="flex flex-col gap-[16px]">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-[14px] leading-[18px] md:text-[20px] md:leading-[24px] font-b-700 text-[#1F2937] dark:text-white">
            All expenses
          </h3>
          <span className="text-[12px] leading-[16px] md:text-[16px] md:leading-[19px] font-b-500 text-[#6B7280] dark:text-white dark:opacity-70">
            See All
          </span>
        </div>
        <div className="flex items-start justify-between py-[16px] gap-[40px] md:gap-[92px] border-b-[1px] border-b-[#E9EDF2]">
          {Details.map((detail: Detail, index: number) => (
            <div
              key={index}
              className="flex flex-col justify-center items-start gap-2"
            >
              <span className="font-b-500 text-[16px] leading-[19.36px] text-lightGrey dark:text-white">
                {detail.tag}
              </span>
              <span className="text-[16px] leading-[19px] font-b-700 text-[#1F2937] dark:text-white">
                ₦{detail.amount}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[48px]">
          <div className="flex items-center gap-1">
            <span className="text-[16px] leading-[19px] font-b-700 text-[#1F2937] dark:text-white">
              Last month
            </span>
            <Image src={ArrowDown} alt="arrow-down" />
          </div>
          <div className="flex justify-center items-end">
            <div className="flex items-center gap-[100px]">
              <Image src={Chart} alt="chart" />
              <div className="flex flex-col items-start gap-[18px]">
                {Tag.map((Tag: Tag, index: number) => (
                  <div key={index}>
                    <Tags
                      background={Tag.background}
                      color={Tag.color}
                      text={Tag.text}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
