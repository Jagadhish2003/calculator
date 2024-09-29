
// Javascript code
function appendtodisplay(value) {
document.getElementById('display').value +=value;
}

function clearDisplay(){
document.getElementById('display').value='';
}

function calculateResult(){
var expression=document.getElementById('display').value;
var result;
try{
result=eval(expression);
document.getElementById('display').value=result;
}
catch{
result=console.error(expression);

document.getElementById('display').value=Error;
        
}
}
