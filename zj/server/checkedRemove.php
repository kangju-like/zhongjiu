<?php
$arr=json_decode($_GET["ids"]);
$db = mysqli_connect("localhost","root","","zhongjiu");
for($i = 0;$i<count($arr);$i++)
{
    $up=" DELETE FROM car where sid = $arr[$i]";
    mysqli_query($db,$up);
}

echo $arr


?>