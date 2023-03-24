const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = "We Love Porgramming"
let idx = 1
let speed = 300

writeText()

function writeText(){
    text.innerText = text.slice(0,1)
}