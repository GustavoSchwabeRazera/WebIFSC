<h1>   <?php echo "Olá mundo!"; ?></h1>

<?php $valor=50; 
echo "<p> $valor </p>";
echo "<p> $valor </p>";
echo "<p> $valor </p>";

$nome = "Gustavo Razera";
echo $nome;

$array = "";
$array=array();
$array=["pera","maçã","banana"];
echo "<br>";
print_r($array);

echo "<ul>";
for ($i = 0;$i < count($array);$i++){
    echo "<li> $i $array[$i]</li>";
};
echo "</ul>"


?>;
