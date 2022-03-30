import modelBase from "../modelBase";

export default class modelUsers extends modelBase{
    findUser( result : any ){
        let db = this.getDb();
        let sql = "SELECT * FROM usuarios";
        db.query(sql, (err: any, resp: any) => {
            if(err){
                result(null, err);
                return;
            }

            result(null, resp);
        });
    }
};