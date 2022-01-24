import * as express from "express";
import { createConnection } from "typeorm";
import "dotenv/config";
import { createFakeData } from "./utils/CreateFakeData";
import { cleanAllData } from "./utils/CleanAllData";
import { AppRoutes } from "./routes";

createConnection().then(async connection => {

    // create and setup express app
    const app = express();
    app.use(express.json());

    // register all application routes
    AppRoutes.forEach(route => {
        (app as any)[route.method](route.route, (req, res) => {
            const result = (new (route.controller as any))[route.action](req, res);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
            } else if (result !== null && result !== undefined) {
                res.send(result);
            }
        });
    });


    // create fake data
    //createFakeData();

    // clean all data
    //cleanAllData();

    // start express server
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
        console.log(`Express server running on http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.log(err);
});