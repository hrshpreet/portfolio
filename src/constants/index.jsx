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
    vriddhilogo,
    saarthilogo,
} from "../assets/index.jsx"

const technologies = [
    {
        name: "HTML 5",
        icon: html,
        color: "aes-res",
    },
    {
        name: "CSS 3",
        icon: css,
        color: "aes-green",
    },
    {
        name: "Java Script",
        icon: js,
        color: "aes-blue",
    },
    {
        name: "React JS",
        icon: react ,
        color: "aes-orange",
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
        color: "aes-yellow",
    },
    {
        name: "C++",
        icon: cpp,
        color: "aes-res",
    },
    {
        name: "Python",
        icon: python,
        color: "aes-green",
    },
    {
        name: "R prog.",
        icon: r,
        color: "aes-blue",
    },
    {
        name: "figma",
        icon: figma,
        color: "aes-orange",
    }
]

const projects = [
    {
        name: "Refugee Medicine Management",
        description: "Medical facilities in refugee camps using video calls with specialists(doctors) and big data transfer using kafka",
        image: saarthi,
        logo: saarthilogo,
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
        logo: vriddhilogo,
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