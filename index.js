let theme = "dark";
let difficulty = "Normal";
let buttons = document.querySelectorAll("button");
let scores = document.querySelectorAll(".scores h3");
let highscores = {"Easy":0, "Normal":0, "Hard":0};
let containerClasses  = document.querySelector(".container").classList;
let score = 0;
let numCell = 36;
let startTime;
let intervalId;
let blankCells;

scores[2].innerText = `Highscore: ${highscores["Normal"]} (${difficulty})`;
containerClasses.add("normal-container");
for(let i=1; i<=numCell; i++){
    let cell = document.createElement("div");
    cell.classList.add("normal-cell");
    document.querySelector(".container").appendChild(cell);
}
blankCells = document.querySelectorAll(".normal-cell");

document.querySelector(".icon").addEventListener("click", function(){
    if(theme === "dark"){
        theme = "light";
        document.querySelector("body").classList.add("light-body");
        for(let i=0; i<buttons.length; i++){
            buttons[i].classList.add("light-button");
        }
        document.querySelector(".icon img").setAttribute("src", "./Icons/red-icon.svg");
    }
    else{
        theme = "dark";
        document.querySelector("body").classList.remove("light-body");
        for(let i=0; i<buttons.length; i++){
            buttons[i].classList.remove("light-button");
        }
        document.querySelector(".icon img").setAttribute("src", "./Icons/green-icon.svg");
    }
    if(!document.querySelector(".starting-msg").classList.contains("visible")){
        document.querySelector(".starting-msg").classList.add("visible");
    }
    document.getElementById("timer").textContent = "Time : --:--";
    stopTimer();
});

buttons[0].addEventListener("click", function(){
    numCell = 16;
    if(difficulty != "Easy"){
        for(let i=1; i<=numCell; i++){
            let cell = document.createElement("div");
            cell.classList.add("easy-cell");
            document.querySelector(".container").appendChild(cell);
        }
    }
    difficulty = "Easy";
    scores[2].innerText = `Highscore: ${highscores["Easy"]} (${difficulty})`;
    if(!document.querySelector(".starting-msg").classList.contains("visible")){
        document.querySelector(".starting-msg").classList.add("visible");
    }
    containerClasses.add("easy-container");
    if(containerClasses.contains("normal-container")){
        containerClasses.remove("normal-container");
    }
    if(containerClasses.contains("hard-container")){
        containerClasses.remove("hard-container");
    }
    const parentElement = document.querySelector(".container");
    const children = parentElement.children;
    for (let i = children.length - 1; i >= 0; i--) {
        const child = children[i];
        if (child.classList.contains('normal-cell') || child.classList.contains('hard-cell')) {
          parentElement.removeChild(child);
        }
      }
    blankCells = document.querySelectorAll(".easy-cell");
    document.getElementById("timer").textContent = "Time : --:--";
    stopTimer();
})
buttons[1].addEventListener("click", function(){
    numCell = 36;
    if(difficulty != "Normal"){
        for(let i=1; i<=numCell; i++){
            let cell = document.createElement("div");
            cell.classList.add("normal-cell");
            document.querySelector(".container").appendChild(cell);
        }
    }
    difficulty = "Normal";
    scores[2].innerText = `Highscore: ${highscores["Normal"]} (${difficulty})`;
    if(!document.querySelector(".starting-msg").classList.contains("visible")){
        document.querySelector(".starting-msg").classList.add("visible");
    }
    containerClasses.add("normal-container");
    if(containerClasses.contains("easy-container")){
        containerClasses.remove("easy-container");
    }
    if(containerClasses.contains("hard-container")){
        containerClasses.remove("hard-container");
    }
    const parentElement = document.querySelector(".container");
    const children = parentElement.children;
    for (let i = children.length - 1; i >= 0; i--) {
        const child = children[i];
        if (child.classList.contains('easy-cell') || child.classList.contains('hard-cell')) {
          parentElement.removeChild(child);
        }
      }
    blankCells = document.querySelectorAll(".normal-cell");
    document.getElementById("timer").textContent = "Time : --:--";
    stopTimer();
})
buttons[2].addEventListener("click", function(){
    numCell = 64;
    if(difficulty != "Hard"){
        for(let i=1; i<=numCell; i++){
            let cell = document.createElement("div");
            cell.classList.add("hard-cell");
            document.querySelector(".container").appendChild(cell);
        }
    }
    difficulty = "Hard";
    scores[2].innerText = `Highscore: ${highscores["Hard"]} (${difficulty})`;
    if(!document.querySelector(".starting-msg").classList.contains("visible")){
        document.querySelector(".starting-msg").classList.add("visible");
    }
    containerClasses.add("hard-container");
    if(containerClasses.contains("normal-container")){
        containerClasses.remove("normal-container");
    }
    if(containerClasses.contains(".easy-container")){
        containerClasses.remove(".easy-container");
    }
    const parentElement = document.querySelector(".container");
    const children = parentElement.children;
    for (let i = children.length - 1; i >= 0; i--) {
        const child = children[i];
        if (child.classList.contains('normal-cell') || child.classList.contains('easy-cell')) {
          parentElement.removeChild(child);
        }
      }
    blankCells = document.querySelectorAll(".hard-cell");
    document.getElementById("timer").textContent = "Time : --:--";
    stopTimer();
})

document.querySelector(".container").addEventListener("click", function(){
    document.querySelector(".starting-msg").classList.remove("visible");
    startTimer();
    lightUpCells();
})

function startTimer() {
    startTime = Date.now();
    intervalId = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const seconds = Math.floor(elapsedTime / 1000);
      const milliseconds = Math.floor(elapsedTime);
      const formattedTime = `${(seconds % 60)}:${(milliseconds % 100).toString().padStart(2, '0')}`;
  
      document.getElementById("timer").textContent = `Time : ${formattedTime}`;
      if(seconds == 30){
        document.getElementById("timer").textContent = "Time : 30:00";
        stopTimer();
      }
    }, 1);
  }
  
  function stopTimer() {
    clearInterval(intervalId);
  }

  function lightUpCells(){

  }