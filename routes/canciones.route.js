import { Router } from "express";
import { createCancion, getCanciones, removeCancion, updateCancion } from "../controllers/canciones.controller.js"

const router = Router()

router.get ('/', getCanciones)
router.post('/', createCancion)
router.delete('/:id', removeCancion)
router.put('/:id', updateCancion)

export default router;
