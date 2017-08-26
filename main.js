window.onload=main;

var soundboxHandler;

function main()
{
    soundboxHandler=new _soundboxHandler;

    document.addEventListener("keypress",(e)=>{
        if (e.key!="Tab")
        {
            return;
        }

        e.preventDefault();
        soundboxHandler.focusNewSB();
    });
}