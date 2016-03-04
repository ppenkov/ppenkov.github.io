<?php

$request = $_POST;
$uploadLocation = "./songs/";
var_dump($request);
//validation
$fields = array ("song_name", "song_artist", "song_description");
foreach($fields as $field) {
	$item = $request[$field];
	if(empty($item))
		die("Error:no '$field' value!");
}

if(empty($_FILES['song_file'])){
	die("Error:no 'song_file' value!");
}

$song_src = $uploadLocation . $_FILES['song_file']['name'];
if (!move_uploaded_file($_FILES['song_file']['tmp_name'], $song_src)) {
	die("Error: file could not be uploaded!");
}

//fetch current data
$storage = file_get_contents("songs.json");
$storage = json_decode($storage, true);

$id = uniqid("song");
$storage[$id] = array (
	"name"=> $request['song_name'],
	"src"=> $song_src,
	"info"=> $request['song_description'],
	"artist"=> $request['song_artist']
);

file_put_contents("songs.json", json_encode($storage));

header("Location: index.html");
die();


