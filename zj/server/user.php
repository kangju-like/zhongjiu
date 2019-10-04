<?php

$phone = $_GET["phone"];
$password =$_GET["password"];

# 002 连接数据库
$db = mysqli_connect("localhost","root","","zhongjiu");
$sql ="SELECT * FROM user where phone = '$phone'";
$p= "SELECT phone FROM user where phone = '$phone'";
$s= "SELECT password FROM user where phone = '$phone'";
mysqli_query($db, $p);
mysqli_query($db, $s);
$result = mysqli_query($db,$sql);
$rows = mysqli_num_rows($result);
if($rows != 0){
    if($phone == $p){
        echo "true";
    }else{
        echo "true";
    }
}

?>