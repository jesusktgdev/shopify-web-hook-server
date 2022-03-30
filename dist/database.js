"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const accessMysql = {
    host: process.env.DBHOST,
    port: 3306,
    user: process.env.DBUSER,
    database: process.env.DBNAME,
    password: process.env.DBPASS
};
console.log("MYSQL", accessMysql);
const database = mysql_1.default.createConnection(accessMysql);
database.connect(error => {
    if (error)
        throw error;
    console.log("Conexion establecida a la base de datos");
});
exports.default = database;
