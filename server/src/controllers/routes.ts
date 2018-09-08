import { Router, Request, Response, NextFunction } from "express";

const app = Router();

// app.get("*", (req: Request, res: Response) => {
    
// });

app.post("/search/:searchText", (req: Request, res: Response) => {
});

app.post("/books/:id", (req: Request, res: Response) => {
});

export default app;