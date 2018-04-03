<?php

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$number = $_POST['number'];
	$message = $_POST['message'];

	
	$email_from = "rami0141@umn.edu";

	$email_subject = "New Form Submission";

	$email_body = "User Name: $name.\n".
					"User Email: $visitor_email.\n".
						"User Phone: $number.\n".
							"User Message: $message.\n;"

	$to = "rami0141@umn.edu";

	$headers = "From: $email_from \r\n";

	$headers .= "Reply-To: $visitor_email \r\n";

	mail($to, $email_subject, $email_body, $headers);

	header("Location: main.html?mailsend");
					
	}				

?>