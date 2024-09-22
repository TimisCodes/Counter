const number = document.getElementById("number");

let timer = null;
let clock = 0;

function increase(){
    stop()
    timer = setInterval(()=>{
        clock++;
        number.innerHTML = clock;
    },100);
}
function decrease(){
    stop()
    timer = setInterval(()=>{
        clock--;
        number.innerHTML = clock;
    },100);
}
function reset(){
    stop()
    clearInterval(timer);
    clock = 0;
    number.innerHTML = "0";
}
function stop(){
    if(timer !== null){
        clearInterval(timer);
        timer = null;
    }
}