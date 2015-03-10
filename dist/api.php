<?php

define('API_DIR', '/api/');
define('MARKETING_EMAIL', 'michaelangelo@teamleads.com');

//http://marketing.teamleads.com/api/[:method]


$method = array("send_email");


$request = str_replace(API_DIR, "", $_SERVER['REQUEST_URI']);
$params = split("/", $request);


if(empty($params[0]) || count($params) > 1){
	exit('{"success": "0","message": "INVALID API ACCESS!"}');
}

if(empty($params[0]) || !in_array($params[0],$method)){
	exit('{"success": "0","message": "METHOD UNDEFINE!"}');
}




//===================================================================


if($params[0] == 'send_email') {

	if(empty($_POST['submit'])){
		exit('{"success": "0","message": "EMPTY POST!"}');
	}
	
	$package = check_empty($_POST['agent_package']);
	$email = check_empty($_POST['agent_email']);
	$bugget = check_empty($_POST['agent_bugget']);
	
	$to = MARKETING_EMAIL;
	$subject = "[ACTION] Marketing Upgrade - $email";
	$message = '<ul>';
	$message .= "<li>Package: $package</li>";
	$message .= "<li>Budget: $bugget</li>";
	$message .= "<li>Agent: $email</li>";
	$message .= '</ul>';

	
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= 'From: Marketing Page <no-reply@teamleads.com>' . "\r\n";
	$headers .= 'Reply-To: '.$email. "\r\n";
	$headers .= 'X-Mailer: PHP/' . phpversion();

	mail($to, $subject, $message, $headers);
	
	exit('{"success": "1","message": "wow it works"}');
	
}


//===========================================================================

function check_empty($val){
	if(empty($val)){
		exit('{"success": "0","message": "SOME REQUIRED FIELD HAS NO VALUE!"}');
	}else{
		return trim($val);
	}
}

?>