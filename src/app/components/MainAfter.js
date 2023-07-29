import React from "react";

function MainAfter({ formData }) {
  const Card = ({ id, text, author }) => {
    return (
      <div className="card indicator w-48 flex p-2 bg-base-100 shadow-xl transition duration-500 ease-in-out border border-transparent hover:border-green-400 hover:cursor-pointer">
        <p className="text-sm font-semibold truncate">{text}</p>
        <p className="text-sm font-regular">
          <span className="">{author}</span> <span className="indicator-item badge badge-primary"> {id}</span>
        </p>
      </div>
    );
  };

  const sumberData = [
    {
      id: 1,
      question: "Macam macam kanker",
      author: "Halodoc",
    },
    {
      id: 2,
      question: "Kenali cara mencegah terjadinya kanker",
      author: "CNN",
    },
    {
      id: 3,
      question: "Memahami Sel Kanker dapat Menyebar dengan cepat",
      author: "Alodokter",
    },
    {
      id: 4,
      question: "Mengapa hal ini dapat terjadi pada manusia?",
      author: "Kimiafarma",
    },
    {
      id: 5,
      question: "Mengapa berat ucapkan cinta, padahal dia ada",
      author: "Jessica Veranda",
    },
  ];

  const answer = [
    `Kanker adalah sekelompok besar penyakit yang dapat muncul di hampir semua organ atau jaringan tubuh ketika sel-sel abnormal tumbuh tak terkendali Sel abnormal ini tumbuh melampaui batas hingga menyerang bagian tubuh yang berdekatan. Kanker yang menyebar ke organ lain dapat menjadi sebab kematian akibat kanker Kanker dapat dimulai hampir di mana saja di tubuh manusia, yang terdiri dari triliunan sel. Biasanya, sel manusia tumbuh dan berkembang biak untuk membentuk sel baru sesuai kebutuhan Sel kanker sendiri timbul dan berasal dari mutasi atau perubahan genetik
    Kanker muncul sebagai akibat dari penumpukan sel-sel yang telah rusak dan tidak bisa diperbaikiKanker dapat menyerang siapa saja, baik pria maupun wanita, dan ada berbagai macam jenis kanker yang bisa menyerang manusia, mulai dari kanker otak hingga kanker darah 
    Beberapa faktor risiko yang dapat meningkatkan kemungkinan seseorang terkena kanker antara lain perubahan hormon dalam tubuh, berusia di atas 65 tahun, mengonsumsi alkohol berlebihan, merokok, terkena paparan sinar matahari, kurang banyak bergerak dan tidak rutin berolahraga, penyakit yang menyebabkan peradangan jangka panjang, dan daya tahan tubuh menurun, misalnya akibat menderita HIV/AIDSGejala yang timbul akibat kanker juga bervariasi, tergantung pada jenis kanker dan organ tubuh yang terkena. Beberapa keluhan yang sering dialami penderita kanker adalah muncul benjolan, nyeri di salah satu bagian tubuh, pucat, lemas, dan cepat lelah, berat badan turun secara drastis, gangguan pencernaan, dan perubahan kimia dalam tubuh
    Kanker akan berakibat fatal ketika telah menyebar ke seluruh tubuh melalui darah atau sistem getah beningSel-sel ini kemudian dapat membentuk tumor di organ lain dan merusak organ tersebutSemakin tinggi stadium kanker, semakin rendah pula peluang untuk sembuhOleh karena itu, penting untuk mengenali gejala kanker dan segera berkonsultasi dengan dokter jika mengalami keluhan yang mencurigakan.`,
  ];

  return (
    <div className="w-[80%] h-screen flex flex-col gap-4 pt-14 items-start px-28 bg-[#171719] relative">
      <h1 className="font-semibold text-2xl">{formData}</h1>

      {/* FORM ABSOLUTE */}
      <div className="flex gap-4 w-full justify-center absolute right-[50%] top-[80%] translate-x-[50%] translate-y-[50%] z-20">
        <input type="text" placeholder="Type here..." className="input input-bordered input-info h-xl w-full max-w-xl shadow-md shadow-cyan-500/50" />
        <button className="btn btn-active btn-accent shadow-md shadow-cyan-500/50">Ask</button>
      </div>
      {/* FORM ABSOLUTE END */}

      <div className="overflow-scroll scrollbar-none flex flex-col items-start gap-4" style={{ scrollbarWidth: "none", msOverflowStyle: "none", "&::-webkit-scrollbar": { display: "none" } }}>
        {/* ----------------- SUMBER --------- */}
        <h1 className="text-start">Sumber :</h1>
        <div className="wrapper-sumber flex gap-2 flex-wrap w-full justify-start">
          {sumberData.map((sumber) => (
            <Card key={sumber.id} id={sumber.id} text={sumber.question} author={sumber.author} />
          ))}
        </div>
        {/* ---------------- SUMBER END ---------- */}

        <h1 className="text-start">Jawaban :</h1>
        <div className="w-full">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default MainAfter;
