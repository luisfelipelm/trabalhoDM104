CREATE TABLE `clientes` (
`nome` VARCHAR( 60 ) NOT NULL ,
`email` VARCHAR( 60 ) NOT NULL ,
`sexo` VARCHAR( 10 ) NOT NULL ,
`ddd` INT( 2 ) ,
`telefone` INT( 8 ) ,
`endereco` VARCHAR( 70 ) NOT NULL ,
`cidade` VARCHAR( 20 ) NOT NULL ,
`estado` VARCHAR( 2 ) NOT NULL ,
`bairro` VARCHAR( 20 ) NOT NULL ,
`pais` VARCHAR( 20 ) NOT NULL ,
`login` VARCHAR( 12 ) NOT NULL ,
`senha` VARCHAR( 12 ) NOT NULL ,
`news` VARCHAR( 8 ) ,
`id` INT( 200 ) AUTO_INCREMENT ,
UNIQUE (
`id`
)
);

INSERT INTO `pos_geral`.`clientes`
(`nome`,
`email`,
`sexo`,
`ddd`,
`telefone`,
`endereco`,
`cidade`,
`estado`,
`bairro`,
`pais`,
`login`,
`senha`,
`news`)
VALUES
('Luis Felipe',
'luisfelipelmtc@gmail.com',
'Masculino',
35,
12435768,
'Rua rua',
'Tres Corações',
'MG',
'bairo',
'pais',
'luisfelipelm',
'a',
'ATIVO');


INSERT INTO `pos_geral`.`clientes`
(`nome`,
`email`,
`sexo`,
`ddd`,
`telefone`,
`endereco`,
`cidade`,
`estado`,
`bairro`,
`pais`,
`login`,
`senha`,
`news`)
VALUES
('admin',
'admin@gmail.com',
'Masculino',
35,
12435768,
'Rua rua',
'Tres Corações',
'MG',
'bairo',
'pais',
'admin',
'admin',
'ATIVO');
