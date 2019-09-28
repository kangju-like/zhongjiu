<?php
    $sid = $_GET["sid"];
    $name = $_GET["name"];
    $price =$_GET["price"];
    $num = $_GET["num"];
    $img = $_GET["img"];
# 003-先连接数据库
$db = mysqli_connect("localhost","root","","zhongjiu");
$select= "SELECT * FROM car where sid = $sid ";
$result = mysqli_query($db,$select);
// print_r($result)
$rows = mysqli_num_rows($result);

if($rows == "0"){
//    $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
$sql = "INSERT INTO `car` (`id`, `sid`, `name`, `price`, `num`, `img`) 
VALUES (NULL,'$sid', '$name', $price, '$num', '$img');";
  mysqli_query($db, $sql);
 }else{
    $up=" UPDATE car SET num = num + $num WHERE sid = $sid ";
    mysqli_query($db, $up);
}


// $result = mysqli_query($db,$select);
//   $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
//   $response = array("status"=>"success","res" => $data);
//   echo json_encode($response,true);
?>