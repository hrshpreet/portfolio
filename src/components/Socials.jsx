import React from 'react';
import { github, linkedin, twitter } from '../assets';

const SocialLinks = () => {
    return (
        <div className="flex flex-wrap items-center space-x-4 w-fit">
            <a
                href="https://github.com/hrshpreet"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 transition duration-300 ease-in-out"
            >
                <img src={github} alt="github" className='h-7' />
            </a>

            <a
                href="https://twitter.com/hrshpreet_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 transition duration-300 ease-in-out"
            >
                <img src={twitter} alt="x/twitter" className='h-7' />
            </a>

            <a
                href="https://www.linkedin.com/in/-harshpreet-singh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 transition duration-300 ease-in-out"
            >
                <img src={linkedin} alt="linkedin" className='h-7' />
            </a>
        </div>
    );
};

export default SocialLinks;
