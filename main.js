window.onload=main;

var soundboxHandler;

function main()
{
    soundboxHandler=new _soundboxHandler;

    var stopAll=document.querySelector(".stop-button");

    stopAll.addEventListener("click",(e)=>{
        soundboxHandler.stopAll();
    });
}