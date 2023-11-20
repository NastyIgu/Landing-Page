import React from 'react'
import "../Styles/main.css";

export default function Numbers() {
  return (
    <div className='grid grid-cols-6 ml-20 mt-10 num-bers'>
      <div className='font-mono mr-5 opa'>
        <h3 className='text-3xl  font-bold mb-2'><span className=' mr-1 text-3xl
        '>N</span>nerdwallet</h3>
        <p className=''>Best Robo-advisor, Portfolio Options, 2023 <br /> Best Robo-advisor, IRA, 2022 </p>
      </div>

      <div className='ml-8 opa'>
        <h3 className='text-3xl  font-bold mb-2'>Investopedia</h3>
        <p>Best Robo-advisor, 2022 <br /> Best Robo-advisor, 2020 </p>
      </div>

      <div className='ml-12 opa'>
        <h3 className='text-3xl  font-bold mb-2'>690k</h3>
        <p>Trusted clients</p>
      </div>

      <div className='ml-8 opa'>
        <h3 className='text-3xl  font-bold mb-2'>$43B+</h3>
        <p>In assets managed</p>
      </div>

      <div className='ml-8 opa'>
        <h3 className='text-3xl  font-bold mb-2'>4.8</h3>
        <p>Apple App Store</p>
      </div>

      <div className='ml-8 opa'>
        <h3 className='text-3xl  font-bold mb-2'>4.9</h3>
        <p>Goggle Play Store</p>
      </div>
    
    </div>
  )
}
