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
                        <li className="settings__add">+</li>
                        <li className="settings__darkmode "><FaRegLightbulb /></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
