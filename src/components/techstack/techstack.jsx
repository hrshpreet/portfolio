import {technologies} from "../../constants";
import React from "react"
import Scroll from "../Scroll";
import './techstack.css';

function TechCard(props) {
    let colors = ['border-aes-res', 'border-aes-orange', 'border-aes-yellow','border-aes-green', 'border-aes-blue'];
    
    return (
        <div className="w-fit p-3">
            {/*   border-4 md:border-[6px] ${colors[props.index % colors.length]}  Some extra css */}
            <div id="box" className={`h-[4rem] w-[4rem] md:h-[6rem] md:w-[6rem] gradient-border box`}>
                <img src={props.icon} alt="" srcSet="" className="object-contain w-full h-full" />
            </div>
            <div className="font-montserrat font-normal text-center text-black w-[4rem] md:w-[6rem]">{props.name}</div>
        </div>
    )
}

function TechCards() {
    return (
        <div className="flex md:w-[50rem] justify-center flex-wrap">
            {technologies.map((tech, index) => {
                return (
                    <TechCard key={tech.name} index={index} icon={tech.icon} name={tech.name} color={tech.color}/>
                )
            })}
        </div>
    )
}

export default function Techstack() {
    return (
        <div className="h-[100svh] bg-white flex flex-col justify-center items-center relative z-10" id="techstack">
            <div className="font-extrabold font-montserrat text-[2rem] text-center mb-10 text-black">
                My Techstack
            </div>
            <TechCards />
            <Scroll color="black" id="projects" />
        </div>
    )
}

