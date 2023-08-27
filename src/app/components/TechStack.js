import React from "react";
import Image from "next/image";
import langchain from "/public/img/Langchain.png";
import meta from "/public/img/meta.png";
import fastapi from "/public/img/fastapi.png";
import nextjs from "/public/img/nextjs.png";
import docker from "/public/img/docker.png";
import gcp from "/public/img/gcp.png";

function TechStack() {
  return (
    <div className= "h-56 w-full flex justify-center flex-wrap gap-8">
      <a
        href="#"
        class="max-w-md sm:w-auto glass hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
      >
        <div className="flex flex-col gap-4 items-center">
          <Image alt="langchain" src={langchain} className="cover w-20" />
          <h1 className="font-bold text-xl">Langchain</h1>
          <p className="font-regular text-sm"> Versi khusus code dari Llama 2 yang dibuat dengan melatih Llama 2 lebih lanjut pada kumpulan data khusus code</p>
        </div>
      </a>
      <a
        href="#"
        class="max-w-md sm:w-auto glass hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
      >
        <div className="flex flex-col gap-4 items-center">
          <Image alt="Llama2" src={meta} className="cover w-20" />
          <h1 className="font-bold text-xl">Llamma2</h1>
          <p className="font-regular text-sm"> Versi khusus code dari Llama 2 yang dibuat dengan melatih Llama 2 lebih lanjut pada kumpulan data khusus code</p>
        </div>
      </a>
      <a
        href="#"
        class="max-w-md sm:w-auto glass hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
      >
       <div className="flex flex-col gap-4 items-center">
          <Image alt="fastapi" src={fastapi} className="cover w-20" />
          <h1 className="font-bold text-xl">Fast API</h1>
          <p className="font-regular text-sm"> Versi khusus code dari Llama 2 yang dibuat dengan melatih Llama 2 lebih lanjut pada kumpulan data khusus code</p>
        </div>
      </a>
      <a
        href="#"
        class="max-w-md sm:w-auto glass hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
      >
       <div className="flex flex-col gap-4 items-center">
          <Image alt="nextjs" src={nextjs} className="cover w-20" />
          <h1 className="font-bold text-xl">Next JS</h1>
          <p className="font-regular text-sm"> Versi khusus code dari Llama 2 yang dibuat dengan melatih Llama 2 lebih lanjut pada kumpulan data khusus code</p>
        </div>
      </a>
      <a
        href="#"
        class="max-w-md sm:w-auto glass hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
      >
       <div className="flex flex-col gap-4 items-center">
          <Image alt="docker" src={docker} className="cover w-20" />
          <h1 className="font-bold text-xl">Docker</h1>
          <p className="font-regular text-sm"> Versi khusus code dari Llama 2 yang dibuat dengan melatih Llama 2 lebih lanjut pada kumpulan data khusus code</p>
        </div>
      </a>
      <a
        href="#"
        class="max-w-md sm:w-auto glass hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
      >
       <div className="flex flex-col gap-4 items-center">
          <Image alt="gcp" src={gcp} className="cover w-20" />
          <h1 className="font-bold text-xl">Google Cloud Platform</h1>
          <p className="font-regular text-sm"> Versi khusus code dari Llama 2 yang dibuat dengan melatih Llama 2 lebih lanjut pada kumpulan data khusus code</p>
        </div>
      </a>
    </div>
  );
}

export default TechStack;
