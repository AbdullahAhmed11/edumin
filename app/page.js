import React from "react";
import Navbar from "./component/student/Navbar/Navbar";

export default function Home() {
  return (
    <div className="bg-primaryBg dark:bg-[#212130] ">
      <div className="w-full h-[100vh]">
        <Navbar />
      </div>
    </div>
  );
}
