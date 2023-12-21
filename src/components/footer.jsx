import React from "react";
import arrow from "../assets/arrow.png";
import toggle from "../assets/toggle.png";
import triangle from "../assets/triangle.png";
import "./footer.css";
import { motion } from "framer-motion";

export default function Footer() {
    const handleEmailClick = () => {
        window.location.href = 'mailto:example@gmail.com';
    };

    return (
        <div className="h h-100% bg-black flex flex-col justify-between">

        <div className="grid grid-cols-2 md:grid-cols-4 p-[1.5rem] ">
            {/* Download Resume Circle */}
            {/* <a href=""> */}
            <motion.div 
                className="rounded-full bg-aes-res font-montserrat md:text-[2rem] flex cursor-pointer"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.9 }}
            >
                <a href="" className="flex w-full h-full">
                <div className="m-auto">Download Resume</div>
                </a>
            </motion.div>
            {/* </a> */}

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
                <div className="font-montserrat font-extrabold absolute top-[43%] left-[10%] md:text-[2rem] text-center p-auto text-aes-yellow text_shadow text-glow">Get in touch</div>
            </div>
        </div>

        <div className="text-white font-montserrat pb-10 text-center">
            Harshpreet Singh 2024
        </div>
        </div>
    )
}