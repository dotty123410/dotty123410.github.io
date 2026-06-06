var buttonId = document.getElementById("youtube");
function youtubeLink(){
    if(checkboxToggle==1){window.location.href="https://www.youtube.com/@dotty12340/"}
    else{window.open("https://www.youtube.com/@dotty12340/");

    }
}
buttonId.addEventListener("click",youtubeLink);

var buttonId2 = document.getElementById("instagram");
function instagramLink(){
    if(checkboxToggle==1){
        window.location.href="https://www.instagram.com/bastiaanjonker2013/";
    }
    else{
        window.open("https://www.instagram.com/bastiaanjonker2013/");
    }
}
buttonId2.addEventListener("click",instagramLink);
var checkboxId = document.getElementById("linkOpenType");

var buttonId3 = document.getElementById("curseforge");
function curseforgeLink(){
    if(checkboxToggle==1){
        window.location.href="https://www.curseforge.com/members/dotty123410/";
    }
    else{
        window.open("https://www.curseforge.com/members/dotty123410/");
    }
}
buttonId3.addEventListener("click",curseforgeLink);

var buttonId4 = document.getElementById("patreon");
function patreonLink(){
    if(checkboxToggle==1){
        window.location.href="https://www.patreon.com/c/Dotty123410";
    }
    else{
        window.open("https://www.patreon.com/c/Dotty123410");
    }
}
buttonId4.addEventListener("click",patreonLink);

var checkboxToggle = 0;
function checkboxToggleData() {
    if(checkboxToggle == 0){
        checkboxToggle = 1;
    }
else if(checkboxToggle == 1){
        checkboxToggle = 0;

    }
}
checkboxId.addEventListener("click",checkboxToggleData);

var Admin = document.getElementById("admin")
function AdminJs(){
    window.location.href="file:///C:/Users/R%20Jonker/Desktop/vs-code/Link%20Buttons/Admin/Admin.html";
}
Admin.addEventListener("click",AdminJs)