function launchBrowser(browswerName){
    if(browswerName == "chrome"){
        console.log("Chrome Browser");     
    }else{
        console.log("Other Browser");
    }
}

function runTests(testType){
    switch(testType){
        case 'sanity':
            console.log("Sanity Test");
            break
        case 'regression':
            console.log("Regression Testing");
            break
        case 'acceptance':
            console.log("Acceptance Testing"); 
            break
        default:
            console.log("Smoke Testing");       
    }
}

launchBrowser("chrome")
runTests("Smoke")
launchBrowser("Edge")
runTests("acceptance")