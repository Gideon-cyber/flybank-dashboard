import React from "react";
import TransactionDetails from "./TransactionDetails";
import { useAppSelector } from "../redux/hook";

type Props = {};

type Transaction = {
  name: string;
  amount: string;
  type: string;
  tag: string;
  date: string;
  background: string;
  color: string;
};

const Transactions = (props: Props) => {
  const { Transaction } = useAppSelector((state) => state.root);
  return (
    <div className="h-[460px] bg-lightBlue dark:bg-darkColor py-[24px] md:py-[37px] px-[16px] md:px-[35px] rounded-[16px] shadow w-[100%] md:w-[60%] ">
      <div className="flex flex-col items-center gap-[32px]">
        <div className="flex items-center justify-between w-full">
          <h3 className=" text-[14px] leading-[18px] md:text-[20px] md:leading-[24px] font-b-700 text-[#1F2937] dark:text-white">
            Latests Transactions
          </h3>
          <span className="text-[12px] leading-[16px] md:text-[16px] md:leading-[19px] font-b-500 text-[#6B7280] dark:text-white">
            See All
          </span>
        </div>
        <div className="flex items-start md:items-center flex-col w-[100%] overflow-scroll scrollbar-none mx-auto">
          {Transaction.map((Transaction: Transaction, index: number) => (
            <div key={index} className=" border-b-[1px] border-b-[#E9EDF2]">
              <TransactionDetails
                amount={Transaction.amount}
                date={Transaction.date}
                type={Transaction.type}
                tag={Transaction.tag}
                name={Transaction.name}
                background={Transaction.background}
                color={Transaction.color}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
