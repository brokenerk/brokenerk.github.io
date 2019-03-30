<?php
    session_start();
    include("./configBD.php");
    if(isset($_SESSION["usuario"])){
        $sqlGetEstudiantes = "SELECT * FROM estudiantes";
        $resGetEstudiantes = mysqli_query($conexion,$sqlGetEstudiantes);
        $filasEstudiantes = "";
        while($filas = mysqli_fetch_array($resGetEstudiantes,MYSQLI_BOTH)){
            $filasEstudiantes .= "<tr><td>$filas[0]</td><td>$filas[1] $filas[2] $filas[3]</td><td><i class='fa fa-eye fa-2x'></i>&nbsp;<i class='fa fa-pencil fa-2x'></i>&nbsp;<i class='fa fa-close fa-2x'></i>&nbsp;<i class='fa fa-envelope fa-2x'></i>&nbsp;<i class='fa fa-file fa-2x'></i></td></tr>";
        }
?>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Examples</title>
<meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'/>
<meta name="description" content="">
<meta name="keywords" content="">
<link href="./../../fontAwesome/css/font-awesome.min.css" rel="stylesheet">
<link href="./../../materialize/css/materialize.min.css" rel="stylesheet">
<link href="./../css/general.css" rel="stylesheet">
<script src="./../../jscript/jquery-3.3.1.min.js"></script>
<script src="./../../materialize/js/materialize.min.js"></script>
</head>
<body>
    <header>
    <div class="container">
            <img src="./../imgs/header20191.png" class="responsive-img">
        </div>
    </header>
    <main>
        <div class="container">
        <table class="striped responsive-table centered">
            <thead>
                <tr><th>Boleta</th><th>Nombre</th><th>Opciones</th></tr>
            </thead>
            <tbody>
                <?php
                    echo $filasEstudiantes; 
                ?>
            </tbody>
        </table>
        <a href="./cerrarSesion.php?nombreSesion=usuario">Cerrar Sesi&oacute;n</a>
    </div>
    </main>
    <footer class="page-footer teal">
    <div class="footer-copyright">
            <div class="container">
            © 2018 Copyright / TWeb 2019
            <a class="grey-text text-lighten-4 right" href="http://www.comunidad.escom.ipn.mx/jantonio/">JAOR</a>
            </div>
    </footer>
</body>
</html>
<?php
}else{
    header("location:./../index.html");
}
?>
