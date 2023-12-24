import React from "react";
import { projects } from "../constants";
import { motion } from "framer-motion";
import Scroll from "./Scroll";
import { expandarrows } from "../assets";

function HorizontalRule() {
    return (
        <hr style={{ width: '100%', height: '3px', backgroundColor: 'black' }} />
    )
}

function ProjectStack({ project }) {
    return (
        <ul className="flex">
            {project.techstack.map((tech, index) => (
                <li key={tech.name} className={`mr-2 p-2 rounded-lg bg-aes-blue-50`}>
                    <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain"/>
                </li>
            ))}
        </ul>
    )
}

function ProjectLink({ project }) {
    return(
        <div className="p-2 bg-aes-yellow-50">
            <a href={project.link} target="_blank">
            <img src={expandarrows} alt="link to the project" className="w-8 h-8" />
            </a>
        </div>
    )
}

function ProjectCard(props) {
    return (
        <motion.div 
            whileHover={{ rotate: 0.5 }}
        >
            <HorizontalRule />
            <div className="md:flex py-[1.5rem] font-montserrat">

                {/* Project index */}
                <div className="hidden md:block text-[1.5rem] my-auto">{props.index + 1}</div>
                <div className="hidden md:block w-[1.5rem]"></div>

                {/* Project Image */}
                <div className="hidden md:block min-w-[18rem] min-h-[11rem] w-[100%] md:max-w-[18rem] max-h-[11rem]">
                    <img src={props.image} alt={props.name} className="w-[100%] md:w-[18rem] h-[11rem] object-contain" />
                </div>

                

                <div className="w-[1.5rem]"></div>

                {/* Project Desc */}
                <div>
                    <div className="text-[2rem] md:text-[3rem] font-extrabold">{props.name}</div>
                    <div className="flex  justify-between">
                        <ProjectStack project={props} />
                        <ProjectLink project={props} />
                    </div>
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
        <div className=" bg-white p-8 md:p-[7rem] max-h-full min-h-screen flex flex-col relative" id="projects">
            <ProjectsMap />
            <Scroll color="black" id="footer" />
        </div>
    )
}