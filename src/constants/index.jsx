import {
    cpp,
    css,
    figma,
    html,
    js,
    python,
    r,
    react,
    tailwind,
    three,
    node,
    kafka,
    casandra,
    flutter,
    firebase,

    saarthi,
    vriddhi,
} from "../assets/index.jsx"

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "Java Script",
        icon: js,
    },
    {
        name: "React JS",
        icon: react ,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "C++",
        icon: cpp,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "R prog.",
        icon: r,
    },
    {
        name: "figma",
        icon: figma,
    }
]

const projects = [
    {
        name: "Refugee Medicine Management",
        description: "Provides medical facilities in refugee camps using video calls with specialists(doctors) and fast data transfer using kafka",
        image: saarthi,
        link: "https://github.com/hrshpreet/Saarthi-Camps",
        techstack: [
            {
                name: "React JS",
                icon: react,
            },
            {
                name: "Tailwind CSS",
                icon: tailwind,
            },
            {
                name: "Node JS",
                icon: node,
            },
            {
                name: "Kafka",
                icon: kafka,
            },
            {
                name: "Casandra",
                icon: casandra,
            },
        ]
    },
    {
        name: "Vriddhi: Kids' Development Navigator",
        description: "National Level Hackathon Winner. Vriddhi, an app to measure and promote children's overall development",
        image: vriddhi,
        link: "https://youtu.be/JKMVmQKKfUg",
        techstack: [
            {
                name: "Flutter",
                icon: flutter,
            },
            {
                name: "Firbase",
                icon: firebase,
            }, 
            {
                name: "CSS",
                icon: css,
            },
            {
                name: "React JS",
                icon: react,
            },
        ]
    }
]


export {technologies, projects};
export default projects;