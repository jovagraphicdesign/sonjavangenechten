<?php
/* Set e-mail recipient */
$myemail = "info@sonjavangenechten.be";

/* Check all form inputs using check_input function */
$name = check_input($_POST['naam'], "Uw naam");
$email = check_input($_POST['email'], "Uw E-mail Adres");
$phone = check_input($_POST['phone'], "Uw Telefoonnummer");
$subject = check_input($_POST['onderwerp'], "Onderwerp Bericht");
$message = check_input($_POST['bericht'], "Uw Bericht");

/* If e-mail is not valid show error message */
if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
show_error("ongeldig e-mail adres");
}
/* Let's prepare the message for the e-mail */

$subject = "Iemand heeft u een bericht gestuurd";

$message = "

Iemand heeft u een bericht gestuurd via De website Sonja Van Genechten:

Naam: $name
Email: $email
Phone: $phone
Onderwerp: $subject

Bericht:
$message

";

/* Send the message using mail() function */
mail($myemail, $subject, $message);

/* Redirect visitor to the thank you page */
header('Location: ./index.html');
exit();

/* Functions we used */
function check_input($data, $problem='')
{
$data = trim($data);
$data = stripslashes($data);
$data = htmlspecialchars($data);
if ($problem && strlen($data) == 0)
{
show_error($problem);
}
return $data;
}

function show_error($myError)
{
?>
<html>
<body>

<p>Corrigeer AUB de volgende fout:</p>
<strong><?php echo $myError; ?></strong>
<p>Klik op de terug knop en probeer opnieuw</p>

</body>
</html>
<?php
exit();
}
?>
