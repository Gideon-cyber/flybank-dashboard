import Head from "next/head";
import Header from "../components/Header";
import AccountInfo from "../components/AccountInfo";
import StandingOrders from "../components/StandingOrders";
import BankCards from "../components/BankCards";
import { useAppSelector } from "../redux/hook";
import Transactions from "../components/Transactions";
import Expenses from "../components/Expenses";
import GTB from "../public/GTB.svg";
import FirstBank from "../public/FirstBank.svg";
import Opay from "../public/Opay.svg";
import Zenith from "../public/Zenith.svg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import { useRouter } from "next/router";

type BankCards = BankCard[];
type BankCard = {
  image: string;
  alt: string;
  amount: string;
  account_no: string;
  bank_name: string;
};

export default function Home() {
  const BankCard: BankCards = [
    {
      image: GTB,
      alt: "GTB",
      amount: "562,000",
      account_no: "80 **** 1234",
      bank_name: "Guaranty Trust Bank",
    },
    {
      image: FirstBank,
      alt: "FirstBank",
      amount: "2,300",
      account_no: "80 **** 1234",
      bank_name: "First Bank",
    },
    {
      image: Opay,
      alt: "Opay",
      amount: "744,000",
      account_no: "80 **** 1234",
      bank_name: "OPAY",
    },
    {
      image: Zenith,
      alt: "Zenith",
      amount: "991,910",
      account_no: "22 **** 1024",
      bank_name: "Zenith Bank",
    },
  ];
  const { darkMode } = useAppSelector((state) => state.root);
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });
  });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <div
      className={`font-Inter ${
        darkMode ? "dark" : ""
      } scrollbar scrollbar-track-primBlue scrollbar-thumb-primBlue scrollbar-thumb-rounded-full scrollbar-track-rounded-full`}
    >
      <Head>
        <title>FlyBank Dashboard</title>
        <meta name="description" content="A dashboard for FlyBank" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <PropagateLoader color="#0F1378" />
        </div>
      ) : (
        <main className="w-full h-full py-[10px] bg-white dark:bg-[#0D0D0D]">
          <Header />
          <div className="flex flex-col items-center gap-6 px-[16px] md:px-[50px] py-[12px] md:flex-row">
            <AccountInfo funds="2,300,210" account_no="0919 2333 4561 0000" />
            <StandingOrders />
          </div>
          <div className="py-[12px] px-[16px] md:px-[50px] flex items-center gap-[16px] flex-wrap md:flex-nowrap">
            {BankCard.map((bankCard: BankCard, index: number) => (
              <motion.div
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                transition={{
                  duration: 1,
                  delay: 0.9 + Number(`${index / 10}`),
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                key={index}
                className="w-[100%] md:w-[25%]"
              >
                <BankCards
                  account_no={bankCard.account_no}
                  image={bankCard.image}
                  alt={bankCard.alt}
                  amount={bankCard.amount}
                  bank_name={bankCard.bank_name}
                />
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-start px-[16px] md:px-[50px] py-[12px] gap-[24px]">
            <Transactions />
            <Expenses />
          </div>
        </main>
      )}
    </div>
  );
}
