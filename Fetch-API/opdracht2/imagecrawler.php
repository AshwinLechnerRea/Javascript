<?php
	define('mapje', './images/');
	
	if (is_dir(mapje)){
		if ($dh = opendir(mapje)){
		while (($file = readdir($dh))){
			if ($file != '..' && $file != '.'){
				$x = substr($file, 0, strrpos($file, '.'));
				$x = str_replace('-',' ',$x);
				echo '<img src="'.mapje.$file.'" alt="'.ucfirst($x).'" width="240">';
			}
		}
		closedir($dh);
		}
	}

?>