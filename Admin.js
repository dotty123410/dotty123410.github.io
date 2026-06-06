var enterKey = document.getElementById("login");
var clearKey = document.getElementById("clear");
var codeData = 0;
var codeDisabled = 0;
function unlocked(){
    if(codeData=4){
        window.open("https://www.youtube.com");
    }
}
var Key1Js = document.getElementById("Key1")
var Key2Js = document.getElementById("Key2")
var Key3Js = document.getElementById("Key3")
var Key4Js = document.getElementById("Key4")
var Key5Js = document.getElementById("Key5")
var Key6Js = document.getElementById("Key6")
var Key7Js = document.getElementById("Key7")
var Key8Js = document.getElementById("Key8")
var Key9Js = document.getElementById("Key9")
Key1Js.addEventListener("click",key1Fn);
Key2Js.addEventListener("click",key2Fn);
Key3Js.addEventListener("click",key3Fn);
Key4Js.addEventListener("click",key4Fn);
Key5Js.addEventListener("click",key5Fn);
Key6Js.addEventListener("click",key6Fn);
Key7Js.addEventListener("click",key7Fn);
Key8Js.addEventListener("click",key8Fn);
Key9Js.addEventListener("click",key9Fn);

function key1Fn(){codeDisabled = 1}
function key2Fn(){codeDisabled = 1}
function key3Fn(){codeDisabled = 1}
function key4Fn(){
    if(codeData == 0) {
        codeData = 1
    }
    else {
        codeDisabled = 1
    }
}
function key5Fn(){
    
}
function key6Fn(){codeDisabled = 1}
function key7Fn(){

}
function key8Fn(){

}
function key9Fn(){codeDisabled = 1}
function enter(){
    if(codeData == 4 && codeDisabled == 0){
        window.open("https:www.youtube.com");
    }
}
function clear(){
    codeData = 0
    codeDisabled = 0
}
clearKey.addEventListener("click",clear)
enterKey.addEventListener("click",enter)

Code:4587