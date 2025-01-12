import React from 'react';
import Image1 from '../assets/manDonatingBlood.jpg';

export default function OurMission() {
  return (
    <>
    <div className='container mx-[150px] my-[75px] flex flex-col' >

        <div className="header text-6xl font-serif font-bold">
            <span>Our Mission</span>
            <hr className='bg-black h-1 w-60'/>
        </div>

        {/* Missions */}
        <div className='missions flex flex-col mt-10 space-y-8'>
            
            {/* Mission 1 */}
            <div className="mission-top w-full flex">
                <span className=" info1 w-[500px] h-[400px] text-2xl py-12 px-10 bg-[#d84040] text-white leading-loose" 
                    style={ {fontFamily: "'Saira Condensed', sans-serif" }}>
                    Rakta is a project based for Health related sector.
                    Due to high accidents and blood loss, blood is vital.
                    Every individual could not buy blood bag due to high cost for them.
                    Here our web application plays a vital role in connecting donors and acceptors. 
                </span>
                <div className='flex w-[50%] justify-center'>
                    <img src={Image1} className='h-[400px]' />
                </div>
            </div>

            {/* Mission 2 */}
            <div className="mission-top w-full flex">
                <span className=" info1 w-[500px] h-[400px] text-2xl py-12 px-10 bg-[#d84040] text-white leading-loose" 
                    style={ {fontFamily: "'Saira Condensed', sans-serif" }}>
                    Rakta is a project based for Health related sector.
                    Due to high accidents and blood loss, blood is vital.
                    Every individual could not buy blood bag due to high cost for them.
                    Here our web application plays a vital role in connecting donors and acceptors. 
                </span>
                <div className='flex w-[50%] justify-center'>
                    <img src={Image1} className='h-[400px]' />
                </div>
            </div>

            

        </div>
    </div>
    </>
  )
}