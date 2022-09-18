<?php 

if (isset($_POST['name'])) {$name = $_POST['name'];} 
if (isset($_POST['number'])) {$phone = $_POST['number'];} 
if (isset($_POST['email'])) {$email = $_POST['email'];}
if (isset($_POST['message'])) {$message = $_POST['message'];}
if (isset($_POST['callback_page-name'])) {$page = $_POST['callback_page-name'];}
 
 

  
$address  = 'info@stopradiators.ru';

$mes = "Заявка пришла с $page\nИмя: $name\nТелефон: $phone\nEmail: $email\nСообщение: $message";   

$sub='Новая заявка с сайта montag.stopradiators.ru'; 

$send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\n", "-f montag.stopradiators.ru");  








?>