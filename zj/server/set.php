<?php
$db = mysqli_connect("127.0.0.1", "root", "", "zhongjiu");
// $page = $_REQUEST["page"] * 20;  //0（0-20） 1（20-40） 2 3 4
// $type = $_REQUEST["type"];
# 002-查询数据库得到所有的产品
// if($type == 0){
//   $sql = "SELECT * FROM products limit $page , 20";
// }elseif($type ==1)
// {
//   $sql = "SELECT * FROM products  ORDER BY `products`.`price` DESC limit $page , 20";
// }elseif($type == 2)
// {
//   $sql = "SELECT * FROM products  ORDER BY `products`.`price` ASC limit $page , 20";
// }
$sql = "SELECT * FROM shop where sid='927'";
$result = mysqli_query($db,$sql);

# 003-把数据转换为JSON数据返回
// print_r($result);
// MYSQLI_ASSOC  MYSQLI_NUM
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
print_r($data);
$response = array("status"=>"success","res" => $data);
echo json_encode($response,true);
?>  