/**
 * Bridge Test - North Theme v1.0.0
 * @author    : Object.NET, Inc. http://bridge.net/
 * @copyright : Copyright 2008-2017 Object.NET, Inc. (http://object.net) All Rights Reserved.
 */
QUnit.begin(function(details) {
    var bridgeVersion = Bridge && Bridge.SystemAssembly && Bridge.SystemAssembly.version ? Bridge.SystemAssembly.version : null;
    var qunit = document.getElementById("qunit");
    qunit.removeChild(document.getElementById("qunit-header"));
    qunit.removeChild(document.getElementById("qunit-banner"));
    var header = document.createElement("div");
    header.id = "qunit-header";
    header.innerHTML = "<div class='header-left'>" + "<a class='logo' href='http://testing.bridge.net'>" + "<svg xmlns='http://www.w3.org/2000/svg' width='175' height='19.5' viewBox='0 0 175 19.5'><path d='M51.6 15.6h-5V4.1h4.5c.8 0 1.5.1 2 .3.6.2 1 .4 1.3.8.5.6.8 1.3.8 2 0 .9-.3 1.6-.9 2-.2.2-.3.2-.4.3-.1 0-.2.1-.4.2.7.2 1.3.5 1.7 1 .4.5.6 1.1.6 1.8 0 .8-.3 1.5-.8 2.1-.7.6-1.8 1-3.4 1zm-2.4-6.9h1.2c.7 0 1.2-.1 1.6-.2.3-.2.5-.5.5-1s-.2-.8-.5-1c-.3-.2-.9-.2-1.6-.2h-1.2v2.4zm0 4.7H51c.7 0 1.3-.1 1.7-.3.4-.2.6-.5.6-1.1 0-.5-.2-.9-.6-1.1-.4-.2-1-.3-1.9-.3h-1.5v2.8zM69.6 7.9c0 1.8-.7 3-2.2 3.6l2.9 4.1h-3.2l-2.6-3.7h-1.8v3.7h-2.6V4.1h4.4c1.8 0 3.1.3 3.8.9.9.6 1.3 1.6 1.3 2.9zm-3.1 1.4c.4-.3.5-.8.5-1.4s-.2-1-.5-1.3c-.3-.2-.9-.3-1.7-.3h-1.9v3.4h1.9c.8 0 1.4-.2 1.7-.4zM75.6 4.1h2.6v11.5h-2.6V4.1zM93.1 5.6c1.1 1 1.6 2.4 1.6 4.2 0 1.8-.5 3.2-1.6 4.3-1.1 1-2.7 1.6-4.9 1.6h-3.9V4.1h4.1c2 0 3.6.5 4.7 1.5zm-1.9 6.8c.6-.6.9-1.5.9-2.6s-.3-2-.9-2.6c-.6-.6-1.6-.9-2.9-.9h-1.4v7h1.6c1.1 0 2-.3 2.7-.9zM106.7 9.7h2.6v4.1c-1.1 1.3-2.7 1.9-4.7 1.9-1.7 0-3.1-.6-4.3-1.7-1.1-1.1-1.7-2.5-1.7-4.2 0-1.7.6-3.1 1.8-4.3 1.2-1.1 2.6-1.7 4.2-1.7 1.7 0 3.1.5 4.3 1.6l-1.3 1.9c-.5-.5-1-.8-1.4-.9-.4-.2-.9-.3-1.4-.3-1 0-1.8.3-2.5 1s-1 1.5-1 2.6.3 2 1 2.6c.6.7 1.4 1 2.3 1 .9 0 1.6-.2 2.2-.5V9.7zM122.9 4.1v2.3h-5.7v2.4h5.2V11h-5.2v2.4h5.9v2.3h-8.5V4.1h8.3zM128.8 15.3c-.3-.3-.4-.6-.4-1s.1-.8.4-1c.3-.3.6-.4 1-.4s.8.1 1 .4c.3.3.4.6.4 1s-.1.7-.4 1c-.3.3-.6.4-1 .4-.3 0-.7-.1-1-.4zM144.7 4.1h2.6v11.5h-2.6l-5.5-7.2v7.2h-2.6V4.1h2.4l5.7 7.4V4.1zM161.1 4.1v2.3h-5.7v2.4h5.2V11h-5.2v2.4h5.9v2.3h-8.5V4.1h8.3zM171.7 6.3v9.3h-2.6V6.3h-3.3V4.1h9.1v2.2h-3.2zM25.8 19.5h3V13l-3-3.4v9.9zm5.7-3.5v3.4h3l-3-3.4zM20 19.5h3v-13l-3-3.4v16.4zm-20 0h4.1L14.3 7.9v11.5h3V0L0 19.5z'/></svg>" + "</a>" + "<span class='header-text'>Test Library</span>" + "</div>" + "<div class='header-right'>" + "<span id='bridge-version'>Bridge.NET " + bridgeVersion + "</span>" + "<span id='result-container'></span>" + "<span id='qunit-banner'></span>" + "</div>";
    qunit.insertBefore(header, document.getElementById("qunit-testrunner-toolbar"));
    var userAgent = document.getElementById("qunit-userAgent");
    if (userAgent) {
        userAgent.innerHTML = "";
        userAgent.appendChild(document.createTextNode(navigator.userAgent));
    }
    userAgent.parentNode.insertBefore(userAgent, document.getElementById("qunit-testrunner-toolbar"));
    var qunitUrlConfig = document.getElementsByClassName("qunit-url-config");
    var labels = Array.prototype.slice.call(qunitUrlConfig[0].childNodes);
    labels.forEach(function(label) {
        var switchEl = document.createElement("div");
        switchEl.className = "switch";
        label.appendChild(switchEl);
    });
    var testResultsProgressDiv = document.getElementById("qunit-testresult");
    var loader = document.createElement("div");
    loader.id = "loader";
    loader.innerHTML = "<div class='loader-container'>" + "<div class='loader'>" + "<span class='dot dot_1'></span>" + "<span class='dot dot_2'></span>" + "<span class='dot dot_3'></span>" + "<span class='dot dot_4'></span>" + "</div>" + "</div>";
    testResultsProgressDiv.parentNode.insertBefore(loader, testResultsProgressDiv.nextSibling);
});

