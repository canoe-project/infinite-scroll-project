import { Fragment, useState, useEffect } from "react";
import Museum from "../../svg/powerhouse-museum.svg";
import CopyLine from "svg/CopyLines.svg";

const Header = ({ copy }) => {
  return (
    <header className="relative flex flex-row py-4">
      <div className="w-1/2">
        <Museum className="self-start h-12" />
      </div>

      <div className="relative w-1/2">
        {/* <CopyLine className="absolute" /> */}
        <p
          className="font[400] text-[2.81em] uppercase text-[#C2A38E]  font-['Do_Hyeon'] text-left min-h-[3em]"
          // style={{
          //   borderImage: "url('svg/SimpleCopyLines.svg') 100",
          // }}
        >
          {copy}
        </p>
        <p className="text-[#58595B] font-['Noto_Sans_KR']">
          원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며,
          1차에 한하여 중임할 수 있다. 이 헌법시행 당시에 이 헌법에 의하여 새로
          설치될 기관의 권한에 속하는 직무를 행하고 있는 기관은 이 헌법에 의하여
          새로운 기관이 설치될 때까지 존속하며 그 직무를 행한다.
        </p>
      </div>
    </header>
  );
};

export default Header;
