/*--------- lev3_1: forms-js_fonts-generator ----------*/


function changeFontsSize(){
    let range = document.getElementById("range").value
    let selection = document.getElementById("selection").value
    let myText = document.getElementById("myText").value
    let testChambor = document.getElementById("testChambor")
    
    
    document.getElementById("testChambor").style.fontFamily = selection

    document.getElementById("testChambor").style.fontSize = (range + "px")

    document.getElementById("testChambor").innerHTML = myText


    console.log(selection);

    console.log(range);    

    console.log(myText);
}

// document.getElementById('range').changeFontsSize('input')
// document.getElementById('selection').changeFontsSize('input')
// document.getElementById('myText').changeFontsSize('input')


