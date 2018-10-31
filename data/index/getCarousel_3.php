<?php
/**
 * Created by PhpStorm.
 * User: web-01
 * Date: 2018/7/14
 * Time: 8:48
 */
require_once("../init.php");
$sql="select * from ln_index_carousel_3";
$result=mysqli_query($conn,$sql);
echo json_encode(mysqli_fetch_all($result,1));