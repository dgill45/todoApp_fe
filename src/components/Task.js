import React from "react";


function Task({task, index, completeTask, removeTask }){

    return(
        <div className="tasks" style = {{textDecoration: task.isCompleted ? "line-through" : ""}}>
            {task.text}
            <div>
                <button onClick = {() => completeTask(index)}>complete</button>
                <button onClick = {() => removeTask(index)}>x</button>
            </div>
        </div>
    )
}

export default Task