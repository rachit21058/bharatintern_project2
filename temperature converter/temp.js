function convertToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var kelvinInput = document.getElementById("kelvin");
    var celsiusInput = document.getElementById("celsius");

    if (fahrenheitInput.value !== "") {
        var fahrenheit = parseFloat(fahrenheitInput.value);
        var celsius = (fahrenheit - 32) * 5 / 9;
        var kelvin = celsius + 273.15;
        celsiusInput.value = celsius.toFixed(2);
        kelvinInput.value = kelvin.toFixed(2);
    }
}

function convertToFahrenheit() {
    var celsiusInput = document.getElementById("celsius");
    var kelvinInput = document.getElementById("kelvin");
    var fahrenheitInput = document.getElementById("fahrenheit");

    if (celsiusInput.value !== "") {
        var celsius = parseFloat(celsiusInput.value);
        var fahrenheit = (celsius * 9 / 5) + 32;
        var kelvin = celsius + 273.15;
        fahrenheitInput.value = fahrenheit.toFixed(2);
        kelvinInput.value = kelvin.toFixed(2);
    }
}

function convertToKelvin() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var kelvinInput = document.getElementById("kelvin");

    if (celsiusInput.value !== "") {
        var celsius = parseFloat(celsiusInput.value);
        var kelvin = celsius + 273.15;
        var fahrenheit = (celsius * 9 / 5) + 32;
        kelvinInput.value = kelvin.toFixed(2);
        fahrenheitInput.value = fahrenheit.toFixed(2);
    }
}