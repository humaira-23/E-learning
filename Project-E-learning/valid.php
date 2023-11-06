<?php
$username=$_GET["username"];
$password=$_GET["password"];
$db=mysqli_connect("localhost","root","","login");
if(!$db)
{
echo"UNABLE TO CONNECT";
exit();
}
mysqli_select_db($db,"login");
$sql="select*from users";
$result=mysqli_query($db,$sql);
while($row=mysqli_fetch_array($result,MYSQLI_BOTH))
{
	$user=$row['username'];
	$pass=$row['password'];
}
if (($user==$username)&&($pass==$password))
{
echo"Welcome!!";
}
else
{
	echo"You need to Sign-up";
}
?> 
