<?php
    session_start();
    sleep(2);
    include("./configBD.php");
    $boleta = $_POST["boleta"];
    $contrasena = $_POST["contrasena"];
    $contrasena = md5($contrasena);

    $sqlCheckUsr = "SELECT * FROM  estudiantes WHERE boleta='$boleta' AND contrasena = '$contrasena'";

    $resCheckUsr = mysqli_query($conexion, $sqlCheckUsr);
    $infoCheckUsr = mysqli_num_rows($resCheckUsr);

    if($infoCheckUsr == 1){
        $_SESSION["usuario"] = $boleta;
    }

    echo $infoCheckUsr;
?>