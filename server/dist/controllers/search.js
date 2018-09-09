"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QLDSub = require("./qld.json");
class SearchUtil {
    static searchObjToJSONObj(search) {
        const results = [];
        QLDSub.features.forEach((item) => {
            search.forEach((val) => {
                if (item["id"] == val["ref"]) {
                    // Found an ID!
                    console.log("Found something!:" + JSON.stringify(item));
                    results.push(item);
                }
            });
        });
        return results;
    }
}
exports.SearchUtil = SearchUtil;
//# sourceMappingURL=search.js.map