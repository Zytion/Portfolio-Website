<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
    <title>Contact Me</title>
	<link rel="icon" type="img/png" href="Files/Images/logo2.png" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="../CSS/style.css" />
    <link rel="stylesheet" type="text/css" href="../CSS/mailformStyle.css" />
    <script src="https://www.google.com/recaptcha/api.js?render=6LcFfMgUAAAAAHhWKEfuMTH07gR3UxX6hSr3NyJA"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://www.google.com/recaptcha/api.js?render=6LcFfMgUAAAAAHhWKEfuMTH07gR3UxX6hSr3NyJA"></script>

      <script src="../javascript/captcha.js"></script>
  </head>
</head>
<body>
<header class="topnav" id="myTopnav">
		<a href="/" class="active"><img src="../Files/Images/logo2.png" alt="Robert Levin" height="38"></a>
		<a href="https://zytion-levin.itch.io" target="_blank">
			<!-- <img src="Files/Images/itchio-textless-black.svg" height="16" alt="">  -->
			<i class="fa fa-gamepad" aria-hidden="true"> Itch.io</i></a>
		<a href="https://www.linkedin.com/in/robertlevinrit" target="_blank">
			<!-- <img src="Files/Images/Linkedin_icon.svg" height="16" alt="">  -->
			<i class="fa fa-linkedin" aria-hidden="true"> LinkedIn</i></a>
		<a href="https://github.com/Zytion" target="_blank">
			<!-- <img src="Files/Images/GitHub-Mark-64px.png" height="16" alt="">  -->
			<i class="fa fa-github" aria-hidden="true"> GitHub</i></a>
		<a href="../Files/Levin-resume.pdf" target="_blank"><i class="fa fa-file" aria-hidden="true"> Resume</i></a>
		<a href="mailform.php"><i class="fa fa-envelope" aria-hidden="true"> Contact</i></a>
		<a href="javascript:void(0);" class="icon" onclick="myFunction()">
			<i class="fa fa-bars"></i>
		</a>
    </header>
    <main>
  	<h1>Email Me</h1>
 	<form method="post" action="<?php echo $_SERVER["PHP_SELF"];?>">
        
            <label>Name</label>
            <input name="name" placeholder="Type Here">
            
            <label>Email</label>
            <input name="email" type="email" placeholder="person@sample.com">
            
            <label>Message</label>
            <textarea id="message" name="message" placeholder="Type Here"></textarea>
            
            <input id="submit" name="submit" type="submit" value="Submit">

            <div class="g-reCAPTCHA" data-sitekey="your_site_key"></div>
        </form>
    </main>
 <?php   
 	// ** Form validation code **
 	// We will use the $_POST "super global" associative array to extract the values of the form fields
	// #1 - was the submit button pressed?
    if (isset($_POST["submit"])){ 
    	$to = "18levrob@gmail.com"; // !!! REPLACE WITH YOUR EMAIL !!!
    	
    	// #2 - if a value for the `email` form field is missing, give a default value
    	// else, use the value from the form field
			$from = empty(trim($_POST["email"])) ? "noemail@sample.com" : sanitize_string($_POST["email"]);
			
			$subject = "Message from Portfolio Contact Page";
			
			// #3 - same as above, except with the `message` form field
			$message = empty(trim($_POST["message"])) ?  "No message" : sanitize_string($_POST["message"]);
			
			// #4 - same as above, except with the `name` form field
			$name = empty(trim($_POST["name"])) ? "No name" : sanitize_string($_POST["name"]);
			
			$headers = "From: $from" . "\r\n";
			
			// #6 - add the user's name to the end of the message
			$message .= "\n\n - $name";
            
            //reCaptcha test will go here, but I need some more time to figure it out

            $sent = mail($to,$subject,$message,$headers);
            if ($sent){
                echo "<p><b>You sent:</b> $message</p>";
            }else{
                echo "<p>Mail not sent!</p>";
            }
            
    }
    
    // #9 - this handy helper function is very necessary whenever
    // we are going to put user input onto a web page or a database
    // For example, if the user entered a <script> tag, and we added that <script> tag to our HTML page
    // they could perform an XSS attack (Cross-site scripting)
    function sanitize_string($string){
	$string = trim($string);
	$string = strip_tags($string);
	return $string;
    }
?>
</body>

<script src="../javascript/headerScript.js"></script>
</html>