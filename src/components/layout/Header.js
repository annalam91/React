import React from 'react';
import {FaRegLightbulb} from 'react-icons/fa'

export const Header = () => {
    
    return(
        <header className="header">
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" alt="Recipe" />
                </div>
                <div className="settings">
                    <ul>
                        <li>+</li>
                        <li><FaRegLightbulb /></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
