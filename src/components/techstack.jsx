import {technologies} from "../constants";
import React from "react"
import Scroll from "./Scroll";



function TechCard(props) {
    // Selecting border color for the card element from the colors array
    let colors = ["aes-blue-light", "aes-res-light", "aes-green-light", "aes-orange-light", "aes-yellow-light"];
    // let colors = ["#8DD1DC", "#F87373", "#6BC547", "#F8B34C", "#F8E6CC"];
    const colorIndex = props.index % colors.length;
    const borderColor = colors[colorIndex];

    return (
        <div className="w-fit p-3">
            <div className={`rounded-full h-[4rem] w-[4rem] md:h-[6rem] md:w-[6rem] overflow-hidden border-4 border-${colors[props.index % colors.length]} hover:shadow-2xl hover:shadow-aes-yellow`}>
                <img src={props.icon} alt="" srcSet="" className="object-contain w-full h-full " />
            </div>
            <div className="font-montserrat font-normal text-center text-black w-[4rem] md:w-[6rem]">{props.name}</div>
        </div>
    )
}

function JustColorLoader() {
    return(
        <div>
            <div className="bg-aes-blue"></div>
            <div className="bg-aes-res"></div>
            <div className="bg-aes-green"></div>
            <div className="bg-aes-orange"></div>
            <div className="bg-aes-yellow"></div>
        </div>
    )
}


function TechCards() {
    return (
        <div className="flex md:w-[50rem] justify-center flex-wrap">
            {technologies.map((tech, index) => {
                return (
                    <TechCard key={tech.name} index={index} icon={tech.icon} name={tech.name} />
                )
            })}
        </div>
    )
}



export default function Techstack() {
    return (
        <div className="h-screen bg-white flex flex-col justify-center items-center relative" id="techstack">
            <div className="font-extrabold font-montserrat text-[2rem] text-center mb-10 text-black">
                My Techstack
            </div>
            <TechCards />
            <Scroll color="black" id="projects" />
        </div>
    )
}

