import { pool } from '../database/connection.js'


const findAll = async () => {
    const { rows } = await pool.query('SELECT * FROM canciones')
    return rows
}


const create = async ({ Titulo, Artista ,Tono }) => {
    const query = {
        text: `INSERT INTO canciones (Titulo, Artista ,Tono)
        VALUES ($1, $2, $3) RETURNING *`,
        values: [Titulo, Artista ,Tono]
    }

    const { rows } = await pool.query(query)
    return rows[0]
}


const update = async ({ Titulo, Artista ,Tono }) => {
    const query = {
        text: `UPDATE canciones SET
        Titulo = $1,
        Artista = $2,
        Tono = $3
        WHERE Titulo = $4
        RETURNING *`,
        values: [ Titulo, Artista ,Tono, Titulo ]
    }

    const { rows } = await pool.query(query)
    return rows[0]
}

const remove = async (id) => {
    const query = {
        text: `
        DELETE FROM canciones WHERE id = $1;

        `,
        values: [id]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

export const Cancion = {
    findAll,
    create,
    update, 
    remove
}