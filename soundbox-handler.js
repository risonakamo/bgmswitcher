/*
    array-element soundboxes
    element soundBoxPoint

    int playing

    void addNewSoundBox()
    void stopAll()
    void focusNewSB()

    recreateNewSB(element item): delete the given SB and create new one
*/

class _soundboxHandler
{
    constructor()
    {
        this.soundboxes=[];
        this.soundBoxPoint=document.querySelector(".soundboxes");

        this.addNewSoundBox();
    }

    addNewSoundBox(url)
    {
        this.soundboxes.push(new soundBox(url));

        if (this.playing)
        {
            this.soundboxes[this.soundboxes.length-1].classList.add("unselectable");
        }

        //soundbox loaded event: add new empty soundbox
        // this.soundboxes[this.soundboxes.length-1].addEventListener("loaded",(e)=>{
        //     this.addNewSoundBox();
        // });

        //soundbox is playing: add unselectable to all other soundboxes
        this.soundboxes[this.soundboxes.length-1].addEventListener("playing",(e)=>{
            this.playing=1;
            for (var x=0;x<this.soundboxes.length;x++)
            {
                if (this.soundboxes[x]==e.currentTarget)
                {
                    continue;
                }

                this.soundboxes[x].classList.add("unselectable");
            }
        });

        // //clicked on soundbox while playing
        // this.soundboxes[this.soundboxes.length-1].addEventListener("requeststop",(e)=>{
        //     this.stopAll();
        // });

        if (url)
        {
            this.soundBoxPoint.insertBefore(this.soundboxes[this.soundboxes.length-1],this.soundboxes[this.soundboxes.length-2]);
        }

        else
        {
            this.soundBoxPoint.appendChild(this.soundboxes[this.soundboxes.length-1]);
        }
    }

    stopAll()
    {
        this.playing=0;
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

    recreateNewSB(item)
    {
        this.soundboxes.splice(this.soundboxes.indexOf(item),1);
        this.soundBoxPoint.removeChild(this.soundBoxPoint.lastChild);
        this.addNewSoundBox();
    }
}