QUnit.done(function(details) {
    var qunit = document.getElementById("qunit");
    qunit.removeChild(document.getElementById("qunit-testresult"));
    var results = document.createElement("div");
    results.className = "qunit-test-results";
    qunit.insertBefore(results, document.getElementById("qunit-tests"));
    results.innerHTML = "<div class='results'>" + "<div class='result'><span class='total'><i class='ti-pulse'></i>" + details.total + "</span>assertions</div>" + "<div class='result'><span class='passed'><i class='ti-check'></i>" + details.passed + "</span>passed</div>" + "<div class='result'><span class='failed'><i class='ti-close'></i>" + details.failed + "</span>failed</div>" + "</div>" + "<div class='qunit-test-runtime'>Tests completed in " + details.runtime + " miliseconds</div>";
    var resultLabel = details.failed ? "Some Tests Failed" : "All Tests Passed";
    document.getElementById("result-container").innerHTML = "<span class='result-label'>" + resultLabel + "</span>";
    qunit.removeChild(document.getElementById("loader"));
    document.getElementById("qunit-tests").style.visibility = "visible";
    document.getElementById("qunit-tests").style.display = "block";
    var footer = document.createElement("footer");
    var footerHTML = "<div>&copy; 2008 - " + new Date().getFullYear() + " <a href='http://object.net'>Object.NET, Inc.</a> All Rights Reserved</div>";
    footer.innerHTML = footerHTML;
    document.getElementById("qunit").appendChild(footer);
});