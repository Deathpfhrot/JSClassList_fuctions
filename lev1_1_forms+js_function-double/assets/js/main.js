/*---------Übung lev1_1: forms+js_function-double-----------*/


function buttonFunction(){
    let inputNumber = document.getElementById("number")
    console.log("test");

    console.log(inputNumber.value*2)

    document.getElementById("ergebnis").innerHTML = inputNumber.value*2
}