/* Write a function that takes a string and returns the first character of the string. 
Test your function on a few inputs, including the empty string. */

function firstCharacter(str) {
    var firstFunction = str.charAt(0);
    console.log(firstFunction);
}

firstCharacter("grunt");

/* Write a function that takes a string and returns the last character of a string. 
Test your function on a few inputs, including the empty string. */

function lastCharacter(str) {
    var secondFunction = str.charAt(str.length - 1);
    console.log(secondFunction);
}
lastCharacter("grunt");