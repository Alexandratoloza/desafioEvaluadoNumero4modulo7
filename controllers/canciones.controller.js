import { Cancion } from "../models/canciones.model.js";

export const getCanciones = async (req, res) => {
    try {
        const canciones = await Cancion.findAll()
        return res.json(canciones)
    } catch (error) {
        console.log(error)
        return res.status(500).send()
    }
}

export const createCancion = async (req, res) => {
    try {
        const { Titulo, Artista, Tono} = req.body
        const cancion = await Cancion.create({ Titulo, Artista, Tono })
        return res.json(cancion)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}


export const removeCancion = async (req, res) => {
    try {
        const { id } = req.query 
        const cancion = await Cancion.remove(id)
        return res.json(cancion)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

export const updateCancion = async (req, res) => {
    try {
       
        const {  Titulo, Artista, Tono} = req.body
        const cancion = await Cancion.update({ Titulo, Artista, Tono})
        return res.json(cancion)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}
