var ajaxResponse;

function createRequest()
{
	ajaxResponse = null;
	
	var ajaxRequest = new XMLHttpRequest();
	
	ajaxRequest.onreadystatechange =
	function()
	{
		if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200)
		{
			ajaxResponse = ajaxRequest.responseText;
		}
	};
	
	ajaxRequest.open("POST", "jsPhpFileIO/fileIO.php", false);
	ajaxRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
	return ajaxRequest;
}

function returnResponse()
{
	while(ajaxResponse == null);
	return ajaxResponse;
}

function fileWrite(fileName, writeText)
{
	var writeRequest = createRequest();
	
	var parameters = "";
	parameters += "action=write";
	parameters += "&fileName=" + fileName;
	parameters += "&writeText=" + writeText;
	
	writeRequest.send(parameters);
	
	return returnResponse();
}

function fileAppend(fileName, appendText)
{
	var appendRequest = createRequest();
	
	var parameters = "";
	parameters += "action=append";
	parameters += "&fileName=" + fileName;
	parameters += "&appendText=" + appendText;
	
	appendRequest.send(parameters);
	
	return returnResponse();
}

function fileRead(fileName)
{
	var readRequest = createRequest();
	
	var parameters = "";
	parameters += "action=read";
	parameters += "&fileName=" + fileName;
	
	readRequest.send(parameters);
	
	return returnResponse();
}