import React, {useState, useEffect} from "react"


function MainContainer(){

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/tasks')
        .then((res) => res.json())
        .then((data) => {
            setTasks(data.tasks);
        })
    }, []);


    
}

export default MainContainer;