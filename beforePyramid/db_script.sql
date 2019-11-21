-- Table: questions

-- DROP TABLE questions;

CREATE TABLE questions
(
  id serial NOT NULL,
  title character varying(500) NOT NULL,
  CONSTRAINT questions_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE questions
  OWNER TO postgres;
