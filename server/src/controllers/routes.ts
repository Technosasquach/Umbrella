import { Router, Request, Response, NextFunction } from "express";
import { findLoc } from "./findLoc";
import { elastSearch } from "./../core";
import { SearchUtil } from "./search";

import Axios,{AxiosRequest, AxiosRequestConfig, AxiosResponse} from "axios";

const app = Router();

app.post("/api/findLoc/absolute/:id", (req: Request, res: Response) => {
    res.json(findLoc.getGeoFromSuburb(req.params.id));
});

app.post("/api/findLoc/suggestions/:id", (req: Request, res: Response) => {
    res.json(elastSearch.search(req.params.id));
});

app.post("/api/findLoc/fuzzy/:id", (req: Request, res: Response) => {
    res.json(
        SearchUtil.searchObjToJSONObj(
            elastSearch.search(req.params.id)
        )
    );
});

app.post("/api/proxy", (req: Request, res: Response) => {
    // Header info -> escape to get a pure URL
    Axios.get(
        req.body.url + '' // Stick URL in here
    ).then((response: AxiosResponse) => {
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