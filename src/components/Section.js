import React from 'react'
import img1 from '../assets/solana-phone.jpeg'
import "../Styles/main.css";

export default function Section() {
  return (
    
    <div className='grid grid-cols-3 gap-5 sm:grid-cols-3 ml-10 mr-5'>
            <div className=" mt-6">
                <h2 className='text-5xl italic hover:not-italic mt-6 ml-10'>There's no secret to long-term wealth, 
                but if there were it would be this:</h2>

                <div className=''>
                <h2 className='text-6xl font-extrabold mt-2 ml-10'>automated index investing.</h2>

                <p className='mt-12 ml-10'>Even with the inevitable ups and downs of the market, our expert-built,
                    globally-diversified Automated Investing Account makes it easy to start building long-term wealth by managing your risk, maximiimizing 
                    returns and mininimizing taxes.
                </p>

                <button className='px-6 py-4 font-bold font-mono rounded-2xl mt-10 plain-col2 hovs2 ml-10'>
                    Get Started
                </button>
            </div>


        </div>
        <div className="min-h-[350px] mt-6 col-span-2">
        <div className=''>
                <img 
                    alt=''
                    src={img1}
                    width={830}
                    className='ml-8 '
                />
            </div>
        </div>
    </div>

  )
}
