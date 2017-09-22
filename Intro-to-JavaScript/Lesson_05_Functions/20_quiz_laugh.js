/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function (num) {
    var ha = "";
    
    for (var i = 1; i <= num; i++) {
        ha = ha + "ha";    
    }
    
    return ha + "!";
}

console.log(laugh(10));
