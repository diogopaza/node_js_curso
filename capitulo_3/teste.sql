CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "douglas costa",
    "dd@gmail.com.br",
    80
);

DELETE from usuarios WHERE nome="diogo";

UPDATE usuarios SET nome="ggNovo" WHERE nome="gg";