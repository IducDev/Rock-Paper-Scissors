
const cardsToPlay=()=>{

    const play = document.createElement("div");
    play.classList.add("play");
    play.style.color="white";
    play.innerHTML=`

        <div class="row">

            <div class="col-6">
            
                <div class="img-play paper">
                    <img src="./images/icon-paper.svg" alt="paper">
                </div>

            </div>

            <div class="col-6">
                <div class="img-play scissors">
                    <img src="./images/icon-scissors.svg" alt="Scissors">
                </div>
            </div>

            <div class="col-12 mt-2">
                <div class="img-play rock">
                    <img src="./images/icon-rock.svg" alt="Rock">
                </div>
            </div>
        </div>
    
    `;

    return play;

}


export default cardsToPlay;