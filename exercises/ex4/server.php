<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>forms</title>
</head>
<body>
    <section>
        Welcome
        <?php
        $un = $_GET["reg_run"];
        $pw = $_GET["reg_pass"];

        if($un =="Shoval" && $pw =="206")
            echo "<h1> welcome".$un."<h1>";
        else
            echo "<h1 style='color:red'> Who are you ? you can't get in ";    
        ?>
</body>
</html>