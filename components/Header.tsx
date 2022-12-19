import React from "react";
import Image from "next/image";
import Logo from "../public/Logo.svg";
import Message from "../public/Message.svg";
import Message1 from "../public/Message1.svg";
import Notification from "../public/Notification.svg";
import Notification1 from "../public/Notification1.svg";
import Setting from "../public/Setting.svg";
import Logout from "../public/Logout.svg";
import Logout1 from "../public/Logout1.svg";
import { useState } from "react";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "../redux/hook";
import { setDarkMode } from "../redux/rootSlice";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  const navigation = ["My Account", "Transactions", "Cards", "My Offers"];
  const { darkMode } = useAppSelector((state) => state.root);
  const dispatch = useAppDispatch();
  const [selected, setSelected] = useState(0);
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -100,
      }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="flex items-center justify-between px-[16px] md:px-[50px] py-[8px] md:py-[16px]"
    >
      <div className="flex items-center gap-2 md:gap-4">
        <div className="w-[16px] h-[16px] md:w-[32px] md:h-[32px] bg-primBlue relative flex items-center justify-center">
          <div className="w-[6px] md:w-[12px] h-[6px] md:h-[12px] bg-white absolute left-0 top-0"></div>
          <span className="font-b-700 text-[10px] leading-[16px] md:text-[18px] md:leading-[22px] text-white">
            F
          </span>
        </div>
        <span className="text-[14px] leading-[18px] md:text-[20px] md:leading-[24px] font-b-700 text-black dark:text-white">
          FlyBank
        </span>
        {/* <Image src={Logo} alt="Flybank logo" /> */}
      </div>
      <div className="hidden md:flex items-center gap-[38px]">
        {navigation.map((navItem: string, index: number) => (
          <span
            key={index}
            className={`text-[16px] leading-[24.2px] cursor-pointer font-medium ${
              selected === index
                ? "text-primBlue dark:text-white"
                : "text-lightGrey dark:text-white dark:opacity-50"
            }`}
            onClick={() => setSelected(index)}
          >
            {navItem}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between md:gap-[38px]">
        <div className="w-[112px] h-[24px] flex items-center gap-[20px] relative">
          {darkMode ? (
            <BsSun
              className="text-white text-[24px] cursor-pointer"
              onClick={() => {
                dispatch(setDarkMode());
              }}
            />
          ) : (
            <BsFillMoonStarsFill
              className="text-[#1F2937] text-[24px] cursor-pointer"
              onClick={() => {
                dispatch(setDarkMode());
              }}
            />
          )}
          {/* <Image src={Setting} alt="Setting" /> */}
          <Image src={darkMode ? Message1 : Message} alt="Message" />
          <Image
            src={darkMode ? Notification1 : Notification}
            alt="Notification"
          />
        </div>
        <div className="flex items-center gap-[10.25px]">
          <span className="text-[16px] leading-[24.2px] font-b-700 dark:text-white">
            Yemi Omolayo
          </span>
          <Image src={darkMode ? Logout1 : Logout} alt="logout" />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
