import database from "../database";

interface modelBaseInterface {
    db: any
}

export default class modelBase implements modelBaseInterface {
    db : any = database;

    constructor(){
    }

    public getDb(){
        return this.db;
    }
};