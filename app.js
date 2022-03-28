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


function ctofConversion(f) {
    var tempcf = ((temp * 9)/5)+32; 
    return tempcf
}


function ftocConversion(c) {
    var tempfc = ((temp - 32)* 5)/9;
    return tempfc
}


function askConversion() {
    var convert = prompt("If you want to convert from celsius to farenheit click f \n If you want to convert from farenheit to celsius click c")
    return convert
}

askConversion()

function convert( tempcf, tempfc ) { // check parameters // add placeholders
    if (convert == "f" ) {
        alert(`${askTempature()} celsius is ${ftocConversion()} farenheit.`)
    }
    else if (convert == "c") {
        alert(`${askTempature()} farenheit is ${ctofConversion()} celsius.`)
    }
    return convert
}

convert()

// ((tempcf * 9)/5)+32

// ((tempfc - 32)* 5)/9