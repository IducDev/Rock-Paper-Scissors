import modifiedScore from "../ModifiedScore.js";



const Victory =(card)=>{

    let victory = document.createElement("div");
    victory.classList.add("victory", "pt-3");

    let cardRandom = Math.floor(Math.random() * 100 - 1),
    cardComputer ="";


    let cardsToRender={
        paper: `

            <div class="img-play paper">
                <img src="./images/document.png" alt="paper">
            </div>
        `,
        rock: `
        
            <div class="img-play rock">
                <img src="./images/stone.png" alt="rock">
            </div>
        `,
        scissors: `
        
            <div class="img-play scissors">
                <img src="./images/scissors.png" alt="scissors">
            </div>
        `
    };

    


    if(cardRandom >=1 && cardRandom <= 33){
        cardComputer = "rock";
        console.log(`tu carta a jugar es: ${card}, oponente: ${cardComputer}`)

    }else if(cardRandom >=34 && cardRandom <= 66){
        cardComputer="paper";
        console.log(`tu carta a jugar es: ${card}, oponente: ${cardComputer}`)

    }else if(cardRandom >=67 && cardRandom <= 99){
        cardComputer="scissors";
        console.log(`tu carta a jugar es: ${card}, oponente: ${cardComputer}`)
    }

    // Aqui finalmente pintamos en pantalla las cartas seleccionadas

  
    // Paper
    if(card == "paper" && cardComputer == "rock"){
        // Win

        victory.innerHTML=`
            <div class="victory pt-3">
                <div class="row">
                    <div class="col-6" style="text-align: center;">
                        <h2 style="color: white; font-size: 1rem;" class="mb-2">You Picked</h2>

                        ${cardsToRender.paper}
                    </div>

                    <div class="col-6" style="text-align: center;">
                        <h2 style="color: white; font-size: 1rem;" class="mb-2">Computer Picked</h2>

                        ${cardsToRender.rock}
                    </div>

                    <div class="col-12 mt-4"  style="text-align: center;">
                        <h2 style="text-align: center; color: white; font-size: 2.5em;">You Win</h2>

                        <div class="btn mt-1 play-again" id="play-again">
                            Play Again
                        </div>

                    </div>

                </div>
            </div>
        `;

        // Aqui se invoca la funcion que modifica la puntuación en el localStorage y repinta los puntos en pantalla
        modifiedScore(1,0)

    }else if(card =="paper" && cardComputer=="scissors"){



        // Lose
        victory.innerHTML=`

            <div class="victory pt-3">
                <div class="row">
                    <div class="col-6" style="text-align: center;">
                        <h2 style="color: white; font-size: 1rem;" class="mb-2">You Picked</h2>

                        ${cardsToRender.paper}
                    </div>

                    <div class="col-6" style="text-align: center;">
                        <h2 style="color: white; font-size: 1rem;" class="mb-2">Computer Picked</h2>

                        ${cardsToRender.scissors}
                    </div>

                    <div class="col-12 mt-4"  style="text-align: center;">
                        <h2 style="text-align: center; color: white; font-size: 2.5em;">You Lose</h2>

                        <div class="btn mt-1 play-again" id="play-again">
                            Play Again
                        </div>

                    </div>

                </div>
            </div>
        `;
        modifiedScore(0,1)

    }else if(card =="paper" && cardComputer=="paper"){


        // I´ts draw
        victory.innerHTML=`

            <div class="victory pt-3">
                <div class="row">
                    <div class="col-6" style="text-align: center;">
                        <h2 style="color: white; font-size: 1rem;" class="mb-2">You Picked</h2>

                        ${cardsToRender.paper}
                    </div>

                    <div class="col-6" style="text-align: center;">
                        <h2 style="color: white; font-size: 1rem;" class="mb-2">Computer Picked</h2>

                        ${cardsToRender.paper}
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

    }

    // Rock
    if(card =="rock" && cardComputer=="paper"){

        // lose

        victory.innerHTML=`

            <div class="victory pt-3">
                <div class="row">
                    <div class="col-6" style="text-align: center;">
                        <h2 style="color: white; font-size: 1rem;" class="mb-2">You Picked</h2>

                        ${cardsToRender.rock}
                    </div>

                    <div class="col-6" style="text-align: center;">
                        <h2 style="color: white; font-size: 1rem;" class="mb-2">Computer Picked</h2>

                        ${cardsToRender.paper}
                    </div>

                    <div class="col-12 mt-4"  style="text-align: center;">
                        <h2 style="text-align: center; color: white; font-size: 2.5em;">You Lose</h2>

                        <div class="btn mt-1 play-again" id="play-again">
                            Play Again
                        </div>

                    </div>

                </div>
            </div>
        `;
        modifiedScore(0,1)

    }else if(card =="rock" && cardComputer=="scissors"){

        // win

        victory.innerHTML=`

            <div class="victory pt-3">
                <div class="row">
                    <div class="col-6" style="text-align: center;">
                        <h2 style="color: white; font-size: 1rem;" class="mb-2">You Picked</h2>

                        ${cardsToRender.rock}
                    </div>

                    <div class="col-6" style="text-align: center;">
                        <h2 style="color: white; font-size: 1rem;" class="mb-2">Computer Picked</h2>

                        ${cardsToRender.scissors}
                    </div>

                    <div class="col-12 mt-4"  style="text-align: center;">
                        <h2 style="text-align: center; color: white; font-size: 2.5em;">You Win</h2>

                        <div class="btn mt-1 play-again" id="play-again">
                            Play Again
                        </div>

                    </div>

                </div>
            </div>
        `;
        modifiedScore(1,0)

    }else if(card=="rock" && cardComputer=="rock"){


        // it´s draw
        victory.innerHTML=`

        <div class="victory pt-3">
            <div class="row">
                <div class="col-6" style="text-align: center;">
                    <h2 style="color: white; font-size: 1rem;" class="mb-2">You Picked</h2>

                    ${cardsToRender.rock}
                </div>

                <div class="col-6" style="text-align: center;">
                    <h2 style="color: white; font-size: 1rem;" class="mb-2">Computer Picked</h2>

                    ${cardsToRender.rock}
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

    }

    // Scissors

    if(card=="scissors" && cardComputer=="paper"){

        // win

        victory.innerHTML=`

            <div class="victory pt-3">
                <div class="row">
                    <div class="col-6" style="text-align: center;">
                        <h2 style="color: white; font-size: 1rem;" class="mb-2">You Picked</h2>

                        ${cardsToRender.scissors}
                    </div>

                    <div class="col-6" style="text-align: center;">
                        <h2 style="color: white; font-size: 1rem;" class="mb-2">Computer Picked</h2>

                        ${cardsToRender.paper}
                    </div>

                    <div class="col-12 mt-4"  style="text-align: center;">
                        <h2 style="text-align: center; color: white; font-size: 2.5em;">You Win</h2>

                        <div class="btn mt-1 play-again" id="play-again">
                            Play Again
                        </div>

                    </div>

                </div>
            </div>
        `;
        modifiedScore(1,0);

    }else if(card=="scissors" && cardComputer=="rock"){

        // Lose

        victory.innerHTML=`

            <div class="victory pt-3">
                <div class="row">
                    <div class="col-6" style="text-align: center;">
                        <h2 style="color: white; font-size: 1rem;" class="mb-2">You Picked</h2>

                        ${cardsToRender.scissors}
                    </div>

                    <div class="col-6" style="text-align: center;">
                        <h2 style="color: white; font-size: 1rem;" class="mb-2">Computer Picked</h2>

                        ${cardsToRender.rock}
                    </div>

                    <div class="col-12 mt-4"  style="text-align: center;">
                        <h2 style="text-align: center; color: white; font-size: 2.5em;">You Win</h2>

                        <div class="btn mt-1 play-again" id="play-again">
                            Play Again
                        </div>

                    </div>

                </div>
            </div>
            `;
        modifiedScore(0,1)
    }else if(card=="scissors" && cardComputer=="scissors"){

        // it´s draw
        victory.innerHTML=`

        <div class="victory pt-3">
            <div class="row">
                <div class="col-6" style="text-align: center;">
                    <h2 style="color: white; font-size: 1rem;" class="mb-2">You Picked</h2>

                    ${cardsToRender.scissors}
                </div>

                <div class="col-6" style="text-align: center;">
                    <h2 style="color: white; font-size: 1rem;" class="mb-2">Computer Picked</h2>

                    ${cardsToRender.scissors}
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

    }

    
    

    return victory;
}

export default Victory;