// ---- Sample middleware creation by end-user -----
var samplePostProcessMiddleware = new TykJS.TykMiddleware.NewMiddleware({});

samplePostProcessMiddleware.NewProcessRequest(function(request, session) {
    // You can log to Tyk console output by calloing the built-in log() function:
    log("Running sample  POST PROCESSOR JSVM middleware")
    
    // Set and Delete headers in an outbound request
    request.SetHeaders["User-Agent"] = "Tyk-Custom-JSVM-Middleware";
    //request.DeleteHeaders.push("Authorization");
    
    // Change the outbound URL Path (only fragment, domain is fixed)
    // request.URL = "/get";
    
    // Add or delete request parmeters, these are encoded for the request as needed.
    request.AddParams["test_param"] = "My Teapot2";
    request.DeleteParams.push("delete_me");
    
    // Override the body:
    request.Body = "New Request body2"
    
    // You MUST return both the request and session metadata    
    return samplePostProcessMiddleware.ReturnData(request, {});
});

// Ensure init with a post-declaration log message
log("Sample POST middleware initialised");