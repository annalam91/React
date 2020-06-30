import React, { useState }  from 'react';
import { FaChevronDown, FaChevronUp, } from 'react-icons/fa' 
import { GiMeal, GiFruitBowl } from 'react-icons/gi' 
import { useSelectedProjectValue } from '../../context/selected-project-context';
import { Projects } from '../Project';
import { AddProject } from '../AddProject';

export const Sidebar = () => {
    const { setSelectedProject } = useSelectedProjectValue();
    const [ active, setActive]  = useState('recipe');
    const [ showProjects, setShowProjects]  = useState(true);

    let isProjectAvailable;
    if(showProjects) {        
        isProjectAvailable = <span><FaChevronDown className={!showProjects ? 'hidden-projects' : undefined} /></span>
    } else {
        isProjectAvailable =  <span><FaChevronUp className={!showProjects ? 'hidden-projects' : undefined} /></span>
    }   

return (
    <div className="sidebar">
        <ul className="sidebar__generic">
            <li className={active === 'recipe' ? 'active' : undefined }
            onClick={() => {setActive('recipe'); setSelectedProject('RECIPE');}}
            ><span><GiMeal /></span><span>Recipe</span></li>
            <li className={active === 'ingredients_needed' ? 'active' : undefined }
            onClick={() => {setActive('ingredients_needed'); setSelectedProject('INGREDIENTS_NEEDED');}}
            ><span><GiFruitBowl /></span><span>Ingredients needed</span></li>
        </ul>
        <div className="sidebar__middle" onClick={() => setShowProjects(!showProjects)}>
            {isProjectAvailable}
            <h2>Projects</h2>
        </div>
        <ul className="sidebar__projects">{showProjects && <Projects />}</ul>
        {showProjects && <AddProject />}
    </div>
    ) 
}