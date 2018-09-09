import * as QLDSub from "./qld.json";

import { Index } from "elasticlunr";
export const elastSearch = new Index();

export class SearchUtil {

    public static searchObj: any[] = []

    public static searchObjToJSONObj(search: any[]) {
        const results: any[] = [];
        (<any>QLDSub).features.forEach((item: any) => {
            search.forEach((val) => {
                if(item["id"] == val["ref"]) {
                    // Found an ID!
                    console.log("Found something!:" + JSON.stringify(item));
                    results.push(item);
                }
            })
        });
        return results;
    }

    public static genSearch() {
        elastSearch.addField("locID");
        elastSearch.addField("name");
        elastSearch.setRef("id");           // ID
        (<any>QLDSub).features.forEach((item: any) => {
            this.searchObj.push({
                id: item.id,
                locID: item.properties.loc_pid,
                name: item.properties.qld_loca_2
            });
        });

        this.searchObj.forEach((item: any) => {
            elastSearch.addDoc(item);
        })
    }
}