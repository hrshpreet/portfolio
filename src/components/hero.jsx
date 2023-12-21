import React from "react"

function Balls() {
    return(
        <div className="">
            <div className={`absolute rounded-full w-7 h-7 md:w-20 md:h-20 -top-2 md:-top-5 left-[50%] bg-aes-orange`}></div>
            <div className={`absolute rounded-full w-7 h-7 md:w-20 md:h-20 -top-2 md:-top-5 left-[22%] bg-aes-res`}></div>
            <div className={`absolute rounded-full w-7 h-7 md:w-20 md:h-20 top-16 md:top-52 left-[0%] bg-aes-blue`}></div>
            <div className={`absolute rounded-full w-7 h-7 md:w-20 md:h-20 top-10 md:top-40 -right-[3%] bg-aes-yellow`}></div>
            <div className={`absolute rounded-full w-7 h-7 md:w-20 md:h-20 -bottom-6 md:-bottom-16 right-[20%] bg-aes-green`}></div>
            
        </div>
    )
}

export default function Hero() {
    return(
        <div className="flex align-middle text-center justify-center h-screen w-full bg-black">
            <div className=" relative font-sequel font-semibold w-min text-6xl md:text-[12.5rem] leading-[76%] m-auto text-white">
                HARSH PREET
                <Balls/>
            </div>
        </div>
    )
}