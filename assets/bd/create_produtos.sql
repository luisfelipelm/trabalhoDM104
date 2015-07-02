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