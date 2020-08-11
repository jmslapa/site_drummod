<?php
function pegaValor($valor) {
    return isset($_POST[$valor]) ? $_POST[$valor] : '';
}

$para = "contato@drummondpar.com";
$nome = pegaValor("nome");
$telefone = pegaValor("telefone");
$de = pegaValor("email");
$mensagem = pegaValor("mensagem");
$assunto = "Formulário de contato";

  require_once '../vendor/autoload.php';

  // Create the Transport
  $transport = (new Swift_SmtpTransport('smtp.drummondpar.com', 587))
    ->setUsername('naoresponda@drummondpar.com')
    ->setPassword('2019@braavos')
  ;

  // Create the Mailer using your created Transport
  $mailer = new Swift_Mailer($transport);

  // Create a message
  $message = (new Swift_Message($assunto))
    ->setFrom(['naoresponda@drummondpar.com' => 'Drummond'])
    ->setTo([$para => 'Contato Drummond'])
    ->setBody('<b>De:</b> '.$de.'<br/><b>Nome:</b> '.$nome.'<br/><b>Telefone:</b> '.$telefone.'<br/><b>Mensagem:</b><br/>'.$mensagem, 'text/html');
  // Send the message
  $result = $mailer->send($message);
  print(json_encode(['status' =>   $result]));

?>
