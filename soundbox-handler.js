/*
    array-element soundboxes
    element soundBoxPoint

    void addNewSoundBox()
    void stopAll()
    void focusNewSB()
*/

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

        this.soundboxes[this.soundboxes.length-1].addEventListener("playing",(e)=>{
            for (var x=0;x<this.soundboxes.length;x++)
            {
                if (this.soundboxes[x]==e.currentTarget)
                {
                    continue;
                }

                this.soundboxes[x].classList.add("unselectable");
            }
        });

        this.soundboxes[this.soundboxes.length-1].addEventListener("requeststop",(e)=>{
            this.stopAll();
        });

        this.soundBoxPoint.appendChild(this.soundboxes[this.soundboxes.length-1]);
    }

    stopAll()
    {
        for (var x=0;x<this.soundboxes.length;x++)
        {
            this.soundboxes[x].vstop();
            this.soundboxes[x].classList.remove("unselectable");
        }
    }

    focusNewSB()
    {
        this.soundboxes[this.soundboxes.length-1].sbFocus();
    }
}