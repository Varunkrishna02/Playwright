const { Console } = require("console");

let browserName = "Chrome";

function launchBrowser() {
    if (browserName === "Chrome") {
        console.log("Expected Browser");
        
    } else {
        console.log("No Browser") 
    }
    
}
launchBrowser();

let test= "smoke";

function testType(){
    switch (test) {
        case "smoke":
            console.log("executed SmokeTest")
            break;
        
        case "regression":
            console.log("execute reg");
            break;

        
     default:
            console.log("executed SanityTests")
            break;
    }
}

testType();

