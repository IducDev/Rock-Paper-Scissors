import score from "./Componets/Score.js";
const LocalStorage = () => {
    // Esta funcionalidad me permite pintar las puntuaciones en pantalla
    let scoreObject = {
        computer:0,
        visitor:0
    };
    if(window.localStorage.getItem("score")){
        console.log(JSON.parse(window.localStorage.getItem("score")));
        let scoreToRender= JSON.parse(window.localStorage.getItem("score"));
        const $root = document.getElementById("root");
        $root.insertAdjacentElement("afterbegin", score(scoreToRender));
    }else{
        window.localStorage.setItem("score", JSON.stringify(scoreObject));
        const $root = document.getElementById("root");
        $root.insertAdjacentElement("afterbegin", score(scoreObject))
    }
}
export default LocalStorage;