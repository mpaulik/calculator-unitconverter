//SPEED CONVERTING
function speedConverter(source,inputNum) {
    inputNum = parseFloat(inputNum);
    var inputMPH = document.getElementById("inputMPH");
    var inputKPH = document.getElementById("inputKPH");
    var inputKnots = document.getElementById("inputKnots");
    var kphAndMph = 1.609344;
    var knotsAndMph = 1.150779;
    var knotsAndKph = 1.852;

    if (source=="inputMPH") {
        inputKPH.value=(inputNum*kphAndMph).toFixed(2);
        inputKnots.value=(inputNum/knotsAndMph).toFixed(2);
    }
    if (source=="inputKPH") {
        inputMPH.value=(inputNum/kphAndMph).toFixed(2);
        inputKnots.value=(inputNum/knotsAndKph).toFixed(2);
    }
    if (source=="inputKnots") {
        inputMPH.value=(inputNum*knotsAndMph).toFixed(2);
        inputKPH.value=(inputNum*knotsAndKph).toFixed(2);
    }
}


//LENGTH CONVERTING
function lengthConverter(source,inputNum) {
    inputNum = parseFloat(inputNum);
    var inputFeet = document.getElementById("inputFeet");
    var inputMeters = document.getElementById("inputMeters");
    var inputInches = document.getElementById("inputInches");
    var inputcm = document.getElementById("inputcm");
    var inputYards = document.getElementById("inputYards");
    var inputKilometers = document.getElementById("inputKilometers");
    var inputMiles = document.getElementById("inputMiles");

    var meterAndFeet = 3.2808;
    var inchFromFeet = 12;
    var cmAndFeet = 0.032808;
    var yardFromFeet = 0.33333;
    var kmAndFeet = 3280.8;
    var milesFromFeet = 0.00018939;

    if (source=="inputFeet") {
        inputMeters.value=(inputNum/meterAndFeet.toFixed(2));
        inputInches.value=(inputNum*inchFromFeet).toFixed(2);
        inputcm.value=(inputNum/cmAndFeet).toFixed();
        inputYards.value=(inputNum*yardFromFeet).toFixed(2);
        inputKilometers.value=(inputNum/kmAndFeet).toFixed(5);
        inputMiles.value=(inputNum*milesFromFeet).toFixed(5);
    }
    if (source=="inputMeters") {
        inputFeet.value=(inputNum*meterAndFeet).toFixed(2);
        inputInches.value=(inputNum*39.370).toFixed(2);
        inputcm.value=(inputNum/0.01).toFixed();
        inputYards.value=(inputNum*1.0936).toFixed(2);
        inputKilometers.value=(inputNum/1000).toFixed(5);
        inputMiles.value=(inputNum*0.00062137).toFixed(5);
    }
    if (source=="inputInches") {
        inputFeet.value=(inputNum*0.083333).toFixed(3);
        inputMeters.value=(inputNum/39.370).toFixed(3);
        inputcm.value=(inputNum/0.39370).toFixed(2);
        inputYards.value=(inputNum*0.027778).toFixed(3);
        inputKilometers.value=(inputNum/39370).toFixed(6);
        inputMiles.value=(inputNum*0.000015783).toFixed(6);
    }
    if (source=="inputcm") {
        inputFeet.value=(inputNum*cmAndFeet).toFixed(3);
        inputMeters.value=(inputNum/100).toFixed(3);
        inputInches.value=(inputNum*0.39370).toFixed(2);
        inputYards.value=(inputNum*0.010936).toFixed(3);
        inputKilometers.value=(inputNum/100000).toFixed(6);
        inputMiles.value=(inputNum*0.0000062137).toFixed(6);
    }
    if (source=="inputYards") {
        inputFeet.value=(inputNum*3).toFixed();
        inputMeters.value=(inputNum/1.0936).toFixed(2);
        inputInches.value=(inputNum*36).toFixed();
        inputcm.value=(inputNum/0.010936).toFixed();
        inputKilometers.value=(inputNum/1093.6).toFixed(5);
        inputMiles.value=(inputNum*0.00056818).toFixed(5);
    }
    if (source=="inputKilometers") {
        inputFeet.value=(inputNum*kmAndFeet).toFixed();
        inputMeters.value=(inputNum*1000).toFixed();
        inputInches.value=(inputNum*39370).toFixed();
        inputcm.value=(inputNum*100000).toFixed();
        inputYards.value=(inputNum*1093.6).toFixed();
        inputMiles.value=(inputNum*0.62137).toFixed(2);
    }
    if (source=="inputMiles") {
        inputFeet.value=(inputNum*5280).toFixed();
        inputMeters.value=(inputNum/0.00062137).toFixed();
        inputInches.value=(inputNum*63360).toFixed();
        inputcm.value=(inputNum/0.0000062137).toFixed();
        inputYards.value=(inputNum*1760).toFixed();
        inputKilometers.value=(inputNum/0.62137).toFixed(2);
    }
}

// WEIGHT CONVERTER
function weightConverter(source,inputNum) {
    inputNum = parseFloat(inputNum);
    var inputPounds = document.getElementById("inputPounds");
    var inputKilograms = document.getElementById("inputKilograms");
    var inputOunces = document.getElementById("inputOunces");
    var inputGrams = document.getElementById("inputGrams");
    var kilogramsAndPounds= 2.2046;
    var ouncesFromPounds = 16;
    var gramsAndPounds = 0.0022046;
    var ouncesAndKilograms = 35.274;
    var gramsAndKilograms = 1000;
    var poundsFromOunces = 0.062500;
    var gramsAndOunces = 0.035274;
    if (source=="inputPounds") {
        inputKilograms.value=(inputNum/kilogramsAndPounds).toFixed(2);
        inputOunces.value=(inputNum*ouncesFromPounds).toFixed(2);
        inputGrams.value=(inputNum/gramsAndPounds).toFixed();
    }
    if (source=="inputKilograms") {
        inputPounds.value=(inputNum*kilogramsAndPounds).toFixed(2);
        inputOunces.value=(inputNum*ouncesAndKilograms).toFixed(2);
        inputGrams.value=(inputNum*gramsAndKilograms).toFixed();
    }
    if (source=="inputOunces") {
        inputPounds.value=(inputNum*poundsFromOunces).toFixed(4);
        inputKilograms.value=(inputNum/ouncesAndKilograms).toFixed(4);
        inputGrams.value=(inputNum/gramsAndOunces).toFixed(1);
    }
    if (source=="inputGrams") {
        inputPounds.value=(inputNum*gramsAndPounds).toFixed(4);
        inputKilograms.value=(inputNum/gramsAndKilograms).toFixed(4);
        inputOunces.value=(inputNum*gramsAndOunces).toFixed(3);
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}

