CREATE TABLE `produtos` (
`produto` VARCHAR( 60 ) NOT NULL ,
`descricao` VARCHAR( 60 ) NOT NULL ,
`valor` DOUBLE( 10,2 ) NOT NULL ,
`altura` DOUBLE(10,2) ,
`largura` DOUBLE(10,2) ,
`comprimento` DOUBLE(10,2) NOT NULL ,
`peso` DOUBLE( 10,2 ) NOT NULL ,
`quantidade` INT( 10 ) NOT NULL ,
`id` INT( 200 ) AUTO_INCREMENT ,
UNIQUE (
`id`
)
);
INSERT INTO`produtos` (`produto`, `descricao`, `valor`, `altura`, `largura`, `comprimento`, `peso`, `quantidade`) VALUES ('Produto 1', 'Produto 1 Description', '40', '1', '1', '1', '1', '1');
INSERT INTO`produtos` (`produto`, `descricao`, `valor`, `altura`, `largura`, `comprimento`, `peso`, `quantidade`) VALUES ('Produto 2', 'Produto 2 Description', '54', '1', '1', '1', '1', '1');
INSERT INTO`produtos` (`produto`, `descricao`, `valor`, `altura`, `largura`, `comprimento`, `peso`, `quantidade`) VALUES ('Produto 3', 'Produto 3 Description', '34', '1', '1', '1', '1', '1');
INSERT INTO`produtos` (`produto`, `descricao`, `valor`, `altura`, `largura`, `comprimento`, `peso`, `quantidade`) VALUES ('Produto 4', 'Produto 4 Description', '3', '1', '1', '1', '1', '1');
INSERT INTO`produtos` (`produto`, `descricao`, `valor`, `altura`, `largura`, `comprimento`, `peso`, `quantidade`) VALUES ('Produto 5', 'Produto 6 Description', '354', '1', '1', '1', '1', '1');

