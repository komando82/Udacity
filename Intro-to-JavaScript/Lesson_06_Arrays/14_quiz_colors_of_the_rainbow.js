/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 */

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

// your code goes here
rainbow.splice(2, 1);
rainbow.splice(3, 0, "Yellow", "Green");
rainbow.splice(5, 0, "Purple");

console.log(rainbow);
