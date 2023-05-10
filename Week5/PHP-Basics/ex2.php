<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['name']) && isset($_POST['id']) && isset($_POST['doses'])) {
        $data = array('name' => $_POST['name'], 'id' => $_POST['id'], 'doses' => $_POST['doses']);
        include "phpqrcode/qrlib.php";
        QRcode::png(json_encode($data));
        // echo $qr;
    }
}
?>
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>ex2</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <!-- Create a page allowing users to enter their name, ID, and number of Covid vaccine doses -->

    <form action="/qrcode.php" method="post">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" name="name" placeholder="Enter name" required>
        </div>
        <div class="form-group">
            <label for="id">ID</label>
            <input type="text" class="form-control" id="id" name="id" placeholder="Enter ID" required>
        </div>
        <div class="form-group">
            <label for="doses">Number of doses</label>
            <input type="text" class="form-control" id="doses" name="doses" placeholder="Enter number of doses" required>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>

</body>

</html>