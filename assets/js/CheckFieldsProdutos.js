CheckFieldsProdutos = {
 
    validaCampo: function(){
        if(document.cadastroProduto.produto.value=="")
        {
            alert("O Campo produto é obrigatório!");
            return false;
        }
        else if(document.cadastroProduto.descricao.value=="")
        {
            alert("O Campo descricao é obrigatório!");
            return false;
        }
        else if(document.cadastroProduto.valor.value=="")
        {
            alert("O Campo valor é obrigatório!");
            return false;
        }
        else if(document.cadastroProduto.altura.value=="")
        {
            alert("O Campo altura é obrigatório!");
            return false;
        }
        else if(document.cadastroProduto.largura.value=="")
        {
            alert("O Campo largura é obrigatório!");
            return false;
        }
        else if(document.cadastroProduto.comprimento.value=="")
        {
            alert("O Campo comprimento é obrigatório!");
            return false;
        }
        else if(document.cadastroProduto.peso.value=="")
        {
            alert("O Campo peso é obrigatório!");
            return false;
        }
        else if(document.cadastroProduto.quantidade.value=="")
        {
            alert("O Campo quantidade é obrigatório!");
            return false;
        }
        else
            return true;
    }
}