import express from 'express';
import posts from '../../database.js';
const postsRouter = express.Router();

//index
postsRouter.get("/", (req, res) => {
    res.json(posts);
})

//show
postsRouter.get("/:id", (req, res) => {

    // check on request id: if NaN return status 404
    if (isNaN(Number(req.params.id))) {
        res.status(404).json({
            "message": "bad request: id must be a number"
        })
        return
    }

    res.send("Post con id " + req.params.id);
})

//create
postsRouter.post("/", (req, res) => {
    res.send("Creazione del post")
})

//update
postsRouter.put("/:id", (req, res) => {

    // check on request id: if NaN return status 404
    if (isNaN(Number(req.params.id))) {
        res.status(404).json({
            "message": "bad request: id must be a number"
        })
        return
    }

    res.send("modifica del post con id " + req.params.id);
})

//modify
postsRouter.patch("/:id", (req, res) => {

    // check on request id: if NaN return status 404
    if (isNaN(Number(req.params.id))) {
        res.status(404).json({
            "message": "bad request: id must be a number"
        })
        return
    }
    res.send("modifica parziale del post con id " + req.params.id);
})

//destroy
postsRouter.delete("/:id", (req, res) => {

    // check on request id: if NaN return status 404
    if (isNaN(Number(req.params.id))) {
        res.status(404).json({
            "message": "bad request: id must be a number"
        })
        return
    }
    res.send("cancellazione del post con id " + req.params.id);
})

export default postsRouter;