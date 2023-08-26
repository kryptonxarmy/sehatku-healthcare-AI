"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/app/components/Navbar";

function Sumber() {
  const [data, setData] = useState([]);
  const endpoint = "http://127.0.0.1:8000/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(endpoint);
        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);



  return (
    <div className="wrapper w-[80%] h-screen bg-pink-400 m-auto pt-8">
      <Navbar />
      <h1 className="text-center font-bold text-2xl my-4">Sumber Data</h1>
      <div>
        {
          
        }
        
      </div>
    </div>
  );
}

export default Sumber;
