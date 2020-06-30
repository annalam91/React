import React, {useState} from 'react';
import {FaRegListAlt, FaRegCalendarAlt} from 'react-icons/fa';
import firebase from '../firebase';
import {useSelectedProjectValue} from '../context';
import {ProjectOverlay} from './ProjectOverlay';
import {TaskDate} from './TaskDate';

export const AddTask = ({
    showAddTaskMain = true,
    shouldShowMain = false,
    showQuickAddTask,
    setShowQuickAddTask
}) => {
    const [task, setTask] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [project, setProject] = useState('');
    const [showMain, setShowMain] = useState(shouldShowMain);
    const [showProjectOverlay, setShowProjectOverlay] = useState(false);
    const [showTaskDate, setShowTaskDate] = useState(false);

    const {selectedProject} = useSelectedProjectValue();

    const addTask = () => {
        const projectId = project || selectedProject;
        let collatedDate = '';

        return(task && projectId && firebase.firestore().collection('tasks').add({
            archived: false,
            projectId,
            task,
            date: collatedDate || taskDate,
            userId: 'cd8bd24d4d67456281204b105e89888b'
        }).then(() => {
            setTask('');
            setProject('');
            setShowMain('');
            setShowProjectOverlay(false);
        }));
    }

    return (
        <div
          className={showQuickAddTask ? 'add-task add-task__overlay' : 'add-task'}
        >
          {showAddTaskMain && (
            <div
              className="add-task__shallow"
              onClick={() => setShowMain(!showMain)}
            >
              <span className="add-task__plus">+</span>
              <span className="add-task__text">Add Food</span>
            </div>
          )}
    
          {(showMain || showQuickAddTask) && (
            <div className="add-task__main">
              {showQuickAddTask && (
                <>
                  <div>
                    <h2 className="header">Quick Add Food</h2>
                    <span
                      className="add-task__cancel-x"
                      aria-label="Cancel adding task"
                      onClick={() => {
                        setShowMain(false);
                        setShowProjectOverlay(false);
                        setShowQuickAddTask(false);
                      }}
                    >
                      X
                    </span>
                  </div>
                </>
              )}
              <ProjectOverlay
                setProject={setProject}
                showProjectOverlay={showProjectOverlay}
                setShowProjectOverlay={setShowProjectOverlay}
              />
              <TaskDate
                setTaskDate={setTaskDate}
                showTaskDate={showTaskDate}
                setShowTaskDate={setShowTaskDate}
              />
              <textarea
                className="add-task__content"
                aria-label="Enter your task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
              <button
                type="button"
                className="add-task__submit"
                onClick={() =>
                  showQuickAddTask
                    ? addTask() && setShowQuickAddTask(false)
                    : addTask()
                }
              >
                Add Food
              </button>
              {!showQuickAddTask && (
                <span
                  className="add-task__cancel"
                  onClick={() => {
                    setShowMain(false);
                    setShowProjectOverlay(false);
                  }}
                >
                  Cancel
                </span>
              )}
              <span
                className="add-task__project"
                onClick={() => setShowProjectOverlay(!showProjectOverlay)}
              >
                <FaRegListAlt />
              </span>
              <span
                className="add-task__date"
                onClick={() => setShowTaskDate(!showTaskDate)}
              >
                <FaRegCalendarAlt />
              </span>
            </div>
          )}
        </div>
      );
    };
    