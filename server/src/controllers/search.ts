import * as QLDSub from "./qld.json";

export class SearchUtil {

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
        
}