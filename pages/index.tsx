import Head from "next/head";
import Header from "../components/Header";
import AccountInfo from "../components/AccountInfo";
import StandingOrders from "../components/StandingOrders";
import BankCards from "../components/BankCards";
import GTB from "../public/GTB.svg";
import FirstBank from "../public/FirstBank.svg";
import Opay from "../public/Opay.svg";

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
  ];
  return (
    <div className="font-Inter">
      <Head>
        <title>FlyBank Dashboard</title>
        <meta name="description" content="A dashboard for FlyBank" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="w-full h-screen py-[10px]">
        <Header />
        <div className="flex items-center gap-6 px-[50px] py-[12px]">
          <AccountInfo funds="2,300,210" account_no="0919 2333 4561 0000" />
          <StandingOrders />
        </div>
        <div className="py-[12px] pl-[50px] flex items-center gap-[16px]">
          {BankCard.map((bankCard: BankCard, index: number) => (
            <div key={index}>
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
      </main>
    </div>
  );
}
