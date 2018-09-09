import { Router, Request, Response, NextFunction } from "express";
import { findLoc } from "./findLoc";
import { SearchUtil, elastSearch } from "./search";

import Axios,{AxiosResponse} from "axios";

const app = Router();

app.post("/api/findLoc/absolute/:id", (req: Request, res: Response) => {
    res.json(findLoc.getGeoFromSuburb(req.params.id));
});

app.post("/api/findLoc/absoluteID/:id", (req: Request, res: Response) => {
    res.json(findLoc.getGeoFromID(req.params.id));
});

app.post("/api/findLoc/IDtoName/:id", (req: Request, res: Response) => {
    let found: any;
    SearchUtil.searchObj.forEach((item: any) => {
        if(req.params.id == item.id) {
            found = findLoc.getGeoFromID(item.id);
        }
    });
    res.json(found);
});

app.post("/api/findLoc/suggestions/:id", (req: Request, res: Response) => {
    const results = elastSearch.search(req.params.id);
    // console.log("Suggestions | ID: " + req.params.id + " | Results " + JSON.stringify(results))
    res.json(results);
});

app.post("/api/findLoc/fuzzy/:id", (req: Request, res: Response) => {
    const results = elastSearch.search(req.params.id);
    // console.log("Fuzzy | ID: " + req.params.id + " | Results " + JSON.stringify(results))
    res.json(SearchUtil.searchObjToJSONObj(results)[0]);
});

app.post("/api/proxy", (req: Request, res: Response) => {
    Axios.get(
        req.body.url + '' // Stick URL in here
    ).then((response: AxiosResponse) => {
        // console.log(JSON.stringify(response.data))
        res.json(response.data);
    })
});

app.post("/api/proxy/:url", (req: Request, res: Response) => {
    Axios.get(
        req.params.url
    ).then((response: AxiosResponse) => {
        res.json(response.data);
    })
});

export default app;