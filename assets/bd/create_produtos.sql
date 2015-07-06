CREATE TABLE `produtos` (
`produto` VARCHAR( 60 ) NOT NULL ,
`descricao` VARCHAR( 60 ) NOT NULL ,
`valor` DOUBLE( 10,2 ) NOT NULL ,
`altura` INT( 10 ) ,
`largura` INT( 10 ) ,
`comprimento` INT( 10 ) NOT NULL ,
`peso` INT( 10 ) NOT NULL ,
`quantidade` INT( 10 ) NOT NULL ,
`id` INT( 200 ) AUTO_INCREMENT ,
UNIQUE (
`id`
)
);
INSERT INTO`produtos` (`produto`, `descricao`, `valor`, `altura`, `largura`, `comprimento`, `peso`, `quantidade`) VALUES ('Produto 1', 'Produto 5 Description', '40', '1', '1', '1', '1', '1');
INSERT INTO`produtos` (`produto`, `descricao`, `valor`, `altura`, `largura`, `comprimento`, `peso`, `quantidade`) VALUES ('Produto 2', 'Produto 5 Description', '54', '1', '1', '1', '1', '1');
INSERT INTO`produtos` (`produto`, `descricao`, `valor`, `altura`, `largura`, `comprimento`, `peso`, `quantidade`) VALUES ('Produto 3', 'Produto 5 Description', '34', '1', '1', '1', '1', '1');
INSERT INTO`produtos` (`produto`, `descricao`, `valor`, `altura`, `largura`, `comprimento`, `peso`, `quantidade`) VALUES ('Produto 4', 'Produto 5 Description', '3', '1', '1', '1', '1', '1');
INSERT INTO`produtos` (`produto`, `descricao`, `valor`, `altura`, `largura`, `comprimento`, `peso`, `quantidade`) VALUES ('Produto 5', 'Produto 5 Description', '354', '1', '1', '1', '1', '1');

