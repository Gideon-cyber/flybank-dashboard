import Head from "next/head";
import Header from "../components/Header";
import AccountInfo from "../components/AccountInfo";
import StandingOrders from "../components/StandingOrders";
import BankCards from "../components/BankCards";
import { useAppSelector } from "../redux/hook";
import Transactions from "../components/Transactions";
import Expenses from "../components/Expenses";

type BankCards = BankCard[];
type BankCard = {
  image: string;
  alt: string;
  amount: string;
  account_no: string;
  bank_name: string;
};

export default function Home() {
  const { BankCard, darkMode } = useAppSelector((state) => state.root);
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

      <main className="w-full h-full py-[10px] bg-white dark:bg-[#0D0D0D]">
        <Header />
        <div className="flex flex-col items-center gap-6 px-[16px] md:px-[50px] py-[12px] md:flex-row">
          <AccountInfo funds="2,300,210" account_no="0919 2333 4561 0000" />
          <StandingOrders />
        </div>
        <div className="py-[12px] px-[16px] md:px-[50px] flex items-center gap-[16px] flex-wrap md:flex-nowrap">
          {BankCard.map((bankCard: BankCard, index: number) => (
            <div key={index} className="w-[100%] md:w-[25%]">
              <BankCards
                account_no={bankCard.account_no}
                image={bankCard.image}
                alt={bankCard.alt}
                amount={bankCard.amount}
                bank_name={bankCard.bank_name}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-start px-[16px] md:px-[50px] py-[12px] gap-[24px]">
          <Transactions />
          <Expenses />
        </div>
      </main>
    </div>
  );
}
