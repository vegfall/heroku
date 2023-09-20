import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function TaskListEntry({task}) {
    async function handleUpdate() {
        await fetch("/api/tasks", {
            method: "PUT",
            body: JSON.stringify({
                    title: "new title"
            }),
            headers: {
                "content-type": "application/json"
            }
        });
    }

    return <h2>
        <input value={task.title}/>
        <br/>
        <button onClick={handleUpdate}>Update</button>
    </h2>
}

function TaskApplication() {
    const [tasks, setTasks] = useState([]);

    async function loadTasks() {
        const res = await fetch("/api/tasks");
        setTasks(await res.json());
    }

    useEffect(() => {
        loadTasks();
    }, []);

    return <div>
        <h1>My react task application with Express and reload</h1>
        {tasks.map(t => <TaskListEntry task={t} />)}
    </div>
}

root.render(<TaskApplication/>)