

const LocalStorage = () => {

    let scoreObject = {

        computer:0,
        visitor:0
    };

    if(window.localStorage.getItem("score")){
        console.log(JSON.parse(window.localStorage.getItem("score")));
    }else{
        window.localStorage.setItem("score", JSON.stringify(scoreObject));
    }
}
export default LocalStorage;