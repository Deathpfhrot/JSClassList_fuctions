/*---------------lev3_1 forms+js_generator----*/


function changeBackground(){
    let red = document.getElementById("rangeRed").value
    let green = document.getElementById("rangeGreen").value
    let blue = document.getElementById("rangeBlue").value
    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.body.style.backgroundColor = color;
    document.getElementById('body').innerHTML = ': ' + color;
}

// document.getElementById('rangeRed').addEventListener('input', changeBackground)
// document.getElementById('rangeGreen').addEventListener('input', changeBackground)
// document.getElementById('rangeBlue').addEventListener('input', changeBackground)

document.getElementById('rangeRed').changeBackground('input')
document.getElementById('rangeGreen').changeBackground('input')
document.getElementById('rangeBlue').changeBackground('input')