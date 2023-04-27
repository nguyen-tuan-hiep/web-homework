<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
        }

        h1 {
            text-align: center;
        }

        form {
            background-color: white;
            max-width: 600px;
            margin: 0 auto;
            padding:20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }

        label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
        }

        input[type="text"],
        input[type="email"],
        textarea {
            display: block;
            width: 95%;
            padding: 10px;
            margin-bottom: 20px;
            border-radius: 5px;
            border: none;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        }

        input[type="submit"] {
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 10px;
            cursor: pointer;
            transition: background-color 0.2s ease-in-out;  
        }

        input[type="submit"]:hover {
            background-color: #388e3c;
        }

        .error {
            color: red;
            font-size: 0.8em;
        }

        .require {
            color: red;
            font-size: 1em;
        }

        .notification {
            text-align: center;
            margin-top: 20px;
            font-weight: bold;
        }

        .success {
            color: green;
        }

        .fail {
            color: red;
        }
    </style>
</head>

<body>

    <?php
    $name = $email = $comment = "";
    $nameErr = $emailErr = "";
    $successNoti = $failNoti = "";
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (empty($_POST["name"])) {
            $nameErr = "*Name is required";
        } else {
            $name = test_input($_POST["name"]);
            if (empty($name)) {
                $nameErr = "*A string containing only spaces is not valid";
            } else if (!preg_match("/^([a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$/i", $name)) {
                $name = "";
                $nameErr = "*Only letters and white space allowed";
            }
        }

        if (empty($_POST["email"])) {
            $emailErr = "*Email is required";
        } else {
            $email = test_input($_POST["email"]);
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $emailErr = "*Invalid email format";
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
        <h1>PHP FORM</h1>
        <p style="text-align: center" class="require">* required field</p>
        <label for="name">Fullname <span class="error">*</span></label>
        <input type="text" name="name" id="name" placeholder="Your name">
        <span class="error"><?php echo $nameErr; ?></span>
        <br><br>
        <label for="email">Email <span class="error">*</span></label>
        <input type="email" name="email" id="email" placeholder="Eg. example@gmail.com">
        <span class="error"><?php echo $emailErr; ?></span>
        <br><br>
        <label for="comment">Comment</label>
        <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
        <br><br>
        <div style="text-align: center;">
            <input type="submit" name="submit" value="Submit" >
            <!-- <button>Submit</button> -->
            <br><br>
            <h1 class="notification">
                <?php
                echo $successNoti;
                echo $failNoti;
                ?>
            </h1>
        </div>
    </form>



</body>

</html>