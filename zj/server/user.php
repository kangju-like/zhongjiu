
<?php

$phone = $_REQUEST["phone"];
$password =$_REQUEST["password"];

# 002 连接数据库
$db = mysql_connect("localhost","root","","zhongjiu");

# 003 查询数据库中是否存在该用户名，如果存在那么再检查密码是否正确
// $sql = "SELECT * FROM user where phone = '$phone'";
// $result = mysqli_query($db, $sql);
// print_r ($result;)
// $data = array("status" => "error", "data" => array("msg" => "false"));

// if(mysqli_num_rows($result) == "1")
// {
//   $dataT = mysqli_fetch_all($result, MYSQLI_ASSOC);
//   if($password == $dataT[0]["password"])
//   {
//     # 登录成功
//     $data["status"]="success";
//     $data["data"]["msg"] = "true";
//     echo json_encode($data, true);
//   }else
//   {
//     # 登录失败 密码不正确
//     $data["status"] = "error";
//     $data["data"]["msg"] = "false";
//     echo json_encode($data, true);
//   }
//   // print_r($data[0]["password"]);
//   // print_r($data);
// }else
// {
//   # 登录失败：该用户不存在！
//   $data["status"] = "error";
//   $data["data"]["msg"] = "false";
//   echo json_encode($data, true);
// }

?>