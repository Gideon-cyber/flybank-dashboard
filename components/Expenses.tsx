import Image from "next/image";
import React from "react";
import ArrowDown from "../public/Arrowdown.svg";
import Chart from "../public/Chart.svg";
import Tags from "./Tags";

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
  const Details: Details = [
    { tag: "Daily", amount: "24,001" },
    { tag: "Weekly", amount: "77,000" },
    { tag: "Monthly", amount: "260,000" },
  ];
  const Tag: Tags = [
    {
      background: "rgba(166, 55, 176, 0.25)",
      color: "#A637B0",
      text: "Bills",
    },
    {
      background: "rgba(248, 113, 17, 0.3)",
      color: "#F87111",
      text: "Clothes",
    },
    {
      background: "rgba(100, 217, 232, 0.25)",
      color: "#64D9E8",
      text: "Music",
    },
    {
      background: "rgba(218, 213, 85, 0.25)",
      color: "#DAD555",
      text: "Health",
    },
    {
      background: "rgba(58, 58, 58, 0.25)",
      color: "rgba(58, 58, 58, 0.97)",
      text: "Others",
    },
  ];
  return (
    <div className="w-[553px] h-[458px] rounded-[16px] bg-lightBlue py-[35px] px-[37px]">
      <div className="flex flex-col gap-[16px]">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-[20px] leading-[24px] font-b-700 text-[#1F2937]">
            All expenses
          </h3>
          <span className="text-[16px] leading-[19px] font-b-500 text-[#6B7280]">
            See All
          </span>
        </div>
        <div className="flex items-start justify-between py-[16px] gap-[92px] border-b-[1px] border-b-[#E9EDF2]">
          {Details.map((detail: Detail, index: number) => (
            <div
              key={index}
              className="flex flex-col justify-center items-start gap-2"
            >
              <span className="font-b-500 text-[16px] leading-[19.36px] text-lightGrey">
                {detail.tag}
              </span>
              <span className="text-[16px] leading-[19px] font-b-700 text-[#1F2937]">
                ₦{detail.amount}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[48px]">
          <div className="flex items-center gap-1">
            <span className="text-[16px] leading-[19px] font-b-700 text-[#1F2937]">
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
