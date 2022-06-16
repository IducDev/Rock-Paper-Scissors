import Picked from "./Componets/Picked.js";
import Victory from "./Componets/Victory.js";



const RenderPicked =(card)=>{

    let $root = document.getElementById("root"), 
    childNo = document.getElementById("root").childNodes[1];
    $root.replaceChild(Picked(card), childNo);
    childNo = document.getElementById("root").childNodes[1];
    setTimeout(()=>{

        $root.replaceChild(Victory(card), childNo);
        // console.log(card)
        
    }, 3000)
}

export default RenderPicked;