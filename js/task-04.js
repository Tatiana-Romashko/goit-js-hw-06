let counterValue=0;
const button={
    decrEl: document.querySelector("[data-action='decrement']"),
    incrEl: document.querySelector("[data-action='increment']"),
};
const resultEl=document.querySelector("#value");

function incrementHandler(){
    counterValue+=1;
    resultEl.textContent=counterValue;
};

function decrementHandler(){
    counterValue-=1;
    resultEl.textContent=counterValue;
};


button.decrEl.addEventListener("click", decrementHandler);
button.incrEl.addEventListener("click", incrementHandler);