
const cardsToPlay=()=>{

    const play = document.createElement("div");
    play.classList.add("play");
    play.style.color="white";
    play.innerHTML=`
        <div class="row">

            <div class="col-6" >
            
                <div class="img-play paper" >
                    <img src="./images/document.png" alt="paper" id="paper">
                </div>

            </div>

            <div class="col-6" >
                <div class="img-play scissors" >
                    <img src="./images/scissors.png" alt="Scissors" id="scissors">
                </div>
            </div>

            <div class="col-12 mt-2" >
                <div class="img-play rock" >
                    <img src="./images/stone.png" alt="Rock" id="rock">
                </div>
            </div>
        </div>
    
    `;
    return play;
}


export default cardsToPlay;