import React from "react";

type Props = {
  background: string;
  color: string;
  text: string;
};

const Tags = ({ background, color, text }: Props) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <div
        className="w-[18px] h-[18px] rounded-[3px] flex items-center justify-center"
        style={{ backgroundColor: background }}
      >
        <div
          className="w-[10px] h-[10px] rounded-full"
          style={{ backgroundColor: color }}
        ></div>
      </div>
      <span
        className="text-[12px] leading-[19px] font-b-400 w-[100px]"
        style={{ color: color }}
      >
        {text}
      </span>
    </div>
  );
};

export default Tags;
