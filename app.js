alert("Welcome to Tempature Converter")

function askName() {
    var name = prompt("What is your name?")
    return name
 }

function greet(a) {
    alert(`Hello ${a}.`)
 }
var a = (askName)

 greet(askName())

function askTempature() {
    var temp = prompt("Type a tempature you want to convert")
    return temp
}

askTempature()

function ctofConversion(f) {
    var tempcf = ((temp * 9)/5)+32; 
    return tempcf
}


function ftocConversion(c) {
    var tempfc = ((temp - 32)* 5)/9;
    return tempfc
}


function askConversion() {
    var convertask = prompt("If you want to convert from celsius to farenheit click 2 \n If you want to convert from farenheit to celsius click 1")
    return convertask
}

askConversion()

var convertques = (askConversion)

function convertAnswer( askTempature, ftocConversion, ctofConversion) { // check parameters // add placeholders
    if (convertques == 2) {
        alert(`${askTempature()} celsius is ${ctofConversion()} farenheit.`)
    }
    else if (convertques == 1) {
        alert(`${askTempature()} farenheit is ${ftocConversion()} celsius.`)
    }
}

convertAnswer()

// ((tempcf * 9)/5)+32

// ((tempfc - 32)* 5)/9

