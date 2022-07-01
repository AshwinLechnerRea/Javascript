<?php
	define('mapje', './images/');
	
	if (is_dir(mapje)){
		if ($dh = opendir(mapje)){
		while (($file = readdir($dh))){
			if ($file != '..' && $file != '.'){
				echo '<img src="'.mapje.$file.'" alt="'.$file.'" width="240">';
			}
		}
		closedir($dh);
		}
	}

?>