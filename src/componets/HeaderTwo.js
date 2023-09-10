import React from "react";
import i18n from "../i18n";

const HeaderTwo = () => {
  return (
    <div className="w-full h-16 bg-gradient-to-r from-orange-400 to-orange-300">
      <div className="lang flex text-[15px] font-mono cursor-pointer font-semibold text-gray-500 border-2 border-gray-400 float-right mr-10 mt-2 bg-white px-2 rounded-3xl">
        <button
          className="hover:text-green-500"
          onClick={() => i18n.changeLanguage("en")}
        >
          English
        </button>
        |
        <button
          className="hover:text-green-500"
          onClick={() => i18n.changeLanguage("ar")}
        >
          Arabic
        </button>
      </div>
    </div>
  );
};

export default HeaderTwo;
