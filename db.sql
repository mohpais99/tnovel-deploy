CREATE TABLE novels
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 1000000 CACHE 1 ),
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    othername character varying(255) COLLATE pg_catalog."default",
    slug character varying(255) COLLATE pg_catalog."default",
    author character varying(255) COLLATE pg_catalog."default" NOT NULL,
    synopsis text COLLATE pg_catalog."default" NOT NULL,
    type character varying(255) COLLATE pg_catalog."default" NOT NULL,
    poster text COLLATE pg_catalog."default",
    status text COLLATE pg_catalog."default",
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    language character varying(20) COLLATE pg_catalog."default",
    year character varying(6) COLLATE pg_catalog."default",
    genre character varying[] COLLATE pg_catalog."default",
    CONSTRAINT novels_pkey PRIMARY KEY (id),
    CONSTRAINT novels_title_unique UNIQUE (name),
    CONSTRAINT novels_status_check CHECK (status = ANY (ARRAY['Ongoing'::text, 'Completed'::text]))
);

CREATE TABLE chapters
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 1000000 CACHE 1 ),
    novel_id smallint NOT NULL,
    title character varying(255) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
    published_by character varying(50) COLLATE pg_catalog."default",
    chapter smallint NOT NULL,
    publish smallint,
    slug character varying(255) COLLATE pg_catalog."default",
    published_at timestamp with time zone
);

CREATE TABLE genres
(
    id smallint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 32767 CACHE 1 ),
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT genres_pkey PRIMARY KEY (id),
    CONSTRAINT genres_name_unique UNIQUE (name)
);