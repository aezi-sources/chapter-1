var randomUrl = [
    "https://google.com",
    "https://jobless.com",
    "https://urfinished.com",
    "https://mancity.com",
    "https://github.com/minichest/Chapter-1",
    "https://aezlo.com/Chapter-2",
    "https://www.latlmes.com/opinion/teenagers-spend-their-time-using-their-phones-is-it-worth-it-1"
]

var randomNumber = (Math.floor(Math.random * (randomUrl.length)))

function randomlink(){
    window.location.replace(randomUrl[randomNumber])
}