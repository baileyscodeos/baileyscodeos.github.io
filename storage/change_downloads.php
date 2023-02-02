<?php
$target_dir = "";
$target_file = $target_dir . basename("downloads.dat");
$uploadOk = 1;
$actual_url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$url_components = parse_url($actual_url);
parse_str($url_components['query'], $params);
unlink($target_file);
if (file_exists($target_file)) {
  echo "Sorry, file already exists.";
  $uploadOk = 0;
}
if ($uploadOk == 0) {
  echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
  $downloadsfile = fopen($target_file, "w");
  $txt = $params["num"];
  fwrite($downloadsfile, $txt);
  fclose($downloadsfile);
  echo "Done";
}
?>