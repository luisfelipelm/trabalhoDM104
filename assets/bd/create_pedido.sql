CREATE TABLE `trabalhodm104`.`pedido` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `produto_id` INT NOT NULL,
  `cliente_id` INT NOT NULL,
  `quantidade` INT NOT NULL,
  `valor_total` DECIMAL NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `produto_fk_idx` (`produto_id` ASC),
  INDEX `cliente_fk_idx` (`cliente_id` ASC),
  CONSTRAINT `produto_fk`
    FOREIGN KEY (`produto_id`)
    REFERENCES `trabalhodm104`.`produtos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `cliente_fk`
    FOREIGN KEY (`cliente_id`)
    REFERENCES `trabalhodm104`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
