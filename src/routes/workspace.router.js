/*
GET /api/workspace 
trae todos los espacios de trabajo asociados al usuario
para saber qué espacios de trabajo traer, necesitamos el id del usuario


/api/workspace/:id trae un espacio de trabajo por id
/api/workspace crea un espacio de trabajo
/api/workspace/:id actualiza un espacio de trabajo
/api/workspace/:id elimina un espacio de trabajo
*/

import { Router } from "express";
import workspaceController from "../controllers/workspace.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const workspaceRouter = Router();

workspaceRouter.get(
    '/',
    authMiddleware,
    workspaceController.getAllWorkspaces
)

export default workspaceRouter