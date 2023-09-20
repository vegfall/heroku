import express from "express";

const app = express();

app.get("/api/test", (req, res) => {
    {
        res.json(
            [
                {
                    title: "test"
                },
                {
                    title: "hei"
                }
            ]
        )
    }
})

app.use(express.static("../client/dist"));

app.listen(3000);