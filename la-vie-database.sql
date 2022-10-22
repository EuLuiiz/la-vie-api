CREATE DATABASE la_vie_db;
    
USE la_vie_db;
    
CREATE TABLE psicologos (
	psicologo_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	senha VARCHAR(256) NOT NULL,
	apresentacao VARCHAR(500) NOT NULL,
	createdAt DATETIME  NOT NULL,
	updatedAt DATETIME NOT NULL
);
	
CREATE TABLE pacientes (
	paciente_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(100) NOT NULL,
	email VARCHAR(100) NOT NULL,
	idade DATE NOT NULL,
	createdAt DATETIME  NOT NULL,
	updatedAt DATETIME NOT NULL
);
    
CREATE TABLE atendimentos (
	atendimento_id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	id_do_paciente INTEGER NOT NULL,
	id_do_psicologo INTEGER NOT NULL,
	data_atendimento DATE NOT NULL,
	observacao TEXT NOT NULL,
	createdAt DATETIME  NOT NULL,
	updatedAt DATETIME NOT NULL,
	CONSTRAINT atendimento_paciente FOREIGN KEY (id_do_paciente) REFERENCES pacientes(paciente_id),
	CONSTRAINT atendimento_psicologos FOREIGN KEY (id_do_psicologo) REFERENCES psicologos (psicologo_id)
);