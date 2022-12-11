import React from "react";

type Props = {
  funds: string;
  account_no: string;
};

const AccountInfo = ({ funds, account_no }: Props) => {
  return (
    <div className="w-[809px] h-[260px] bg-lightBlue rounded-[16px] px-[33px] py-[48px]">
      <div className="flex items-start justify-between">
        <div className="flex flex-col items-start gap-[50px]">
          <div className="flex flex-col items-start gap-2">
            <span className="text-[14px] leading-[19px]">Main account</span>
            <h4 className="font-b-600 text-[18px] leading-[28px] m-0">
              Flybank Savings Account
            </h4>
            <span className="text-[16px] leading-[24px]">{account_no}</span>
          </div>
          <div className="flex items-start gap-[16px]">
            <button
              className="flex items-center justify-center p-[10px] bg-primBlue text-secWhite text-[14px] leading-[19px] w-[145px]"
              type="button"
            >
              Transfer
            </button>
            <button
              className="flex items-center justify-center p-[10px] bg-lightGrey text-secWhite text-[14px] leading-[19px] w-[145px]"
              type="button"
            >
              Link Accounts
            </button>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="text-[14px] leading-[19px]">Available funds</span>
          <h3 className="text-[24px] leading-[32.2px] font-b-700">₦{funds}</h3>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
