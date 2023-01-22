import React from "react";

import SubjectBox from "../components/SubjectBox";
import searchSVG from "../assets/search.svg";

const MainPage = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <div className="min-h-screen w-full pt-32 pb-20 px-12 font-mono">
      <div className="w-full flex justify-center">
        <div
          className={
            "w-5/12 flex items-center border-2 rounded-md" +
            (focus ? " border-blue-600" : " border-blue-400")
          }
        >
          <img
            className={"h-12" + (focus ? " opacity-100" : " opacity-60")}
            src={searchSVG}
            alt="error"
          />
          <input
            placeholder="Search for subject"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            className="px-4 text-xl font-semibold outline-none rounded-md h-full w-full"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-wrap w-full items-center justify-center">
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
        <SubjectBox />
      </div>
    </div>
  );
};

export default MainPage;
