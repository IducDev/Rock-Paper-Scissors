
const Victory =(card)=>{

    let victory = document.createElement("div");
    victory.classList.add("victory", "pt-3");

    let cardRandom = Math.floor(Math.random() * 100 - 1),
    cardComputer =0;

    

    if(cardRandom >=1 || cardRandom <= 33){

        console.log(cardRandom, "piedra")
        if(cardRandom >=34 || cardRandom <= 66){

            console.log(cardRandom, "papel")

            if(cardRandom >=67 || cardRandom <= 99){

                console.log(cardRandom, "Tijeras")
            }
        }

    }

    victory.innerHTML=`

        <div class="victory pt-3">
            <div class="row">
                <div class="col-6" style="text-align: center;">
                    <h2 style="color: white; font-size: 1rem;" class="mb-2">You Picked</h2>

                    <div class="img-play paper">
                    <img src="./images/icon-paper.svg" alt="paper">
                    </div>
                </div>

                <div class="col-6" style="text-align: center;">
                    <h2 style="color: white; font-size: 1rem;" class="mb-2">You Picked</h2>

                    <div class="img-play paper">
                    <img src="./images/icon-paper.svg" alt="paper">
                    </div>
                </div>

                <div class="col-12 mt-4"  style="text-align: center;">
                    <h2 style="text-align: center; color: white; font-size: 2.5em;">I´ts draw</h2>

                    <div class="btn mt-1 play-again" id="play-again">
                        Play Again
                    </div>

                </div>

            </div>
        </div>
    `;
    

    return victory;
}

export default Victory;