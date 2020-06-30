import React from 'react';
import {useProjectsValue} from '../context';

export const ProjectOverlay = ({setProject, showProjectOverlay, setShowProjectOverlay}) => {
    const {projects} = useProjectsValue();

    return(projects && showProjectOverlay && (
        <div className="project-overlay">
            <ul className="project-overlay__list">
                {
                projects.map((project) => (
                    <li key={
                        project.projectId
                    }>
                        <div onClick={
                            () => {
                                setProject(project.projectId);
                                setShowProjectOverlay(false);
                            }
                        }>
                            {
                            project.name
                        } </div>
                    </li>
                ))
            } </ul>
        </div>
    ));
};
