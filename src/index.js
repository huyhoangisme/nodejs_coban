import express from "express";
import configViewEngine from "./configs/viewEngine";
const app = express();
const port = 8080; //
configViewEngine(app);
app.get('/', (req, res) => {
    res.render('index')
})
app.listen(port, () => {
    console.log(`The server is listening at http://localhost:${port}`);
});