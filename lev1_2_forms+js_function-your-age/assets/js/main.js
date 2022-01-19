/*----------lev1_2: forms+js_function-your-age-------------*/
let year = document.getElementById("birthyear")

function buttonCalc(){

    console.log(year.value)

    document.getElementById("resultNumber").innerHTML = 2020 - year.value
}