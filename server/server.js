import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const TASKS = [
    {
        title: "task1",
        status: "done"
    },
    {
        title: "task2",
        status: "begun"
    },
    {
        title: "task3",
        status: "future"
    }
];

app.get("/api/tasks", (req, res) => {
    {
        res.json(TASKS)
    }
})

app.put("/api/tasks", (req, res) => {
    const {title} = req.body;

    for (const task of TASKS) {
        task.title = title;
    }

    res.end();

})

app.use(express.static("../client/dist"));

app.listen(process.env.PORT || 3000);