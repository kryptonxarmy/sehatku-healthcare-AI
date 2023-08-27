import React from "react";
import Navbar from "@/app/components/Navbar";
import Stats from "@/app/components/Stats";
import CardMembers from "@/app/components/CardMembers";
import TechStack from "@/app/components/TechStack";
import Footer from "@/app/components/Footer";

const LandingPage = () => {
  const backgroundImageStyle = {
    backgroundImage: "url(/img/bg-landingpage.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0" style={backgroundImageStyle}></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Content */}
        <Navbar />
        <div className="absolute inset-0 z-20 flex flex-row justify-between px-5 items-center">
          <Stats />
          <div className="absolute inset-0 flex flex-col justify-center items-center z-10 gap-3">
            <h1 className="font-bold text-6xl text-white">Discover your illness with AI</h1>
            <h1 className="font-bold text-4xl text-white">Chuaakzzzz AWOKWKWKWKW</h1>
            <a
              href="/"
              className="px-7 py-3 rounded-lg bg-green-600 border-green-100 text-white"
              style={{
                boxShadow: "32px 10px 41px 0px rgba(0,0,0,0.75)",
              }}
            >
              Ask AI
            </a>
          </div>

          {/* Social Media */}
          <div></div>
        </div>
      </div>

      <div
        className="pb-10 px-10 bg-black"
        style={{
          background: "linear-gradient(90deg, rgba(32,81,49,1) 0%, rgba(41,81,55,1) 33%, rgba(47,86,49,1) 69%, rgba(48,100,52,1) 83%, rgba(43,95,49,1) 100%)",
        }}
      >
        {/* Contentt nyaaa */}
        <div
          className="py-7 h-[240vh] flex gap-3 flex-col text-center px-[3rem]"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            // boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.18)",
          }}
        >
          <h1 className="text-4xl text-white font-bold mt-5">About</h1>
          <p className="">
            Sehatku merupakan website AI yang siap menerima seluruh pertanyaan Anda seputar dunia kesehatan. Dengan dukungan penuh dari kecerdasan buatan (AI), kami hadir dengan berbagai jawaban yang dirancang untuk membantu Anda memahami
            informasi kesehatan dengan lebih mendalam.
          </p>

          <h1 className="text-4xl text-white font-bold mt-5 mb-3">Our Teams</h1>
          <div className="flex flex-row justify-between flex-wrap">
            <CardMembers nama={"James Micheal Fritz"} bagian={"Data Science"} />
            <CardMembers nama={"Danu Wardana"} bagian={"Front end"} />
            <CardMembers nama={"Ilham Satria"} bagian={"Back end"} />
          </div>


          <h1 className="text-4xl text-white font-bold mt-5 mb-3">What we use</h1>
          <div className="flex justify-between">
            <TechStack/>
          </div>
        </div>

        {/* FOOTER */}


        </div>
        <div className="footer w-full bg-green-900 p-5">
          <Footer/>
      </div>
    </div>
  );
};

export default LandingPage;
