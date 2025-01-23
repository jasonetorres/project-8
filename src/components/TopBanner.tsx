import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const TopBanner: React.FC = () => {
    return (
        <div className="p-2 text-center shadow-md relative dark:bg-gray-800">
            <div className="inline-flex items-center justify-center gap-2">
                <a
                    href="https://www.torc.dev/discord"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                >
                    <span className="text-sm font-medium text-black dark:text-white">We are having lots of fun on </span>
                    <FontAwesomeIcon icon={faDiscord} className="w-4 h-4 dark:text-white" />
                    <span className="text-sm font-medium text-black dark:text-white"> Discord. Come and join us!</span>
                </a>
                <button
                    className="bg-transparent border-none cursor-pointer ml-2"
                    aria-label="close discord message">
                </button>
            </div>
        </div>
    );
};

export default TopBanner;