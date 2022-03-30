import mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

const accessMysql = {
    host: process.env.DBHOST,
    port: 3306,
    user: process.env.DBUSER,
    database: process.env.DBNAME,
    password: process.env.DBPASS
};

console.log("MYSQL", accessMysql);

const database = mysql.createConnection(accessMysql);

database.connect(error => {
    if( error ) throw error;
    console.log("Conexion establecida a la base de datos");
});

export default database;