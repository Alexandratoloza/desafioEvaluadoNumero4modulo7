CREATE TABLE canciones (
	id SERIAL primary key, 
	Titulo VARCHAR(50), 
	Artista VARCHAR(50),
	Tono VARCHAR(10)
);
	


select * from canciones;

INSERT INTO canciones (titulo, artista, tono) VALUES ('cacion 1', 'holahola', 'TURUTU');
INSERT INTO canciones (titulo, artista, tono) VALUES ('cancion 2', 'DESCONOCIDO', 'TURUTU');

DELETE FROM canciones
WHERE id = 1;

UPDATE canciones 
SET 
    Titulo = 'cacion 1',
    Artista = 'holahola',
    Tono = 'turutu'
WHERE 
    Titulo = 'cancion actualizada'
RETURNING *;





SELECT NOW();