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
}

// Define the initial state using that type
const initialState: CounterState = {
  darkMode: false,
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
