<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website = $_POST['www.jorgebao.com'];
$message = $POST['message'];
$formcontent =" From: $name \n Phone: $phone \n Website: $website \n Message: $message";
$recipient = "bao.jorge10@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n;
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>