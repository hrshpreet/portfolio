import React from "react";
import arrow from "../../assets/arrow.png";
import toggle from "../../assets/toggle.png";
import triangle from "../../assets/triangle.png";
import "./footer.css";
import { motion } from "framer-motion";
import SocialLinks from "../Socials";

export default function Footer() {
    const handleEmailClick = () => {
        window.location.href = 'mailto:harshpreetny@gmail.com';
    };

    return (
        <div className="h h-100% bg-black block" id="footer">

        <div className="grid grid-cols-2 md:grid-cols-4 p-[1.5rem]">
            {/* Download Resume Circle */}
            <motion.div 
                className="rounded-full bg-aes-res font-montserrat md:text-[2rem] flex cursor-pointer"
                whileHover={{ translateY: -10 }}
                transition={{ duration: 0.1 }}
            >
                <a href="http://bit.ly/hrshpreet" download className="flex w-full h-full">
                <div className="m-auto text-center font-semibold">Download Resume</div>
                </a>
            </motion.div>

            {/* Arrow */}
            <div className="hidden md:flex">
                <img src={arrow} alt="footer" className="w-full bg-aes-blue-0" />
            </div>

            {/* Toggles */}
            <div className="hidden md:grid grid-cols-2">
                <motion.div 
                    className="rounded-full h-[12vw] bg-aes-green my-auto" 
                    whileHover={{ y: [0, -50, 50] }}
                    transition={{duration: 1}}
                />
                <div className="flex">
                    <motion.img 
                        src={toggle} 
                        alt="footer" 
                        className="my-auto w-full" 
                        whileHover={{ height: '100%' }}
                    />
                    
                </div>
            </div>


            {/* Contact Me */}
            <div className="flex relative object-contain cursor-pointer" onClick={handleEmailClick}>
                <img src={triangle} alt="Contact Me" className="w-full" />
                <div className="font-montserrat font-extrabold absolute top-[43%] left-[10%] md:text-[2rem] text-center p-auto text-aes-yellow text_shadow text-glow hover:scale-105 transition duration-300 ease-in-out">
                    Get in touch
                </div>
            </div>
        </div>

        <div className="font-montserrat pb-3 text-center text-aes-orange">
            Harshpreet Singh 2024
        </div>
        <div className="m-auto flex justify-center pb-20">
            <SocialLinks/>
        </div>
        </div>
    )
}