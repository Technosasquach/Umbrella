"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const findLoc_1 = require("./findLoc");
const core_1 = require("./../core");
const search_1 = require("./search");
const app = express_1.Router();
app.post("/api/findLoc/absolute/:id", (req, res) => {
    res.json(findLoc_1.findLoc.getGeoFromSuburb(req.params.id));
});
app.post("/api/findLoc/suggestions/:id", (req, res) => {
    res.json(core_1.elastSearch.search(req.params.id));
});
app.post("/api/findLoc/fuzzy/:id", (req, res) => {
    res.json(search_1.SearchUtil.searchObjToJSONObj(core_1.elastSearch.search(req.params.id)));
});
exports.default = app;
//# sourceMappingURL=routes.js.map