
const Picked=()=>{

    let picked = document.createElement("div");
    picked.classList.add("picket", pt-3);

    picked.innerHTML=`
    
    <div class="row">

        <div class="col-6" style="text-align: center;"> 
          <h2 style="color: white; font-size: 1rem;" class="mb-4">You Picked</h2>

          <div class="img-play paper">
            <img src="./images/icon-paper.svg" alt="paper">
          </div>
        </div>
        <div class="col-6 house-picked" style="text-align: center;">
          <h2 style="color: white; font-size: 1rem;" class="mb-4">House Picked</h2>

          <div class="animation effect-scale">

          </div>

        </div>

    </div>
    
    `;

    return picked;
}


export default Picked;