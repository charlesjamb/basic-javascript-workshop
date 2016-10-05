/*Challenge: create a file called fortune.js in your Cloud9 project.
Running this file should output a random quote from a list of 10 different quotes.
Make sure to add/commit this file and push it to your GitHub.*/

var quotes = [
    "if you can dream it you can do it",
    "team work makes it dream work",
    "dicks out for harambe",
    "le gras c'est la vie",
    "are you always this stupid or are you making a special effort today?",
    "do not take life too seriously, you will never make it out alive",
    "people who think they know everything are a great annoyance to those of us who do",
    "I love deadlines. I like the whooshing sound they make as they fly by",
    "Laziness is nothing more than the habit of resting before you get tired",
    "Go to Heaven for the climate, Hell for the company"
    ];
    
function randomQuote() {
    var random = (Math.random() * 9);
    var out = quotes[Math.trunc(random)];
    console.log(out);
}

randomQuote();