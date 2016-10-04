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

/*Write a function that takes a string and a number, and returns the character at the position represented by the number. 
The indexing of number should start at 0. Test your function on a few inputs, including the empty string.*/

function numberCharacter(str, num) {
    var thirdFunction = str.charAt(num);
    console.log(thirdFunction);
}

numberCharacter("grunt", 3);

/*Write a function that takes two numbers and adds them together. Test your function on a few inputs. 
Write in the comments what happens when you pass something other than a number to your function.*/

function addTwoNumbers(num1, num2) {
    var fourthFunction = num1 + num2;
    console.log(fourthFunction);
}

addTwoNumbers(5, "string");
//if pass something other than a number it just logs the two inputs together

/*Write a function that takes two numbers and multiplies them together. Test your function on a few inputs. 
Write in your comments what happens when you pass something other than a number to your function.*/

function multiplyTwoNumbers(num1, num2) {
    var fithFunction = num1 * num2;
    console.log(fithFunction);
}

multiplyTwoNumbers(5, 5);
//when passing something other than a number we get "ReferenceError: string is not defined"

/*Write a function that takes two numbers and a string. If the string is ‘add’, then return the sum of the numbers. 
If the string is ‘subtract’, return the difference. If the string is ‘mult’, return the product. 
If the string is ‘div’, return the ratio. Otherwise return 0.*/

function differentOperations(num1, num2, str) {
    if (str === "add") {
        console.log(num1 + num2);
    } else if (str === "substract") {
        console.log(num1 - num2);
    } else if (str === "mult") {
        console.log(num1 * num2);
    } else if (str === "div") {
        console.log(num1 / num2);
    } else {
        console.log(0);
    }
}

differentOperations(5, 5, "test");

/*Write a function that takes a string and a number, and returns the string repeated that many number of times. 
Test your function with various inputs.*/

function stringRepeated(str, num) {
    for (i = 0; i <= num; i++) {
    console.log(str);
    }
}

stringRepeated("test", 5);

