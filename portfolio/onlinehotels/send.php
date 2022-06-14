<?php
$fio = $_POST['fio'];
$number = $_POST['number'];
$site = $_POST['site'];


$fio = htmlspecialchars($fio);
$number = htmlspecialchars($number);
$site = htmlspecialchars($site);

$fio = urldecode($fio);
$number = urldecode($number);
$site = urldecode($site);

$fio = trim($fio);
$number = urldecode($number);
$site = urldecode($site);



$theme = "Заказ обратного звонка";
$myemail = "йцу@yandex.ru, йцу@yandex.by"; // емейлы, через запятую (если нужна отправка на два адреса) куда будут приходить письма

$mailBody = "<style>
td.post-table-title {background: #FC6733;color: #fff;font-size: 20px;line-height: 26px;text-align: center;}
</style>


<div class='post-table-main'>
<table style='width:100%' cellpadding='4' class='post-table'>
 <tr>
     <td colspan='2' class='post-table-title' style='font-weight:bold;'>Заказ обратного звонка от:</td>
 </tr>
 <tr>
     <td style='font-weight:bold;'>Имя:</td>
     <td>$fio</td>
</tr>
<tr>
    <td style='font-weight:bold;'>Телефон для связи:</td>
    <td>$number</td>
</tr>
<tr>
    <td style='font-weight:bold;'>Сайт отеля:</td>
    <td>$site</td>
</tr>
</table>
</div>";


$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";


mail($myemail, $theme, $mailBody, $headers);
 
?>