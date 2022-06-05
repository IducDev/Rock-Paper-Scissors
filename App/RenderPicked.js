import Picked from "./Componets/Picked.js";



const RenderPicked =(e)=>{

    const $root = document.getElementById("root"), 
    childNo = document.getElementById("root").childNodes[1];
    $root.replaceChild(Picked(e), childNo)
    console.log(e)
}

export default RenderPicked;