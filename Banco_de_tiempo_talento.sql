
CREATE DATABASE banco_tiempo_talento
    CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE banco_tiempo_talento;
CREATE TABLE usuario (
    id_usuario      INT          NOT NULL AUTO_INCREMENT,
    nombre          VARCHAR(50)  NOT NULL,
    correo          VARCHAR(50)  NOT NULL,                 
    rol             VARCHAR(30)  NULL,
    nivel_educativo VARCHAR(30)  NOT NULL,
    CONSTRAINT pk_usuario PRIMARY KEY (id_usuario),
    CONSTRAINT uq_usuario_correo UNIQUE (correo),
    CONSTRAINT chk_usuario_correo CHECK (correo LIKE '%_@_%.__%')
);
 
CREATE TABLE usuario_regular (
    id_usuario INT NOT NULL,
    creditos   INT NOT NULL DEFAULT 0,
    CONSTRAINT pk_usuario_regular PRIMARY KEY (id_usuario),
    CONSTRAINT fk_regular_usuario FOREIGN KEY (id_usuario)
        REFERENCES usuario (id_usuario) ON DELETE CASCADE,
    CONSTRAINT chk_creditos CHECK (creditos >= 0)          
);
 
CREATE TABLE usuario_administrador (
    id_usuario INT         NOT NULL,
    puesto     VARCHAR(20) NOT NULL,
    CONSTRAINT pk_usuario_admin PRIMARY KEY (id_usuario),
    CONSTRAINT fk_admin_usuario FOREIGN KEY (id_usuario)
        REFERENCES usuario (id_usuario) ON DELETE CASCADE
);
 
CREATE TABLE habilidades (
    id_habilidad INT         NOT NULL AUTO_INCREMENT,
    nombre       VARCHAR(30) NOT NULL,
    CONSTRAINT pk_habilidades PRIMARY KEY (id_habilidad),
    CONSTRAINT uq_habilidad_nombre UNIQUE (nombre)
);
 
CREATE TABLE usuarios_habilidades (
    id_habilidad INT NOT NULL,
    id_usuario   INT NOT NULL,
    CONSTRAINT pk_usuarios_habilidades PRIMARY KEY (id_habilidad, id_usuario),
    CONSTRAINT fk_uh_habilidad FOREIGN KEY (id_habilidad)
        REFERENCES habilidades (id_habilidad),
    CONSTRAINT fk_uh_usuario FOREIGN KEY (id_usuario)
        REFERENCES usuario (id_usuario) ON DELETE CASCADE
);
 
CREATE TABLE servicios (
    id_servicio   INT           NOT NULL AUTO_INCREMENT,
    valor_en_horas INT          NOT NULL,
    estatus       BOOLEAN       NOT NULL DEFAULT TRUE,     
    descripcion   VARCHAR(1000) NOT NULL,
    id_usuario    INT           NOT NULL,                 
    CONSTRAINT pk_servicios PRIMARY KEY (id_servicio),
    CONSTRAINT fk_servicio_usuario FOREIGN KEY (id_usuario)
        REFERENCES usuario (id_usuario),
    CONSTRAINT chk_valor_horas CHECK (valor_en_horas > 0)
);
 
CREATE TABLE solicitud (
    id_solicitud    INT         NOT NULL AUTO_INCREMENT,
    fecha_solicitud DATE        NOT NULL,
    fecha_tentativa DATE        NOT NULL,
    estado          VARCHAR(15) NOT NULL DEFAULT 'Pendiente',   
    id_servicio     INT         NOT NULL,
    id_usuario      INT         NOT NULL,                       
    CONSTRAINT pk_solicitud PRIMARY KEY (id_solicitud),
    CONSTRAINT fk_solicitud_servicio FOREIGN KEY (id_servicio)
        REFERENCES servicios (id_servicio),
    CONSTRAINT fk_solicitud_usuario FOREIGN KEY (id_usuario)
        REFERENCES usuario (id_usuario),
    CONSTRAINT chk_solicitud_estado CHECK
        (estado IN ('Pendiente','Aceptada','Rechazada','Cancelada','Completada')),
    CONSTRAINT chk_solicitud_fechas CHECK (fecha_tentativa >= fecha_solicitud)
);
INSERT INTO usuario (nombre, correo, rol, nivel_educativo) VALUES
('Valeria Hernández', 'valeria@hernandez.com', 'Administradora de sistemas', 'Licenciatura'),  
('Ramiro Ramírez',    'ramiro@ramirez.com',    'Programador',                'Licenciatura'),  
('Juan Abdul',        'juan@abdul.com',        'Profesor de matemáticas',    'Maestría'),      
('Jason Gómez',       'jason@gomez.com',       'Chef',                       'Bachillerato'),  
('Juan Ramírez',      'juan@ramirez.com',      'Físico',                     'Doctorado'),     
('Max',               'max@correo.com',        'Estudiante',                 'Licenciatura'),  
('Carlos Ruiz',       'carlos@ruiz.com',       'Soporte técnico',            'Licenciatura');  
 
