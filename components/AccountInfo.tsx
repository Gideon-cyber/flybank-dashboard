import React from "react";

type Props = {
  funds: string;
  account_no: string;
};

const AccountInfo = ({ funds, account_no }: Props) => {
  return (
    <div className="h-[260px] bg-lightBlue dark:bg-darkColor dark:text-[white] rounded-[16px] px-[16px] py-[24px] md:px-[33px] md:py-[48px] shadow w-[100%] md:w-[65%]">
      <div className="flex items-start justify-between">
        <div className="flex flex-col items-start gap-[50px]">
          <div className="flex flex-col items-start gap-2">
            <span className="text-[14px] leading-[19px]">Main account</span>
            <h4 className="font-b-600 text-[12px] md:text-[18px] leading-[18px] md:leading-[28px] m-0">
              Flybank Savings Account
            </h4>
            <span className="text-[12px] md:text-[16px] md:leading-[24px] dark:opacity-30">
              {account_no}
            </span>
          </div>
          <div className="flex items-start gap-[16px]">
            <button
              className="flex items-center justify-center p-[10px] bg-primBlue text-secWhite text-[14px] leading-[19px] md:w-[145px] rounded-[5px]"
              type="button"
            >
              Transfer
            </button>
            <button
              className="flex items-center justify-center p-[10px] bg-[#404040] text-secWhite text-[14px] leading-[19px] md:w-[145px] rounded-[5px]"
              type="button"
            >
              Link Accounts
            </button>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="text-[12px] leading-[16px] md:text-[14px] md:leading-[19px]">
            Available funds
          </span>
          <h3 className="text-[14px] leading-[18px] md:text-[24px] md:leading-[32.2px] font-b-700">
            ₦{funds}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
