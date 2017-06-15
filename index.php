<?php
error_reporting(0);
$conn = mysql_connect('localhost', 'root', 'root') or dir('Connect error');
mysql_select_db('pet', $conn) or die('DB error');
$sql = "select * from pets";  //select * from 你自己创建的表名
mysql_query('set names utf8');
$query = mysql_query($sql);

$get = $_GET['act'];
switch ($get) {
  case 'list':
    while($res = mysql_fetch_assoc($query)) {
      $arr[] = $res;
    }
    echo json_encode($arr);
    break;
  case 'add':
    $name = $_GET['name'];
    $petname = $_GET['petname'];
    $describe = $_GET['describe'];

    $sql = "insert into pets (`name`,`petname`,`describe`) values ('{$name}','{$petname}','{$describe}')";
    mysql_query($sql);  
    break;
  case 'del':
    $id = $_GET['id'];
    $sql = "delete from pets where id={$id}";
    echo $sql;
    mysql_query($sql);
}



















?>