INSERT INTO usuario_regular (id_usuario, creditos) VALUES
(2, 12), (3, 6), (4, 3), (5, 9), (6, 8);
 
INSERT INTO usuario_administrador (id_usuario, puesto) VALUES
(1, 'Administradora'),
(7, 'Soporte');
 
INSERT INTO habilidades (nombre) VALUES
('Programación'),     
('Matemáticas'),      
('Física cuántica'),  
('Álgebra lineal'),   
('Cocina'),           
('Mecánica clásica'); 
 
INSERT INTO usuarios_habilidades (id_habilidad, id_usuario) VALUES
(1, 2), (2, 3), (4, 3), (5, 4), (3, 5), (2, 5), (4, 5), (6, 5), (1, 6);
 
INSERT INTO servicios (valor_en_horas, estatus, descripcion, id_usuario) VALUES
(1, TRUE,  'Asesoría de programación en Java y bases de datos',  2),  
(1, TRUE,  'Clases de regularización de matemáticas',            3),  
(2, TRUE,  'Taller de cocina mexicana básica',                   4),  
(1, TRUE,  'Introducción a la física cuántica',                  5),  
(2, TRUE,  'Clases de álgebra lineal',                           3),  
(3, FALSE, 'Asesoría de mecánica clásica (publicación pausada)', 5);  
 
INSERT INTO solicitud (fecha_solicitud, fecha_tentativa, estado, id_servicio, id_usuario) VALUES
('2026-10-03', '2026-10-10', 'Completada', 1, 6),  
('2026-10-04', '2026-10-12', 'Pendiente',  2, 2),  
('2026-10-05', '2026-10-15', 'Aceptada',   3, 5),  
('2026-10-06', '2026-10-14', 'Rechazada',  4, 4),  
('2026-10-07', '2026-10-20', 'Cancelada',  5, 6),  
('2026-10-08', '2026-10-22', 'Pendiente',  1, 4);  
SELECT id_servicio, descripcion, valor_en_horas
FROM servicios
WHERE estatus = TRUE
ORDER BY valor_en_horas, id_servicio;
 
SELECT id_usuario, creditos
FROM usuario_regular
WHERE creditos >= 6
ORDER BY creditos DESC;
 
SELECT estado, COUNT(*) AS total_solicitudes
FROM solicitud
GROUP BY estado
ORDER BY total_solicitudes DESC;
SELECT s.id_servicio, s.descripcion, s.valor_en_horas, u.nombre AS ofrecido_por
FROM servicios s
INNER JOIN usuario u ON u.id_usuario = s.id_usuario
ORDER BY u.nombre;

SELECT sol.id_solicitud, sol.fecha_solicitud, sol.estado,
       solicitante.nombre AS solicitante,
       sv.descripcion     AS servicio,
       sv.valor_en_horas  AS horas,
       oferente.nombre    AS oferente
FROM solicitud sol
INNER JOIN usuario  solicitante ON solicitante.id_usuario = sol.id_usuario
INNER JOIN servicios sv         ON sv.id_servicio         = sol.id_servicio
INNER JOIN usuario  oferente    ON oferente.id_usuario    = sv.id_usuario
ORDER BY sol.fecha_solicitud;

SELECT u.nombre, h.nombre AS habilidad
FROM usuario u
INNER JOIN usuarios_habilidades uh ON uh.id_usuario   = u.id_usuario
INNER JOIN habilidades h           ON h.id_habilidad  = uh.id_habilidad
ORDER BY u.nombre, h.nombre;

