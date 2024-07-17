import React from "react";

type Props = {};

function FormLoader({}: Props) {
  return (
    <div className="flex items-center justify-center h-[350px]">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-[#9E0606]"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-[#8B1720] animate-spin"></div>
      </div>
    </div>
  );
}

export default FormLoader;
