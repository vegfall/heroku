import express from "express";

const app = express();

app.get("/api/tasks", (req, res) => {
    {
        res.json(
            [
                {
                    title: "task1"
                },
                {
                    title: "task2"
                }
            ]
        )
    }
})

app.use(express.static("../client/dist"));

app.listen(process.env.PORT || 3000);