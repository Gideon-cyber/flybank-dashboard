import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";
import GTB from "../public/GTB.svg";
import FirstBank from "../public/FirstBank.svg";
import Opay from "../public/Opay.svg";
import Zenith from "../public/Zenith.svg";

// Define a type for the slice state
interface CounterState {
  darkMode: boolean;
  Details: Details;
  Tag: Tags;
  navigation: string[];
  Transaction: Transactions;
  BankCard: BankCards;
}

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

type BankCards = BankCard[];
type BankCard = {
  image: string;
  alt: string;
  amount: string;
  account_no: string;
  bank_name: string;
};

// Define the initial state using that type
const initialState: CounterState = {
  darkMode: false,
  Details: [
    { tag: "Daily", amount: "24,001" },
    { tag: "Weekly", amount: "77,000" },
    { tag: "Monthly", amount: "260,000" },
  ],
  Tag: [
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
  ],
  navigation: ["My Account", "Transactions", "Cards", "My Offers"],
  Transaction: [
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
  ],
  BankCard: [
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
  ],
};

export const rootSlice = createSlice({
  name: "rootSlice",
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { setDarkMode } = rootSlice.actions;

export default rootSlice.reducer;
