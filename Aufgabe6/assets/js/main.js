/*--------- lev3_1: forms-js_fonts-generator ----------*/
let range = document.getElementById("range")
let selection = document.getElementById("selection")
let myText = document.getElementById("myText")
let testChambor = document.getElementById("testChambor")

function changeFontsSize(){

    
    
    document.getElementById("testChambor").style.fontFamily = selection.value

    document.getElementById("testChambor").style.fontSize = range.value + "px"

    document.getElementById("testChambor").innerHTML = myText.value


    console.log(selection.value);

    console.log(range.value);    

    console.log(myText.value);
}

// document.getElementById('range').changeFontsSize('input')
// document.getElementById('selection').changeFontsSize('input')
// document.getElementById('myText').changeFontsSize('input')


