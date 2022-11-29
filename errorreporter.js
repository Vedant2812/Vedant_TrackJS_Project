AjaxTCRExamples.reportJSError = function (errorMessage,url,lineNumber)
{
    function sendRequest(url,payload)
    {
         var img = new Image();
         img.src = url+"?"+payload;
    }
    
    /* form payload string with error data */
    var payload = "url=" + AjaxTCRExamples.encodeValue(url);
    payload += "&message=" + AjaxTCRExamples.encodeValue(errorMessage);
    payload += "&line=" + AjaxTCRExamples.encodeValue(lineNumber);
 
    /* submit error message  */
    sendRequest(AjaxTCRExamples.errorReportingURL,payload);
 
    alert("JavaScript Error Encountered.  \nSite Administrators have been notified.");
 
    return true; // suppress normal JS errors since we handled
}
 
AjaxTCRExamples.registerErrorHandler = function () 
{    
    if (window.onerror) // then one exists
      {
       var oldError = window.onerror;
       var newErrorHandler = function (errorMessage,url,lineNumber) { AjaxTCRExamples.reportJSError(errorMessage,url,lineNumber); oldError(errorMessage,url,lineNumber); }
       window.onerror = newErrorHandler;
      }
    else
      window.onerror = AjaxTCRExamples.reportJSError;
}
 
/* bind the error handler */
AjaxTCRExamples.registerErrorHandler();
