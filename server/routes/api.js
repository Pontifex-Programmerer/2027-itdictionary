import { Router } from "express";
import * as elever from "../controllers/elevController.js";

// Express 4 fanger ikke feil fra async-funksjoner selv.
const asynk = (fn) => (req, res, next) => fn(req, res).catch(next);

const api = Router();
api.get("/elever", asynk(elever.liste));
api.get("/elever/:mappe", asynk(elever.vis));
api.put("/elever/:mappe/vurdering", asynk(elever.lagre));
api.get("/elever/:mappe/vurdering.pdf", asynk(elever.pdf));
api.get("/elever/:mappe/nettside", asynk(elever.nettside));

export default api;
