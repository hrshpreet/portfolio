import React from "react";
import { projects } from "../constants";
import { motion } from "framer-motion";

function HorizontalRule() {
    return (
        <hr style={{ width: '100%', height: '3px', backgroundColor: 'black' }} />
    )
}

function ProjectStack({ project }) {
    let colors = ["aes-blue", "aes-res", "aes-green", "aes-orange", "aes-yellow"];

    return (
        <ul className="flex">
            {project.techstack.map((tech, index) => (
                <li key={tech.name} className={`mr-2 p-2 rounded-lg bg-${colors[index % colors.length]}`}>
                    <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain"/>
                </li>
            ))}
        </ul>
    )
}

function ProjectCard(props) {
    return (
        <motion.div 
            whileHover={{ rotate: 3 }}
        >
            <HorizontalRule />
            <div className="md:flex py-[1.5rem] font-montserrat">

                {/* Project index */}
                <div className="hidden md:block text-[1.5rem] m-auto">{props.index + 1}</div>
                <div className="hidden md:block w-[1.5rem]"></div>

                {/* Project Image */}
                <div className="hidden md:block min-w-[18rem] min-h-[11rem] w-[100%] md:max-w-[18rem] max-h-[11rem]">
                    <img src={props.image} alt={props.name} className="w-[100%] md:w-[18rem] h-[11rem] object-contain" />
                </div>

                

                <div className="w-[1.5rem]"></div>

                {/* Project Desc */}
                <div>
                    <div className="text-[2rem] md:text-[3rem] font-extrabold">{props.name}</div>
                    <ProjectStack project={props} />
                    <div className="md:text-[1.5rem]">{props.description}</div>
                </div>
            </div>
        </motion.div>
    )
}

function ProjectsMap() {
    return (
        <div className="m-auto">
            {projects.map((project, index) => {
                return (
                    <ProjectCard key={project.name} index={index} {...project} />
                )
            })}
            <HorizontalRule />
        </div>
    )
}

export default function Projects() {
    return (
        <div className=" bg-white p-8 md:p-[7rem] max-h-full min-h-screen flex flex-col">
            <ProjectsMap />
        </div>
    )
}