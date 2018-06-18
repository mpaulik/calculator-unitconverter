function insert (number){
    document.getElementById('inputfield').value = document.getElementById('inputfield').value+number;
}
function equal() {
    var goEqual =  document.getElementById('inputfield').value;
        if(goEqual){
            document.getElementById('inputfield').value = eval(goEqual);
        }

}
function del() {
    var goDel = document.getElementById('inputfield').value;
    document.getElementById('inputfield').value = goDel.substring(0, goDel.length-1);
}

//Bind keys to specific button on page
$(document).keypress(function(e){
    console.log(e);
    if (e.which == 48 || e.which == 48) { // Number: 0
        $("#number0").click();
    }if (e.which == 49 || e.which == 97){ // Number: 1
        $("#number1").click();
    }if (e.which == 50 || e.which == 98){ // Number: 2
            $("#number2").click();
    }if (e.which == 51 || e.which == 99){ // Number: 3
            $("#number3").click();
    }if (e.which == 52 || e.which == 100){ // Number: 4
            $("#number4").click();
    }if (e.which == 53 || e.which == 101){ // Number: 5
            $("#number5").click();
    }if (e.which == 54 || e.which == 102){ // Number: 6
            $("#number6").click();
    }if (e.which == 55 || e.which == 103){ // Number: 7
            $("#number7").click();
    }if (e.which == 56 || e.which == 104){ // Number: 8
            $("#number8").click();
    }if (e.which == 57 || e.which == 105){ // Number: 9
            $("#number9").click();
    }if (e.which == 13){ // Equals
        $("#equal").click();
    }if (e.which == 44|| e.which == 46){ // Dot
        $("#dot").click();
    }if (e.which == 8){
        $("#clear").click();
    }if (e.which == 45 || e.which == 109){ // minus
        $("#minus").click();
    }if (e.shiftKey == true && e.keyCode == 43) { // plus
        $("#plus").click();
    }});

function openNav() {
    document.getElementById("mySidenav").style.width = "245px";
    document.getElementById("main").style.marginLeft = "245px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}

/* HISTORY BOX - COMING SOON!
function history() {
    var inputfieldToHistory = [document.getElementById("inputfield").value];
    var history;
    for(history = 1; history <= inputfieldToHistory; history++) {
        document.write(inputfieldToHistory);
        console.log(inputfieldToHistory);
    }
}
*/

/* ROOT FUNCTION - COMING SOON!
function root() {
    var goRoot = document.getElementById('inputfield').value;
    if(goRoot){
        document.getElementById('inputfield').value = Math.sqrt(eval(goRoot));
    }
}
*/

/* INPUTFIELD VALIDATION - COMING SOON!
$(document).ready(function() {
    $('#inputfield').submit(function(e) {
        e.preventDefault();
        var inputfield = $('#inputfield').val();

        $(".error").remove();

        if (inputfield.length < 1) {
            $('#inputfield').after('<span class="error">Please add number numbers</span>');
        }else{
            var regEx = /^\s*([-+]?)(\d+)(?:\s*([-+*\/])\s*((?:\s[-+])?\d+)\s*)+$/;
            var validText = regEx.test(inputfield);
            if (!validText) {
                $('#inputfield').after('<span class="error">Wrong format</span>');
            }
        }
     });
});
*/
