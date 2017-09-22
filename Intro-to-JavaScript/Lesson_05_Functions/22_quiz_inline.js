/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression
emotions("happy", function(num) {
    var ha = "";
    
    for (var i = 1; i <= num; i++) {
        ha = ha + "ha";    
    }
    
    return ha + "!";
});
