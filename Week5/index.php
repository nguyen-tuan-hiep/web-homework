<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php form</title>
</head>

<body>

    <h1>PHP FORM</h1>
    <p>* required field</p>
    <?php
    $name = $email = $comment = "";
    $nameErr = $emailErr = "";
    $successNoti = $failNoti = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (empty($_POST["name"])) {
            $nameErr = "Name is required";
        } else {
            $name = test_input($_POST["name"]);
            if ($name == "") $nameErr = "A string containing only spaces is not valid";
            if (!preg_match("/^[a-zA-Z-' ]*$/", $name)) {
                $name = "";
                $nameErr = "Only letters and white space allowed";
            }
        }

        if (empty($_POST["email"])) {
            $emailErr = "Email is required";
        } else {
            $email = test_input($_POST["email"]);
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $emailErr = "Invalid email format";
                $email = "";
                $failNoti = "Invalid data!";
            }
        }

        if (empty($_POST["comment"]))
            $comment = "";
        else
            $comment = test_input($_POST["comment"]);
        if (!empty($name) && !empty($email))
            $successNoti = "The data you submitted has been recognized!";
        else $failNoti = "Invalid data!";
    }

    function test_input($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    ?>

    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
        <label for="name">Fullname</label>
        <input type="text" name="name" id="name">
        <span class="error">*<?php echo $nameErr; ?></span>
        <br><br>
        <label for="email">Email</label>
        <input type="email" name="email" id="email">
        <span class="error">*<?php echo $emailErr; ?></span>
        <br><br>
        <label for="comment">Comment</label>
        <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
        <br><br>
        <input type="submit" name="submit" value="Submit">
        <br><br>
        <h1 class="notification"><?php echo $successNoti;
                                    echo $failNoti; ?></h1>
    </form>



</body>

</html>