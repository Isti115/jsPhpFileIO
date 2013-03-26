<?php

	if(!isset($_POST["action"]) || !isset($_POST["fileName"]))
	{
		echo("Action or filename not set! [action='" . $_POST["action"] . "' fileName='" . $_POST["fileName"] . "']");
	}
	
	else if($_POST["action"] == "write")
	{
		$fhandle = fopen($_POST["fileName"], "w");
		$writeText = $_POST["writeText"];
		
		fwrite($fhandle, $writeText);
		
		fclose($fhandle);
		
		echo("'" . $writeText . "' written into '" . $_POST["fileName"] . "'");
	}
	
	else if($_POST["action"] == "append")
	{
		$fhandle = fopen($_POST["fileName"], "a");
		$appendText = $_POST["appendText"];
		
		fwrite($fhandle, $appendText);
		
		fclose($fhandle);
		
		echo("'" . $appendText . "' appended to '" . $_POST["fileName"] . "'");
	}
	
	else if($_POST["action"] == "read")
	{
		$fhandle = fopen($_POST["fileName"], "r");
		
		$fileText = fread($fhandle, filesize($_POST["fileName"]));
		
		fclose($fhandle);
		
		echo($fileText);
	}
	
	else
	{
		echo("Not valid action! [" . $_POST["action"] . "]");
	}

?>