DELIMITER $$

CREATE PROCEDURE sp_solicitar_servicio(
    IN p_id_usuario      INT,
    IN p_id_servicio     INT,
    IN p_fecha_tentativa DATE
)
BEGIN
    DECLARE v_costo     INT;
    DECLARE v_oferente  INT;
    DECLARE v_activo    BOOLEAN;
    DECLARE v_creditos  INT;
 
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;
 
    START TRANSACTION;
 
    SELECT valor_en_horas, id_usuario, estatus
      INTO v_costo, v_oferente, v_activo
      FROM servicios
     WHERE id_servicio = p_id_servicio
       FOR UPDATE;
 
    IF v_costo IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El servicio no existe';
    END IF;
    IF v_activo = FALSE THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El servicio está inactivo';
    END IF;
    IF v_oferente = p_id_usuario THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No puedes solicitar tu propio servicio';
    END IF;
    IF p_fecha_tentativa < CURDATE() THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La fecha tentativa no puede ser pasada';
    END IF;
 
    SELECT creditos INTO v_creditos
      FROM usuario_regular
     WHERE id_usuario = p_id_usuario
       FOR UPDATE;
 
    IF v_creditos IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El usuario no existe o no es usuario regular';
    END IF;
    IF v_creditos < v_costo THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Créditos insuficientes';      
    END IF;
 
    UPDATE usuario_regular
       SET creditos = creditos - v_costo                                         
     WHERE id_usuario = p_id_usuario;
 
    INSERT INTO solicitud (fecha_solicitud, fecha_tentativa, estado, id_servicio, id_usuario)
    VALUES (CURDATE(), p_fecha_tentativa, 'Pendiente', p_id_servicio, p_id_usuario);
 
    COMMIT;
 
    SELECT LAST_INSERT_ID() AS id_solicitud,
           'Solicitud creada, créditos retenidos' AS mensaje;
END$$

CREATE PROCEDURE sp_resolver_solicitud(
    IN p_id_solicitud INT,
    IN p_nuevo_estado VARCHAR(15)
)
BEGIN
    DECLARE v_estado      VARCHAR(15);
    DECLARE v_solicitante INT;
    DECLARE v_oferente    INT;
    DECLARE v_costo       INT;
 
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        RESIGNAL;
    END;
 
    START TRANSACTION;
 
    SELECT sol.estado, sol.id_usuario, sv.id_usuario, sv.valor_en_horas
      INTO v_estado, v_solicitante, v_oferente, v_costo
      FROM solicitud sol
     INNER JOIN servicios sv ON sv.id_servicio = sol.id_servicio
     WHERE sol.id_solicitud = p_id_solicitud
       FOR UPDATE;
 
    IF v_estado IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'La solicitud no existe';
    END IF;
 
    IF p_nuevo_estado = 'Aceptada' THEN
        IF v_estado <> 'Pendiente' THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Solo se aceptan solicitudes pendientes';
        END IF;
 
    ELSEIF p_nuevo_estado IN ('Rechazada', 'Cancelada') THEN
        IF v_estado <> 'Pendiente' THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Solo se pueden rechazar/cancelar solicitudes pendientes';
        END IF;
        UPDATE usuario_regular                                                   
           SET creditos = creditos + v_costo
         WHERE id_usuario = v_solicitante;
 
    ELSEIF p_nuevo_estado = 'Completada' THEN
        IF v_estado <> 'Aceptada' THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Solo se completan solicitudes aceptadas';
        END IF;
        UPDATE usuario_regular                                                 
           SET creditos = creditos + v_costo
         WHERE id_usuario = v_oferente;
 
    ELSE
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Estado no válido';
    END IF;
 
    UPDATE solicitud SET estado = p_nuevo_estado WHERE id_solicitud = p_id_solicitud;
 
    COMMIT;
 
    SELECT p_id_solicitud AS id_solicitud, p_nuevo_estado AS nuevo_estado;
END$$
 
DELIMITER ;

CALL sp_solicitar_servicio(5, 3, '2026-12-01');          
CALL sp_resolver_solicitud(7, 'Aceptada');
CALL sp_resolver_solicitud(7, 'Completada');           
 
SELECT * FROM usuario_regular;                       
 

 
