
convertTemp()

function convertTemp() {
    const temp = Number(document.getElementById("inputNumber").value);
    const selectInput = document.getElementById("selectInput").value;
    const selectResult = document.getElementById("selectResult").value;
    let inputResult = document.getElementById("inputResult");

    selectInput == selectResult ?
     inputResult.value = temp :
      selectInput == "Grau Celsius"  ?
      toCelcius(selectResult, temp) :
       selectInput == "Grau Fahrenheit" ?
       toFahrenheit(selectResult, temp) :
        toKelvin(selectResult, temp)

}


function toCelcius(selectResult, temp) {
    let fahrenheit = (temp * 9/5) + 32;
    let kelvin = temp + 273.15;

    selectResult == "Grau Fahrenheit"  ?
     inputResult.value = fahrenheit :
      inputResult.value = kelvin

}


function toFahrenheit(selectResult, temp){

    let fahrenheit = ((temp - 32)*(5/9))
    let kelvin = (temp - 32) * 5/9 + 273.15;

    selectResult == "Grau Celsius" ?
     inputResult.value = fahrenheit :
      inputResult.value = kelvin;
}

function toKelvin(selectResult, temp) {

    let celsius = (temp - 273.15);
    let fahrenheit = (temp -273.15) * 9/5 + 32;

    selectResult == "Grau Celsius" ?
     inputResult.value = celsius :
      inputResult.value = fahrenheit;
}
