"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const modelBase_1 = __importDefault(require("../modelBase"));
class modelUsers extends modelBase_1.default {
    findUser(result) {
        let db = this.getDb();
        let sql = "SELECT * FROM usuarios";
        db.query(sql, (err, resp) => {
            if (err) {
                result(null, err);
                return;
            }
            result(null, resp);
        });
    }
}
exports.default = modelUsers;
;
