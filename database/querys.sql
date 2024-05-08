CREATE TABLE canciones (
	id SERIAL primary key, 
	Titulo VARCHAR(50), 
	Artista VARCHAR(50),
	Tono VARCHAR(10)
);
	


select * from canciones;

INSERT INTO canciones (titulo, artista, tono) VALUES ('cacion 1', 'holahola', 'TURUTU') RETURNING *;;
INSERT INTO canciones (titulo, artista, tono) VALUES ('cancion 2', 'DESCONOCIDO', 'TURUTU' RETURNING *;);

DDROP TABLE IF EXISTS canciones;

CREATE TABLE canciones (
	id SERIAL primary key, 
	Titulo VARCHAR(50), 
	Artista VARCHAR(50),
	Tono VARCHAR(10)
);


select * from canciones;

INSERT INTO canciones (titulo, artista, tono) VALUES ('cacion 1', 'artista1', 'TURUTU');
INSERT INTO canciones (titulo, artista, tono) VALUES ('cancion 2', 'artista2', 'PARARAN');


DELETE FROM canciones
WHERE id = 1 RETURNING *;

UPDATE canciones 
SET 
    Titulo = 'cacion 1',
    Artista = 'holahola',
    Tono = 'turutu'
WHERE 
    Titulo = 'cancion actualizada'
RETURNING *;





SELECT NOW();