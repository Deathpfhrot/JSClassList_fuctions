/*--------- lev3_1: forms-js_fonts-generator ----------*/
let range = document.getElementById("range").value
let selection = document.getElementById("selection").value
let myText = document.getElementById("myText").value
let testChambor = document.getElementById("testChambor")

function changeFontsSize(){

    console.log("test");

    
    document.getElementById("testChambor").style.fontFamily = selection.value
    document.getElementById("testChambor").style.fontSize = (range + "px")
    testChambor.innerHTML = myText.value

    // document.getElementById("text").value = chambor.innerHTML
    // myText.innerHTML = testChambor.value
    // console.log(range.value);
    // console.log(testChambor);
    console.log(myText.value);
}



// chambor.innerHTML = ourText.value

    // range.value = selection.value

    // if(range.value == 1){
    //     ourText.value =  chambor.innerHTML
    // } else if(range.value == 2){

    // } else if(range.value == 3){
        
    // }else{

    // }
    // selection.innerHTML = range.value 
    
    // console.log(range.value);



    // outText.innerHTML = "Hello Friend"
    // ourText.classList.add("ourText")

    // document.getElementById("testChambor") = ourText



