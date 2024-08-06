import express from "express";
import { userPut, userGet } from "../controller/user.controller.js";
import { dataPrint } from "../middlewares/user.middlewares.js";

const routers = express.Router();

routers.post( "/getinfo", dataPrint , userGet );

routers.post( "/put", userPut );


export {routers}