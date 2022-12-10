import React from "react";
import Image from "next/image";
import Logo from "../public/Logo.svg";
import Message from "../public/Message.svg";
import Notification from "../public/Notification.svg";
import Setting from "../public/Setting.svg";
import Logout from "../public/Logout.svg";
import { useState } from "react";

type Props = {};

const Header = (props: Props) => {
  const navigation = ["My Account", "Transactions", "Cards", "My Offers"];
  const [selected, setSelected] = useState(0);
  return (
    <header className="flex items-center justify-between px-[50px] py-[16px]">
      <Image src={Logo} alt="Flybank logo" />
      <div className="flex items-center gap-[38px]">
        {navigation.map((navItem: string, index: number) => (
          <span
            key={index}
            className={`text-[16px] leading-[24.2px] font-medium ${
              selected === index ? "text-primBlue" : "text-lightGrey"
            }`}
            onClick={() => setSelected(index)}
          >
            {navItem}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between gap-[38px]">
        <div className="w-[112px] h-[24px] flex items-center gap-[20px]">
          <Image src={Setting} alt="Setting" />
          <Image src={Message} alt="Message" />
          <Image src={Notification} alt="Notification" />
        </div>
        <div className="flex items-center gap-[10.25px]">
          <span className="text-[16px] leading-[24.2px] font-b-700">
            Yemi Omolayo
          </span>
          <Image src={Logout} alt="logout" />
        </div>
      </div>
    </header>
  );
};

export default Header;
