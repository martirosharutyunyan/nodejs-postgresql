"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default.Router();
const postgreSQL_1 = require("../model/postgreSQL");
app.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = 'INSERT INTO `users` (`id`,`email`,`name`,`password`) VALUES (NULL,\'Harutunyan\',\'Martiros\',\'hhs13516\')';
        const query2 = 'SELECT * FROM users';
        postgreSQL_1.client.query(query, (err, data) => {
            console.log(data);
            if (err)
                throw err;
            postgreSQL_1.client.end();
        });
        postgreSQL_1.client.query(query2, (err, data) => {
            if (err)
                throw err;
            console.log(data);
            postgreSQL_1.client.end();
        });
        res.send('ok');
    }
    catch (err) {
        console.log(err);
    }
}));
module.exports = app;
//# sourceMappingURL=test.js.map