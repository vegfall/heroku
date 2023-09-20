import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

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
        {tasks.map(t => <div>{t.title}</div>)}
    </div>
}

root.render(<TaskApplication/>)