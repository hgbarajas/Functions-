// alert("Welcome to Tempature Converter")

// function askName() {
//     var name = prompt("What is your name?")
//     return name
// }

// function greet(a) {
//     alert(`Hello ${a}.`)
// }

// greet(askName())

function askTempature() {
    var temp = prompt("Type a tempature you want to convert")
    return temp
}


function ctofConversion(f) {
    var tempcf = ((temp * 9)/5)+32; 
    return tempcf
}
ctofConversion(askTempature())



function ftocConversion(c) {
    var tempfc = ((temp - 32)* 5)/9;
    return tempfc
}

ftocConversion(askTempature())


function askConversion() {
    var convert = prompt("If you want to convert from celsius to farenheit click f \n If you want to convert from farenheit to celsius click c")
    return convert
}


function convert(tempcf, tempfc) { // check parameters // add placeholders
    if (convert == "f" ) {
        alert(`${temp} celsius is ${tempfc} farenheit.`)
    }
    else if (convert == "c") {
        alert(`${temp} farenheit is ${tempcf} celsius.`)
    }
}



// ((tempcf * 9)/5)+32; 

// ((tempfc - 32)* 5)/9;

