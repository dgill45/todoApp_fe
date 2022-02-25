import React from "react";


function Task({task, id, completeTask, removeTask }){

    return(
        <div className="tasks" style = {{textDecoration: task.isCompleted ? "line-through" : ""}}>
            {task.text}
            <div>
                <button onClick = {() => completeTask(id)}>complete</button>
                <button onClick = {() => removeTask(id)}>x</button>
            </div>
        </div>
    )
}

export default Task