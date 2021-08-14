// C = (F - 32) * 5 / 9
// F = C * 9/5 + 32

let temperature = "32F";

function convertTemperature(temperature) {
    let isCelsius = temperature.toUpperCase().includes("C");
    let isFahrenheit = temperature.toUpperCase().includes("F");
    
    if(isFahrenheit) {
        let farenheight = Number(temperature.toUpperCase().replace("F", ""));
        let celsius = (farenheight - 32) * 5 / 9;
        return celsius + "C";
    } else if(isCelsius) {
        let celsius = Number(temperature.toUpperCase().replace("C", ""));
        let farenheight = celsius * 9 / 5 + 32;
        return farenheight + "F";
    } else {
        return "Invalid value!"
    }
}

function testConvertTemperature() {
    let tests = ["0C", "0F", "32c", "32f", "", "100D", "100", "100C", "100F", "-25C", "-25F"];
    for(let test of tests){
        console.log(convertTemperature(test));
    }
}

testConvertTemperature();