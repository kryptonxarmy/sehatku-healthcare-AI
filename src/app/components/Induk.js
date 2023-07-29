"use client"

import React from 'react'
import Anak from './Anak'
import { useState } from 'react';

function Induk() {

  const [data, setData] = useState('');
  
  const indukKeAnak = () => {
    setData("Ini adalah data dari Komponen Induk ke Komponen Anak.");
    console.log("CLicked")
  }

  return (
    <div>
      <Anak indukKeAnak={data}/>

      <div>
        <button className='btn m-10' primary onClick={() => indukKeAnak()}>Klik Induk</button>
      </div>
    </div>
  )
}

export default Induk