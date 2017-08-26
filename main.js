window.onload=main;

var _soundboxes;

function main()
{
    _soundboxes=document.querySelectorAll("sound-box");

    var stopAll=document.querySelector(".stop-button");

    stopAll.addEventListener("click",(e)=>{
        for (var x=0;x<_soundboxes.length;x++)
        {
            _soundboxes[x].vstop();
        }
    });
}
