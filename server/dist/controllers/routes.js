"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const findLoc_1 = require("./findLoc");
const search_1 = require("./search");
const axios_1 = require("axios");
const app = express_1.Router();
app.post("/api/findLoc/absolute/:id", (req, res) => {
    res.json(findLoc_1.findLoc.getGeoFromSuburb(req.params.id));
});
app.post("/api/findLoc/absoluteID/:id", (req, res) => {
    res.json(findLoc_1.findLoc.getGeoFromID(req.params.id));
});
app.post("/api/findLoc/IDtoName/:id", (req, res) => {
    let found;
    search_1.SearchUtil.searchObj.forEach((item) => {
        if (req.params.id == item.id) {
            found = findLoc_1.findLoc.getGeoFromID(item.id);
        }
    });
    res.json(found);
});
app.post("/api/findLoc/suggestions/:id", (req, res) => {
    const results = search_1.elastSearch.search(req.params.id);
    // console.log("Suggestions | ID: " + req.params.id + " | Results " + JSON.stringify(results))
    res.json(results);
});
app.post("/api/findLoc/fuzzy/:id", (req, res) => {
    const results = search_1.elastSearch.search(req.params.id);
    // console.log("Fuzzy | ID: " + req.params.id + " | Results " + JSON.stringify(results))
    res.json(search_1.SearchUtil.searchObjToJSONObj(results)[0]);
});
app.post("/api/proxy", (req, res) => {
    axios_1.default.get(req.body.url + '' // Stick URL in here
    ).then((response) => {
        // console.log(JSON.stringify(response.data))
        res.json(response.data);
    });
});
app.post("/api/proxy/:url", (req, res) => {
    axios_1.default.get(req.params.url).then((response) => {
        res.json(response.data);
    });
});
exports.default = app;
//# sourceMappingURL=routes.js.map