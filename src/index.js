import express from "express";
// import { bodyParser } from 'body-parser';
import configViewEngine from "./configs/viewEngine";
import initWebRouter from "./router/web";
// import connection from "./configs/connectDB";
const app = express();
// cấu hình express để post request
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
const port = 3000; //
// setup view engine
configViewEngine(app);
// init webrouter
initWebRouter(app);
app.listen(port, () => {
    console.log(`The server is listening at http://localhost:${port}`);
});