<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    $to = "axolote2107@gmail.com.com"; // Reemplaza con la dirección de correo a la que deseas enviar los comentarios
    $subject = "Comentario de $name";
    $headers = "From: $email";

    $email_body = "Nombre: $name\n";
    $email_body .= "Correo: $email\n";
    $email_body .= "Teléfono: $phone\n\n";
    $email_body .= "Mensaje:\n$message";

    // Envía el correo electrónico
    mail($to, $subject, $email_body, $headers);
}
?>