"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const QLDSub = require("./qld.json");
const elasticlunr_1 = require("elasticlunr");
exports.elastSearch = new elasticlunr_1.Index();
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
    static genSearch() {
        exports.elastSearch.addField("locID");
        exports.elastSearch.addField("name");
        exports.elastSearch.setRef("id"); // ID
        QLDSub.features.forEach((item) => {
            this.searchObj.push({
                id: item.id,
                locID: item.properties.loc_pid,
                name: item.properties.qld_loca_2
            });
        });
        this.searchObj.forEach((item) => {
            exports.elastSearch.addDoc(item);
        });
    }
}
SearchUtil.searchObj = [];
exports.SearchUtil = SearchUtil;
//# sourceMappingURL=search.js.map