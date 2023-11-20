import React from 'react'
import "../Styles/main.css";
import img1 from '../assets/solana-phone.jpeg'

export default function Section2() {
  return (
    <div className='grid grid-cols-3 mt-12'>
        <div className='col-span-2'>
            <img 
                alt=''
                src={img1}
                className=' move'
                width={880}
            />
        </div>
        <div className='mr-10 move-left'>
            <h2 className='text-5xl mb-8 mt-10'>Smarter <br /> investing, <br /> brilliantly <br /> personalized.</h2>
            
            <p className='mb-3 text-sm'>Just answer a few questions, and we'll build you <br />
                a personalized portfolio of low-cost index funds from <br /> up to 17 global asset classes.
                Our software handles all <br /> the trading, rebalancing and other busywork to help grow <br />
                your wealth for the long term.
            </p>
            <button className='px-6 py-4 font-bold font-mono rounded-2xl mt-10 plain-col2 hovs2 '> Get started </button>
        </div>
    </div>
  )
}
