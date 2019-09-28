<?php
# 001-先连接数据库
$db = mysqli_connect("127.0.0.1", "root", "", "zhongjiu");

$sql = "SELECT * FROM car";
$result = mysqli_query($db,$sql);

# 003-把数据转换为JSON数据返回
// print_r($result);
// MYSQLI_ASSOC  MYSQLI_NUM
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
$response = array("status"=>"success","res" => $data);
echo json_encode($response,true);
?>