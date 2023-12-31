import React from "react"
import Spline from '@splinetool/react-spline';
import { expandarrows } from "../assets";
import SocialLinks from "./Socials";
import Scroll from "./Scroll";

export default function Intro() {
    return (
        <div className="flex md:grid grid-cols-2 min-h-[100svh] bg-black text-white relative" id="#">
            <Avatar />
            <Introduction />
            <Scroll id="techstack" color="white" />
        </div>
    )
}

function Introduction() {
    return (
        <div className="font-montserrat h-full m-auto text-xl md:text-[2rem] p-8 md:p-0 text-center flex flex-col justify-center md:text-left md:pr-12 leading-8">
            <div className="font-extrabold">
                Im <span className="text-aes-orange">Harshpreet Singh</span>, a front-end developer based in India.
            </div>

            <div className="font-normal">
                I also have experience in feilds like UI design and Data Science.
                I'm not only a coder but also an artist at heart.
            </div>

            <br />
            <br />
            <div className="flex flex-col items-end justify-end">
                <GetInTouch />
                <SocialLinks />
            </div>

        </div>
    )
}

function Avatar() {
    return (
        <div className="hidden md:block p-2 h-[45vh] md:h-full z-10">
            <Spline scene="https://prod.spline.design/bbVF8NYtNYY6Fck4/scene.splinecode" />
        </div>
    );
}

function GetInTouch() {
    const handleEmailClick = () => {
        window.location.href = 'mailto:harshpreetny@gmail.com';
    };
    return (
        <div className="font-semibold text-aes-orange hover:cursor-pointer w-fit mb-3" onClick={handleEmailClick}>
            Get in Touch
            <img src={expandarrows} alt="Get in Touch ->" className="h-7 inline-block ml-3 hover:scale-125 transition duration-300" />
        </div>
    )
}