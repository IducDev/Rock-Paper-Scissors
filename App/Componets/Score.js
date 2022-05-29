
const score=(scoreObject)=>{

    const score = document.createElement("div");

    score.classList.add("score");

    score.innerHTML = `
    
        <div class="row">

            <div class="col-6">
                <div>
                    <h2>Rock</h2>
                    <h2>Paper</h2>
                    <h2>Scissors</h2>
                </div>
            </div>

            <div class="col-6">
                <div style="background-color: white; width:100%; height: 100%; border-radius: 20px; color: black; padding: 1rem;">
                    <p style="text-align: center; margin-bottom: 1rem; color: hsl(229, 64%, 46%); font-size: 1rem;">
                    Score
                    </p>

                    <div class="row">
                    <div class="col-12" style="text-align: center;">
                        Computer:
                        <p>${scoreObject.computer}</p>
                    </div>
                    <div class="col-12" style="text-align: center;">
                        Visitor:
                        <p>${scoreObject.visitor}</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    
    `;

    return score;
}

export default score;