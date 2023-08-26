"use client";

import { useState } from "react";
import MainBefore from "./components/MainBefore";
import MainAfter from "./components/MainAfter";

export default function Home() {
  const [isMainBeforeActive, setIsMainBeforeActive] = useState(true);
  const [formData, setFormData] = useState("");

  const handleAsk = (data) => {
    setIsMainBeforeActive(false);
    setFormData(data);
  };

  const handleBack = () => {
    setIsMainBeforeActive(true);
  };

  return (
    <>
      <div className="flex">
        <div className="sidebar py-4 h-screen flex flex-col justify-between w-[20%] bg-[#212025]">
          <div className="">
            <h1 className="text-white flex font-medium justify-center text-2xl">
              Sehat<span className="text-green-300 font-bold">Ku</span>
            </h1>
            <form className=" flex justify-center my-6 gap-2">
              <input type="text" placeholder="Ask new topic" className="w-[60%] h-10 mx input input-bordered input-accent max-w-xs" />
              <button className="bg-[#1A9389] btn-accent h-10 w-10 rounded-md"></button>
            </form>
            <div className="mx-8">
              <h1 className="text-medium my-2">Home</h1>
              <a href="/pages/landing-page">
                <h1 className="text-medium my-2">Discover</h1>
              </a>
              <h1 className="text-medium my-2">History</h1>
              <h1 className="text-medium my-2">Feedback</h1>
            </div>
          </div>
          <div className="bg-[#313030] h-12 w-[80%] mx-auto rounded-md flex items-center px-4 gap-2 drop-shadow-md transition duration-500 ease-in-out border border-transparent hover:cursor-pointer hover:border-green-400">
            <div className="bg-green-600 h-10 w-10 rounded-full"></div>
            <h1 className="font-regular text-md">Danu Wardana</h1>
          </div>
        </div>
        {isMainBeforeActive ? <MainBefore onAsk={handleAsk} /> : <MainAfter formData={formData} onBack={handleBack} />}
      </div>
    </>
  );
}
