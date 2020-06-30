import React, {useState} from 'react';
import firebase from '../firebase';
import {generatePushId} from '../helpers';
import {useProjectsValue} from '../context';

export const AddProject = ({
    shouldShow = false
}) => {
    const [show, setShow] = useState(shouldShow)
    const [projectName, setProjectName] = useState('')
    const projectId = generatePushId();
    const {setProjects} = useProjectsValue();
    const addProjects = () => {
        projectName && firebase.firestore().collection('projects').add({projectId, name: projectName, userId: 'cd8bd24d4d67456281204b105e89888b'}).then(() => {
            setProjects([]);
            setProjectName('');
            setShow(false);
        });
    }

    return (
        <div className="add-project">
            {
            show && (
                <div className="add-project__input">
                    <input value={projectName}
                        onChange={
                            e => setProjectName(e.target.value)
                        }
                        className="add-project__name"
                        type="text"
                        placeholder="Add meal type here "/>
                    <button className="add-project__submit" type="button"
                        onClick={
                            () => addProjects()
                    }>
                        Add Meal
                    </button>
                    <span className="add-project__cancel"
                        onClick={
                            () => setShow(false)
                    }>
                        Cancel
                    </span>
                </div>
            )
        }
            <span className="add-project__plus">+</span>
            <span className="add-project__text"
                onClick={
                    () => setShow(!show)
            }>Add Meal</span>
        </div>
    )
}
