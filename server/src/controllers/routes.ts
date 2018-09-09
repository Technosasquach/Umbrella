import { Router, Request, Response, NextFunction } from "express";
import { findLoc } from "./findLoc";
import { elastSearch } from "./../core";
import { SearchUtil } from "./search";

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

export default app;