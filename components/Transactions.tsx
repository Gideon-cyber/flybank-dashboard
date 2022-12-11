import React from "react";
import TransactionDetails from "./TransactionDetails";

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

type Transactions = Transaction[];

const Transactions = (props: Props) => {
  const Transaction: Transactions = [
    {
      name: "Miskay Boutique",
      date: "Today",
      tag: "Clothes",
      type: "Card Payment",
      amount: "29,000",
      background: "rgba(248, 113, 17, 0.3)",
      color: "#F87111",
    },
    {
      name: "Spotify Premium",
      date: "19/12",
      tag: "Music",
      type: "Patronize",
      amount: "2,000",
      background: "rgba(100, 217, 232, 0.25)",
      color: "#64D9E8",
    },
    {
      name: "EKEDC",
      date: "09/06",
      tag: "Electricity",
      type: "Transfer",
      amount: "12,000",
      background: "rgba(4, 255, 29, 0.3)",
      color: "#03FF1C",
    },
    {
      name: "Spotify Premium",
      date: "19/12",
      tag: "Music",
      type: "Patronize",
      amount: "2,000",
      background: "rgba(100, 217, 232, 0.25)",
      color: "#64D9E8",
    },
    {
      name: "Med Plus",
      date: "12/06",
      tag: "Health",
      type: "Card Payment",
      amount: "5,600",
      background: "rgba(218, 213, 85, 0.25)",
      color: "#DAD555",
    },
    {
      name: "Bazzers Place",
      date: "21/03",
      tag: "Bills",
      type: "Card Payment",
      amount: "29,000",
      background: "rgba(166, 55, 176, 0.25)",
      color: "#A637B0",
    },
  ];
  return (
    <div className="w-[763px] h-[460px] bg-lightBlue py-[37px] px-[35px] rounded-[16px]">
      <div className="flex flex-col items-center gap-[32px]">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-[20px] leading-[24px] font-b-700 text-[#1F2937]">
            Latests Transactions
          </h3>
          <span className="text-[16px] leading-[19px] font-b-500 text-[#6B7280]">
            See All
          </span>
        </div>
        <div className="flex items-start flex-col">
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
