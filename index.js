import App from "./App/App.js"
import RenderPicked from "./App/RenderPicked.js";


document.addEventListener("DOMContentLoaded", (e)=>{
    App();
});

document.addEventListener("click", (e)=>{
    if(e.target.id=="rock" || e.target.id=="paper" || e.target.id=="scissors"){

        console.log(e.target)
        RenderPicked(e.target.id)
    }

    if(e.target.id=="play-again"){

        location.reload();
    }
})