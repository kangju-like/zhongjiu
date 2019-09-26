<?php

# INSERT INTO `products` (`id`, `src`, `title`, `price`, `disCount`, `shopName`) 
# VALUES (NULL, '0h_4e', '怡鲜来 丹麦进口冰鲜三文鱼刺身拼盘300g 日式刺身2款 新鲜生鱼片 北极贝刺身套餐 海鲜水产', '68.00', '400+评价', '怡鲜来旗舰店');
# 001-先加载JSON数据
$json = file_get_contents("shop.json");
# 002-把JSON数据转换为PHP数组
$arrData = json_decode($json,true);

# Array ( [src] => https://image2.suning.cn/uimg/b2c/newcatentries/0070090031-000000000803018569_1.jpg_400w_400h_4e [title] => 怡鲜来 丹麦进口冰鲜三文鱼刺身拼盘300g 日式刺身2款 新鲜生鱼片 北极贝刺身套餐 海鲜水产 [price] => 78.80 [disCount] => 400+评价 [shopName] => 怡鲜来旗舰店 )
// print_r($arrData);

# 003-先连接数据库
$db = mysqli_connect("localhost","root","","zhongjiu");

# 004-遍历数组获取数组中每个元素
for($i = 0;$i<count($arrData);$i++)
{
  $pimg = $arrData[$i]["pimg"];
  $price = $arrData[$i]["price"];
  $math = $arrData[$i]["math"];
  $pname = $arrData[$i]["pname"];
  $pshop = $arrData[$i]["pshop"];
  $img = $arrData[$i]["imgs"];
    $imgs= implode(",",$img);
echo($imgs);
  $sql = "INSERT INTO `shop` (`id`, `pimg`, `price`, `math`, `pname`, `pshop`,`imgs`) 
VALUES (NULL,jk'$pimg', '$price', $math, '$pname', '$pshop','$imgs');";
  mysqli_query($db, $sql);
}
// print_r($db)
// print_r(floatval(substr($arrData[2]["price"],2)));
// print_r(substr("1234", 1));

?>