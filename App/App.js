import cardsToPlay from "./Componets/CardsToPlay.js";
import LocalStorage from "./LocalStorage.js";


const App=()=>{
    const $root = document.getElementById("root");
    $root.innerHTML = null;
    $root.appendChild(cardsToPlay())


    LocalStorage();
}

export default App;