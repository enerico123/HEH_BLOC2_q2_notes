<?php
//Affichage d'une vignette
function print_figure($figure) {
	echo '<figure',(!empty($figure->ilike))?' class="ilike"':'','>';
	echo '<div class="media"><img src="img/',$figure->file,'" alt="',$figure->file,'">';
	echo '<div class="heart">♥</div></div>';
	if (!empty($figure->name)) 
	echo '<figcaption><h4>',$figure->name,'</h4></figcaption>';
	echo '<div class="tools"><span>',$figure->likes,' ♥</span><span class="btn-comment" data-id="',$figure->id_bg,'">💬</span></div>';
	echo '</figure>';
	
}

// Un hachage bien salé
function home_hash($password) {
	return hash('sha256', 'Xz-7à:'.$password.':kL5m-') ;
}
