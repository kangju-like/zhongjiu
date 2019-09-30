<?php
$sid=$_GET["sid"];
$db = mysqli_connect("localhost","root","","zhongjiu");
 $up=" DELETE FROM car WHERE sid = $sid ";
 mysqli_query($db,$up);


 $sql = "SELECT * FROM car";
 $res = mysqli_query($db,$sql);
 
 
 
 $data = mysqli_fetch_all($res,MYSQLI_ASSOC);
 $response = array("status"=>"success","res" => $data);
 echo json_encode($response,true);

?>