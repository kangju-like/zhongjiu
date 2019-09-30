<?php   
   
    $phone = $_GET["phone"];
    $password =$_GET["password"];
 
# 003-先连接数据库
$db = mysqli_connect("localhost","root","","zhongjiu");
$select= "SELECT * FROM user where phone =  '$phone'";
$result = mysqli_query($db,$select);
// var_dump($result);
$rows = mysqli_num_rows($result);
if($rows == "0"){
//    $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
$sql = "INSERT INTO `user` (`id`, `phone`, `password`) VALUES (NULL,'$phone', '$password')";
  mysqli_query($db, $sql);
  echo "true";
 }else{
   echo("该用户已注册！");
}



?>