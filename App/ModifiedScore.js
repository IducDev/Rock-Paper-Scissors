import score from "./Componets/Score.js";


const modifiedScore=(visitorScore, computerScore)=>{

    
    let scoreToRender= JSON.parse(window.localStorage.getItem("score"));
    if(visitorScore > computerScore){

        scoreToRender.visitor += 1;
    }else{

        scoreToRender.computer += 1;
    }
    window.localStorage.setItem("score", JSON.stringify(scoreToRender));
    const $root = document.getElementById("root");
    $root.insertAdjacentElement("afterbegin", score(scoreToRender));
    console.log(scoreToRender);
}

export default modifiedScore;