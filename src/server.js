import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import connectDB from './config/connectDB';
import viewEngine from './config/viewEngine';
import initWebRoutes from './route/web';

require('dotenv').config();

let app = express();
app.use(cors({ origin: true }));

// config app
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;

app.listen(port, () => {
    console.log('Backend nodejs is running on the port : ' + port);
    console.log(`http://localhost:${port}`);
});
