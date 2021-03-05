<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer/src/Exception.php';
require 'PHPMailer/PHPMailer/src/PHPMailer.php';
require 'PHPMailer/PHPMailer/src/SMTP.php';

$mail = new PHPMailer;

// Form Data
$name = $_REQUEST['name'] ;
$email = $_REQUEST['email'] ;
$message = $_REQUEST['message'] ;

$mailbody = 'Zamówienie' . PHP_EOL . PHP_EOL .
            'Email: ' . $email . '' . PHP_EOL .
            'Imię: ' . $name . '' . PHP_EOL .
            'Wiadomość: ' . $message . '' . PHP_EOL ;
$mail->CharSet = 'UTF-8';
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.olejnik.com.pl'; // Specify main and backup SMTP servers
$mail->SMTPAuth = true; // Enable SMTP authentication
$mail->Username = 'studioreklama'; // SMTP username
$mail->Password = 'zaq123'; // SMTP password
$mail->SMTPSecure = 'tls'; // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587; // TCP port to connect to

$mail->setFrom('studioreklama@olejnik.com.pl'); // Admin ID
$mail->addAddress('studioreklama@olejnik.com.pl'); // Business Owner ID
$mail->addReplyTo($email, $name); // Form Submitter's ID

$mail->isHTML(false); // Set email format to HTML

$mail->Subject = 'Olejnik';
$mail->Body    = $mailbody;

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}

