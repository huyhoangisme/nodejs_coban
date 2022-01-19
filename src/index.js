import express from "express";
const app = express();
const port = 8080; //
app.get('/', (req, res) => {
    res.send("I'm Huy Hoang")
})
app.listen(port, () => {
    console.log(`The server is listening at http://localhost:${port}`);
});