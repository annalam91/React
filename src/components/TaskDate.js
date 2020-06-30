import React from 'react';
import moment from 'moment';
import { GiMeal, GiFruitBowl } from 'react-icons/gi' 

export const TaskDate = ({setTaskDate, showTaskDate, setShowTaskDate}) => showTaskDate && (
    <div className="task-date">
        <ul className="task-date__list">
            <li>
                <div onClick={
                    () => {
                        setShowTaskDate(false);
                        setTaskDate(moment().format('DD/MM/YYYY'));
                    }
                }>
                    <span>
                        <GiMeal/>
                    </span>
                    <span>Recipe</span>
                </div>
            </li>
            <li>
                <div onClick={
                    () => {
                        setShowTaskDate(false);
                        setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'));
                    }
                }>
                    <span>
                        <GiFruitBowl/>
                    </span>
                    <span>Ingredients needed</span>
                </div>
            </li>
            <li>
                {/* <div onClick={
                    () => {
                        setShowTaskDate(false);
                        setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'));
                    }
                }>
                    <span>
                        <FaRegPaperPlane/>
                    </span>
                    <span>Next week</span>
                </div> */}
            </li>
        </ul>
    </div>
);
