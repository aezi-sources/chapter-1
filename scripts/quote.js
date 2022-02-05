var quotes = [
    "It is ever coming, ever elusive in its ways. It could come at any moment and at any time, we'll see when a mere destiny becomes reality. I'll know."
]

function newQuote() { 
    var randomNumber = Math.floor(Math.random() * (quotes.length))
    document.getElementById('quote').innerHTML = quotes[randomNumber]
}