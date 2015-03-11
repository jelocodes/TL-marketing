<?php 

$email = $_GET['email'];
$package = $_GET['package'];

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>TeamLeads Marketing | Thankyou!</title>
    <link rel="stylesheet" href="css/reset.css" type="text/css">
    <link rel="stylesheet" href="css/main.css" type="text/css">
    <link rel="icon" type="image/png" href="img/favicon.ico">
    <script src="scripts/vendor/jquery/jquery.min.js"></script>
    <script src="scripts/main.min.js"></script>
    <script src="scripts/svginject.js"></script>
    <script src="scripts/thankyou.js"></script>
    <script src="scripts/vendor/smoothscroll/jquery.smooth-scroll.js"></script>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
</head>

<body>

</body>
<div class="wrapper thankyou">
    <h1>Thank you for your upgrade!</h1>
    <br>
    <h2 id="thankyou">Please find the marketing package you selected below:</h2>
    <p class="iframe"><?php echo $package; ?></p>
    <br>
    <p class="iframe">We have sent a confirmation email to <?php echo $email; ?> for your records. Our billing team will be in touch with you as soon as possible to confirm your package selection and billing information.</p>
    <br>
    <p class="iframe">If you have any questions regarding your package, please visit the Team Leads Help Center for detailed information.</p>
    <br>
    <p class="iframe">Thank you again for your upgrade and we’ll speak with you soon!</p>
    <br>
    <p class="iframe">Sincerely,
    <br> 
    Team Leads</p>
    <img src="img/logo.png" class="logoThankyou">
</div>

 
