<?php   
    $sid = $_GET["sid"];
    $name = $_GET["name"];
    $price =$_GET["price"];
    $num = $_GET["num"];
    $img = $_GET["img"];
# 003-先连接数据库
$db = mysqli_connect("localhost","root","","zhongjiu");
$select= "SELECT * FROM car where sid = '$sid'";
$result = mysqli_query($db,$select);
// print_r("+++");

$rows = mysqli_num_rows($result);

if($rows == "0"){
    // echo $rows;

$sql = "INSERT INTO `car` (`id`, `sid`, `name`, `price`, `num`, `img`)
VALUES (NULL,'$sid', '$name', '$price', '$num', '$img');";
echo $sql;
  mysqli_query($db, $sql);
 }else{
     echo "11111";
    $up=" UPDATE car SET num = num + $num WHERE sid = $sid ";
    mysqli_query($db, $up);
}


// $result = mysqli_query($db,$select);
//   $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
//   $response = array("status"=>"success","res" => $data);
//   echo json_encode($response,true);
?>