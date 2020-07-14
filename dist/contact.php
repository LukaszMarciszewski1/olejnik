<?php

$to      = 'luukaszewski@interia.pl';
$name    = $_POST['name'];
$email   = $_POST['email'];
$subject = 'Nowy e-mail od ' . $name . ' (' . $email . ')';
$message = $_POST['message'];

$headers = 'From: ' . $name . ' (' . $email . ')';
// $headers .= 'Content-Type: text/html; charset=utf-8'. "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= "Reply-to: ".$email;

mail($to, $subject, $message, $headers);
// header("Location: index.html#contact")
?>
