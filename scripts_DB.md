# Script Base de datos

-- Database: apiSimulador

-- DROP DATABASE "apiSimulador";

CREATE DATABASE "apiSimulador
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Spain.1252'
    LC_CTYPE = 'Spanish_Spain.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

# Script Tabla

-- Table: public.simuladores

-- DROP TABLE public.simuladores;

CREATE TABLE public.simuladores
(
    id smallint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 32767 CACHE 1 ),
    url text COLLATE pg_catalog."default" NOT NULL,
    nombre text COLLATE pg_catalog."default" NOT NULL,
    descripcion text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT simuladores_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.simuladores
    OWNER to postgres;