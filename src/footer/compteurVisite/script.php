<?php
	$monfichier = fopen('compteur.txt', 'r+');
	 
	$pages_vues = fgets($monfichier); // On lit la première ligne (nombre de pages vues)
	$pages_vues++; // On augmente de 1 ce nombre de pages vues
	fseek($monfichier, 0); // On remet le curseur au début du fichier
	fputs($monfichier, $pages_vues); // On écrit le nouveau nombre de pages vues
	 
	fclose($monfichier);

	echo $json_response = json_encode( $pages_vues );
?>