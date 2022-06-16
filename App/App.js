import cardsToPlay from "./Componets/CardsToPlay.js";
import rules from "./Componets/Rules.js";
import LocalStorage from "./LocalStorage.js";
const App=()=>{
    const $root = document.getElementById("root");
    $root.innerHTML = null;
    $root.appendChild(cardsToPlay());
    $root.appendChild(rules());
    LocalStorage();
}
export default App;