import React, {useState} from 'react';
import {FaRegLightbulb, FaLightbulb} from 'react-icons/fa'
import {AddTask} from '../AddTask';

export const Header = ({darkMode, setDarkMode}) => {

    const [shouldShowMain, setShouldShowMain] = useState(false);
    const [showQuickAddTask, setshowQuickAddTask] = useState(false);

    let lightsOn;
    if (darkMode) {
        lightsOn = <FaRegLightbulb/>
    } else {
        lightsOn = <FaLightbulb/>
    }

    return (
        <header className="header">
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" alt="Recipe"/>
                </div>
                <div className="settings">
                    <ul>
                        <li className="settings__add"
                            onClick={
                                () => {
                                    setshowQuickAddTask(true);
                                    setShouldShowMain(true)
                                }
                        }>+</li>
                        <li className="settings__darkmode"
                            onClick={
                                () => setDarkMode(!darkMode)
                        }>
                            {lightsOn}</li>
                    </ul>
                </div>
            </nav>
            <AddTask showAddTaskMain ={false}
                shouldShowMain={shouldShowMain}
                showQuickAddTask={showQuickAddTask}
                setShowQuickAddTask={setshowQuickAddTask}/>
        </header>
    )
}
