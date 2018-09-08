"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const findLoc_1 = require("./findLoc");
const app = express_1.Router();
app.post("/api/findLoc/absolute/:id", (req, res) => {
    res.json(findLoc_1.findLoc.getGeoFromSuburb(req.params.id));
});
app.post("/api/findLoc/fuzzy/:id", (req, res) => {
    res.json(findLoc_1.findLoc.getGeoFromSuburb(req.params.id));
});
exports.default = app;
//# sourceMappingURL=routes.js.map