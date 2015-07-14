<?php
frete_correios();
function frete_correios()
{
  
   $cepDestination = $_GET['cepDestination'];
   $weight = $_GET['weight'];
   
   $cepOrigin = '37540000';// CEP DE QUEM ESTÁ ENVIANDO (LOJA - SE VC QUISER PODE PUXAR DO BANCO DE DADOS)

   /*
    * TIPOS DE FRETE
    *
         41106 = PAC sem contrato
         40010 = SEDEX sem contrato
         40045 = SEDEX a Cobrar, sem contrato
         40215 = SEDEX 10, sem contrato
         40290 = SEDEX Hoje, sem contrato
         40096 = SEDEX com contrato
         40436 = SEDEX com contrato
         40444 = SEDEX com contrato
         81019 = e-SEDEX, com contrato
         41068 = PAC com contrato
    *
    *
    */
 
   // ESTE ARRAYS PARA O RETORNO (NO MEU CASO SÓ QUERO MOSTRAR ESTES)
   $rotulo = array('41106'=>'PAC','40010'=>'SEDEX');
 
   //$webservice = 'http://shopping.correios.com.br/wbm/shopping/script/CalcPrecoPrazo.asmx?WSDL';// URL ANTIGA
   $webservice = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?WSDL';
 
   // TORNA EM OBJETO AS VARIAVEIS
   $parms = new stdClass;
   $parms->nCdServico = '41106,40010';// PAC, SEDEX E ESEDEX (TODOS COM CONTRATO) - se vc precisar de mais tipos adicione aqui
   $parms->nCdEmpresa = '';// <- LOGIN DO CADASTRO NO CORREIOS (OPCIONAL)
   $parms->sDsSenha = '';// <- SENHA DO CADASTRO NO CORREIOS (OPCIONAL)
   $parms->StrRetorno = 'xml';
 
   // DADOS DINAMICOS
   $parms->sCepDestino = $cepDestination;// CEP CLIENTE
   $parms->sCepOrigem = $cepOrigin;// CEP DA LOJA (BD)
   $parms->nVlPeso = $weight;
 
   // VALORES MINIMOS DO PAC (SE VC PRECISAR ESPECIFICAR OUTROS FAÇA ISSO AQUI)
   $parms->nVlComprimento = '18';
   $parms->nVlDiametro = 5;
   $parms->nVlAltura = 2;
   $parms->nVlLargura = 11;
 
   // OUTROS OBRIGATORIOS (MESMO VAZIO)
   $parms->nCdFormato = 1;
   $parms->sCdMaoPropria = 'N';
   $parms->nVlValorDeclarado = 0;
   $parms->sCdAvisoRecebimento = 'N';
 
   // Inicializa o cliente SOAP
   $soap = @new SoapClient($webservice, array(
           'trace' => true,
           'exceptions' => true,
           'compression' => SOAP_COMPRESSION_ACCEPT | SOAP_COMPRESSION_GZIP,
           'connection_timeout' => 1000
   ));
 
   // Resgata o valor calculado
   $resposta = $soap->CalcPrecoPrazo($parms);
   $objeto = $resposta->CalcPrecoPrazoResult->Servicos->cServico;

   $array = array();
   foreach($objeto as $obj)
   {
      $tipo = isset($rotulo[$obj->Codigo]) ? strtolower($rotulo[$obj->Codigo]) : '';
      if($tipo!='')
      {
         $array[$tipo] = array('tipo'=>strtoupper($tipo),'valor'=>str_replace(',','.',$obj->Valor),'prazo'=>$obj->PrazoEntrega,'erro'=>$obj->Erro,'msg'=>$obj->MsgErro);
      }
   }
 
  $json = json_encode($array);
  echo $json;

}
?>