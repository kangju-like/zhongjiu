<?php
    $sid = $_GET["sid"];
    
    $num = $_GET["num"];
  
$db = mysqli_connect("localhost","root","","zhongjiu");
$select= "SELECT * FROM car where sid = $sid ";
$result = mysqli_query($db,$select);

    $up=" UPDATE car SET num = $num WHERE sid = $sid ";
    mysqli_query($db,$up);
    
   
    $sql = "SELECT * FROM car";
$res = mysqli_query($db,$sql);



$data = mysqli_fetch_all($res,MYSQLI_ASSOC);
$response = array("status"=>"success","res" => $data);
echo json_encode($response,true);
?>