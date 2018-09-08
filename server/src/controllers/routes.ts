import { Router, Request, Response, NextFunction } from "express";
import { findLoc } from "./findLoc";

const app = Router();

app.post("/api/findLoc/absolute/:id", (req: Request, res: Response) => {
    res.json(findLoc.getGeoFromSuburb(req.params.id));
});

app.post("/api/findLoc/fuzzy/:id", (req: Request, res: Response) => {
    res.json(findLoc.getGeoFromSuburb(req.params.id));
});

export default app;