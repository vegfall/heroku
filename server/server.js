import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const TASKS = [
    {
        id: 1,
        title: "task1",
        status: "done"
    },
    {
        id: 2,
        title: "task2",
        status: "begun"
    },
    {
        id: 3,
        title: "task3",
        status: "future"
    }
];

app.get("/api/tasks", (req, res) => {
    {
        res.json(TASKS)
    }
})

app.put("/api/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const {title} = req.body;

    TASKS.find(t => t.id === id).title = title;

    res.end();
})

app.use(express.static("../client/dist"));

app.listen(process.env.PORT || 3000);