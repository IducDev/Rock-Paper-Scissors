

const Rules =()=>{
    let rules = document.createElement("div");
    // rules.classList.add("rules", "pt-2", "mt-4");
    // rules.style.display="flex";
    // rules.style.justifyContent="start";
    rules.innerHTML=`
    <div class="rules pt-2 mt-4" style="display: flex; justify-content: start;">
        <a class="btn-rules" style="margin: 0 auto;">
        Rules
        </a>
    </div>
    <span style="color: white; display: block; margin-top: 3rem;">This project is developed with love by 
    <a href="https://github.com/IducSoft" target="_blank" style="color: rgb(228, 224, 22);">Isaac Urdaneta</a>
    </span>
    `;
    return rules;
}

export default Rules;