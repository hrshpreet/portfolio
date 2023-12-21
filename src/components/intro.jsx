import React from "react"

export default function Intro() {
    return (
        <div className="md:grid grid-cols-2 h-screen bg-black text-white z-10">
            <Avatar />
            <Introduction />
        </div>
    )
}

function Introduction() {
    return (
        <div className="font-montserrat h-full m-auto text-xl md:text-[2rem] p-8 md:p-0 text-center flex flex-col justify-center md:text-left md:pr-12 ">
            <div className="font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="font-extrabold">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
    )
}

function Avatar() {
    return (
        <div className="">
            
        </div>
    )
}