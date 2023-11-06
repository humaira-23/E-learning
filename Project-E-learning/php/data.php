<?php
$username=$_POST["username"];
$email=$_POST["email"];
$password=$_POST["password"];
$db=mysqli_connect("localhost","root","","login");
if(!$db)
{
echo"UNABLE TO CONNECT";
exit();
}
mysqli_select_db($db,"login");
$sql="insert into users values(".$username.",".$email.",".$password.")";
if(mysqli_query($db,$sql))
{
    echo "Hello!! You are now signed in....Welcome to E-learning website";
}
else
{
echo "Invalid User";
}
?>
