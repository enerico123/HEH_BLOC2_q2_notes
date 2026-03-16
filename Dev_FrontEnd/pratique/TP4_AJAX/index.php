<?php
session_start();
require_once '_connexionBD.php';
require_once '_fonctions.php';

?><!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="utf8">
	<title>Exercice AJAX</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<header>
		<h1><a href="connexion.php">Backgrounds</a></h1>
		<p>Bonjour <?= (empty($_SESSION['firstname']))?'visiteur':$_SESSION['firstname'] ?>, admirez et likez nos fonds d'écran pour smartphones.</p>
	</header>
	<main>
		<div class="flex">
			<?php
			// Chargement des images avec nb de likes et le like de l'utilisateur (ilike)
			$reqFigure = $bd->prepare('SELECT bg.*, COUNT(likes.id_user) AS likes, ilikes.id_user AS ilike
				FROM backgrounds AS bg 
				LEFT JOIN likes ON (likes.id_bg=bg.id_bg)
				LEFT JOIN likes AS ilikes ON (ilikes.id_bg=bg.id_bg AND ilikes.id_user=:id_user)
				GROUP BY bg.id_bg
				ORDER BY  bg.id_bg ASC
				/*LIMIT 24*/'); 
			$id_user = $_SESSION['id_user'] ?? 0;
			$reqFigure->bindValue(':id_user',$id_user); 
			$reqFigure->execute(); 
			$reqFigure->setFetchMode(PDO::FETCH_OBJ); 
			while ($figure=$reqFigure->fetch() ) { 
				print_figure($figure);
			}
			?>
			<div id="scroll_infini" class=""></div>
		</div>
	</main>
	<footer>
		<p>Exercice AJAX de Technologies web 1, IFG3</p>
		<p>Images pompées sur Pinterest</p>
	</footer>
	<script>
		document.addEventListener('click', (e) => {
			if (!e.target.classList.contains('btn-comment')) return;
			
			const id = e.target.dataset.id;
			console.log('id =', id);
		});
	</script>
</body>
</html>