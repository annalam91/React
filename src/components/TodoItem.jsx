import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} onChange={() => console.log("clicked")}/>
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem