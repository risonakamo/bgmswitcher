class _soundboxHandler
{
    constructor()
    {
        this.soundboxes=[];
        this.soundBoxPoint=document.querySelector(".soundboxes");

        this.addNewSoundBox();
    }

    addNewSoundBox()
    {
        this.soundboxes.push(new soundBox);

        this.soundboxes[this.soundboxes.length-1].addEventListener("loaded",(e)=>{
            this.addNewSoundBox();
        });

        this.soundBoxPoint.appendChild(this.soundboxes[this.soundboxes.length-1]);
    }

    stopAll()
    {
        for (var x=0;x<this.soundboxes.length;x++)
        {
            this.soundboxes[x].vstop();
        }
    }
}