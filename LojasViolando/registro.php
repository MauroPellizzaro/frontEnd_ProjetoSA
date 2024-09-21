<?php
$pdo = new PDO('mysql:host=localhost;dbname=registro', 'root', '');
if (isset($_POST['acao'])) {
    $nome = $_POST['nome'];
    $cpf = $_POST['cpf'];
    $cep = $_POST['cep'];
    $bairro = $_POST['bairro'];
    $endereco = $_POST['endereco'];
    $complemento = $_POST['complemento'];
    $email = $_POST['email'];
    $telefone = $_POST['telefone'];
    $senhapin = $_POST['senhapin'];
    $nascimento = $_POST['nascimento'];
    $sexo = $_POST['sexo'];

    $sql = $pdo->prepare("INSERT INTO `pessoa` values(null,?,?,?,?,?,?,?,?,?,?,?)");

    $sql->execute(array($nome, $cpf, $cep, $bairro, $endereco, $complemento, $email, $telefone, $senhapin, $nascimento, $sexo));


}
?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Registro Violando</title>
    <link rel="icon" href="img/icone.png">
    <link rel="stylesheet" href="css/estilo.css">
</head>

<body>
  <header class="cabecalho">
    <img src="img/imagem1.png" alt="">
    <a href="index.html"><button type="button">Voltar a página inicial</button></a>
  </header>
    <div class="perguntas">
        <ol>
          <form class="" action="registro_pessoas.php" method="post">

            <li><label for="nome">Nome:</label>
             <input type="text" name="nome" required></li>
             <br>
             <li><label for="cpf">CPF:</label>
              <input type="text" name="cpf" required></li>
              <br>
             <li><label for="cep">CEP:</label>
             <input type="text" name="cep" required></li>
             <br>
             <li><label for="bairro">Bairro:</label>
           <input type="text" name="bairro" required></li>
           <br>
               <li><label for="endereco">Endereço:</label>
             <input type="text" name="endereco" required></li>
              <li><label for="complemento">complemento:</label>
            <input type="text" name="complemento" required></li>
            <br>
             <li><label for="email">Email:</label>
            <input type="email" name="email" required></li>
            <br>
             <li><label for="telefone">Telefone:</label>
            <input type="text" name="telefone" required></li>
            <br>
             <li><label for="senhapin">Senha PIN:</label>
            <input type="password" name="senhapin" required></li>
       </ol>
       <br>
       <label for="nascimento">Data de nascimento</label>
         <input type="date" name="nascimento" id="nascimento">
         <br>
         <br>
         <p>Seu sexo:</p>
         <select name="sexo" required>
           <option value="M"> Masculino </option>
           <option value="F"> Feminino </option>
           <option value="outro"> Outro </option>
           <option value="pnd"> Prefiro não dizer </option>
         </select>
           <br>
           <br>
           <input type="submit" name="acao" value="Enviar registro" class="botao">
           </form>
   </div>
   <br>
   <hr>
   <br>
   <footer>
     <div class="rodaper">
     <img src="img/redessociais.png" alt="">
     <p>Qualquer dúvida entre em contato no número 3452-6934, nas redes sociais
       ou venha até a loja mais próxima</p>
     </div>
   </footer>

</body>
</html>
