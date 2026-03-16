<?php
session_start();
require_once '_connexionBD.php';
require_once '_fonctions.php';

// Réception formulaire de connexion
if (isset($_POST['connexion'])) {
	$mail = trim($_POST['mail']);
	$password = home_hash(trim($_POST['password']));
	$reqConnexion = $bd->prepare('SELECT users.firstname, users.mail, users.id_user FROM users WHERE mail=:mail AND password=:password ORDER BY users.firstname'); 
	$reqConnexion->bindValue(':mail', $mail); 
	$reqConnexion->bindValue(':password', $password); 
	$reqConnexion->execute(); 
	//Connexion réussie
	if ($reqConnexion->rowCount()==1) { 
		$user = $reqConnexion->fetch();
		$_SESSION['id_user'] = $user['id_user'];
		$_SESSION['firstname'] = $user['firstname'];
		$_SESSION['mail'] = $user['mail'];
		header('Location:index.php');
		exit();
	}
	//Connexion échouée
	else {
		$erreur = True;
	}
}
// Réception formulaire de déconnexion
else if (isset($_POST['deconnexion'])) {
	session_destroy();
		header('Location:index.php');
		exit();
}
?><!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="utf8">
	<title>Exercice AJAX</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<header>
		<h1><a href="index.php">AJAX : exercice</a></h1>
	</header>
	<main>
		<?php
		if (empty($_SESSION['id_user'])) {
		?>
		<form action="connexion.php" method="post" autocomplete="off">
			<fieldset>
				<legend>Connexion</legend>
				<!--<input type="email" name="mail" list="mails" autocomplete="off" placeholder="Votre mail" autofocus required><datalist id="mails">
					<?php
					//Dans un vrai site on ne fait JAMAIS ça !
					$req = $bd->prepare('SELECT users.mail FROM users ORDER BY users.firstname'); 
					$req->execute(); 
					$req->setFetchMode(PDO::FETCH_OBJ); 
					while ($user=$req->fetch() ) { 
						echo '<option value="',$user->mail,'"></option>';
					}
					?>
				</datalist>-->
				<select type="email" name="mail" autofocus required>
					<?php
					//Dans un vrai site on ne fait JAMAIS ça !
					$req = $bd->prepare('SELECT mail, firstname FROM users ORDER BY firstname'); 
					$req->execute(); 
					while ($user=$req->fetch() ) { 
						echo '<option value="',$user['mail'],'">',$user['firstname'],'</option>';
					}
					?>
				</select>
				<input type="password" name="password" value="AJAX" autocomplete="off" placeholder="Le mot de passe est AJAX" required>
				
				<input type="submit" name="connexion" value="Connexion">
				<?php
				if (isset($erreur)) echo '<p class="red">Manifestement, vous avez foiré votre connexion...</p>';
				?>
			</fieldset>
		</form>
		<?php
		}	else {
		?>
		<form action="connexion.php" method="post">
			<fieldset>
				<legend>Déconnexion</legend>
				<input type="submit" name="deconnexion" value="Déconnexion">
			</fieldset>
		</form>
		<?php
		}
		?>
	</main>
	<footer>
		<p>Exercice AJAX de Technologies web 1, IFG3</p>
	</footer>
</body>
</html>