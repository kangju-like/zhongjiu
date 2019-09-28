<?php
    $urs = $_GET["url"];
   
    $db = mysqli_connect("127.0.0.1", "root", "", "zhongjiu");
    $sql = "SELECT * FROM shop where sid = $urs";
$result = mysqli_query($db,$sql);



$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
$response = array("status"=>"success","res" => $data);
echo json_encode($response,true);


?>