import React from "react";
import Navbar from "../components/Navbar";

function page() {
  return (
    <>
      <div className="h-screen bg-white text-black">
        <Navbar />
        <main>
          <div className="h-screen px-6 w-[50%] flex items-center">
            <h1 className="font-semibold text-8xl">Discover ways to heal your illness with <span className="text-green-400 font-bold underline underline-offset-2">AI.</span></h1>
          </div>
        </main>
      </div>
    </>
  );
}

export default page;
