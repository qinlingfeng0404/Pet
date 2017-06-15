<?php
error_reporting(0);
$conn = mysql_connect('localhost', 'root', 'root') or dir('Connect error');
mysql_select_db('pet', $conn) or die('DB error');
$sql = "select * from user";  //select * from 你自己创建的表名
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
    $pas = $_GET['pas'];
    $sjh = $_GET['sjh'];
    $yx = $_GET['yx'];

    $sql = "insert into user (`name`,`pas`,`sjh`,`yx`) values ('{$name}','{$pas}', '{$sjh}','{$yx}')";
    mysql_query($sql);
    echo $name;
    echo $pas;
    echo $sjh;
    echo $yx;
    echo $sql;
    break;
  case 'del':
    $id = $_GET['id'];
    $sql = "delete from user where id={$id}";
    echo $sql;
    mysql_query($sql);
}



















?>

