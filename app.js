import express from 'express';
import posts from './database.js';

const app = express();
const port = 3000;

app.use(express.static('public'));

//index
app.get("/posts", (req, res) => {
    res.send("Lista dei post");
})

//show
app.get("/posts/:id", (req, res) => {
    if (isNaN(Number(req.params.id))) {
        res.status(404).json({
            "message": "bad request: id must be a number"
        })
        return
    }

    res.send("Post con id " + req.params.id);
})

//update
app.put("/posts/:id", (req, res) => {
    if (isNaN(Number(req.params.id))) {
        res.status(404).json({
            "message": "bad request: id must be a number"
        })
        return
    }

    res.send("modifica del post con id " + req.params.id);
})

//modify
app.patch("/posts/:id", (req, res) => {
    if (isNaN(Number(req.params.id))) {
        res.status(404).json({
            "message": "bad request: id must be a number"
        })
        return
    }
    res.send("modifica parziale del post con id " + req.params.id);
})

//destroy
app.delete("/posts/:id", (req, res) => {
    if (isNaN(Number(req.params.id))) {
        res.status(404).json({
            "message": "bad request: id must be a number"
        })
        return
    }
    res.send("cancellazione del post con id " + req.params.id);
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`
    );
})