import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const TopBanner: React.FC = () => {
const isDarkMode = false;

    return (
        <div
            style={{
                padding: '8px 20px',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                position: 'relative',
            }}
        >
            <div
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    color: isDarkMode ? '#fff' : '#000',
                }}
            >
                <a
                    href="https://discord.gg/RwVCs6JFTY"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        textDecoration: 'none',
                    }}
                >
                    <span style={{ fontSize: '14px', fontWeight: 500 }}>We are having lots of fun on  </span>
                    <FontAwesomeIcon icon={faDiscord} style={{ width: '16px', height: '16px' }} />
                    <span style={{ fontSize: '14px', fontWeight: 500 }}>  Discord. Come and join us!</span>
                </a>
                <button
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        marginLeft: '10px',
                    }}
                    aria-label="close discord message">
                </button>
            </div>
        </div>
    );
};

export default TopBanner;
