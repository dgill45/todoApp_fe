import React, {useState, useEffect} from "react"
import Task from "./Task"


function MainContainer(){

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/tasks')
        .then((res) => res.json())
        .then((setTasks
            
        )
    )}, [])

    const completeTask = id => {
        const newTasks = [...tasks];
        newTasks[id].isCompleted = true;
        setTasks(newTasks);
    };

    const removeTask = id => {
        const newTasks = [...tasks];
        newTasks.splice(id, 1);
        setTasks(newTasks);
        alert("Task deleted!")
      };
      
    return (

        <div className="container">
            <div className="task-list">
                    <table>
                        <thead>
                            <h1>Tasklister</h1>
                        </thead>
                        <tbody>
                            {tasks.map((task, id) => (
                                <tr><td>{<Task
                                            key={id}
                                            task ={task}
                                            completeTask = {completeTask}
                                            removeTask = {removeTask}
                                    />}</td></tr>
                            ))}
                        </tbody>
                    </table>
            </div>
        </div>
    )

    
}

export default MainContainer;