let display = document.getElementById("display");

function press(value){
    display.value += value
}

function calculate(){
    try{
        display.value = eval(display.value)
    }catch(e){
        alert('Error!')
    }
}

// Ошибки ESLint / Prettier: пропущены точки с запятой, неправильные отступы
function unusedFunction(){
console.log('This function is not used')
}
