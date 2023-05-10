<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Basics</title>
</head>

<body>
    <form action="ex1.php" method="post">
        <input type="text" name="name1" placeholder="Enter name 1">
        <input type="date" name="dob1" placeholder="Enter date of birth 1">
        <br><br>
        <input type="text" name="name2" placeholder="Enter name 2">
        <input type="date" name="dob2" placeholder="Enter date of birth 2">
        <br><br>
        <input type="submit" name="submit">
        <br><br>
    </form>

    <?php

    if (isset($_POST['submit'])) {

        $name1 = $_POST['name1'];
        $dob1 = $_POST['dob1'];
        $name2 = $_POST['name2'];
        $dob2 = $_POST['dob2'];

        $age1 = date_diff(date_create($dob1), date_create('today'))->y;
        $age2 = date_diff(date_create($dob2), date_create('today'))->y;

        $day1 = (int)date_diff(date_create($dob1), date_create('today'))->format('%a days');
        $day2 = (int)date_diff(date_create($dob2), date_create('today'))->format('%a days');

        echo "<p>Age of $name1 is " . $age1 . " years old <br></p>";
        echo "<p>Age of $name2 is " . $age2  . " years old <br></p>";

        if ($day1 > $day2) {
            echo "<p>$name1 is older than $name2 by " . ($day1 - $day2) . " days</p>";
        } else if ($day1 < $day2) {
            echo "<p>$name2 is older than $name1 by " . ($day1 - $day2) . " days</p>";
        } else {
            echo "<p>$name1 and $name2 are of the same age</p>";
        }
    }
    ?>

</body>

</html>