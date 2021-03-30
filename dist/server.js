"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const postgreSQL_1 = require("./model/postgreSQL");
const app = express_1.default();
const port = process.env.PORT;
const mongoURL = process.env.mongodb;
postgreSQL_1.client.connect(((err) => {
    if (err)
        throw err;
    console.log('connected to postgresDB');
}));
app.use(morgan_1.default(`dev`));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: false,
}));
app.use('/getUsers', require('./router/getUsers'));
app.use('/sendUsers', require('./router/sendUsers'));
app.use('/deleteUser', require('./router/deleteUser'));
app.listen(port, () => console.log(`server is runing on port ${port}`));
//# sourceMappingURL=server.js.map