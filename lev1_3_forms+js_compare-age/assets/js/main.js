/*------------Übung lev1_3: forme+js_compare-age--------------*/

let age1 = document.getElementById("age1")
let age2 = document.getElementById("age2")

function calcButton(){
    console.log("test");

    document.getElementById("different").innerHTML = age1.value - age2.value
}