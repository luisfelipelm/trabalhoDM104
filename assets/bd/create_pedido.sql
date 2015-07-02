CREATE TABLE `pedido` (
`valor` DOUBLE( 10,2 ) NOT NULL ,
`quantidade` INT( 200 ) NOT NULL ,
`id_produto` INT( 200 ) NOT NULL ,
`id_cliente` INT( 200 ) NOT NULL ,
`id` INT( 200 ) AUTO_INCREMENT ,
UNIQUE (
`id`
)
);