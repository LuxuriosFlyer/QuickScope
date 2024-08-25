let theme = "dark";
let difficulty = "Normal";
let buttons = document.querySelectorAll("button");
let scores = document.querySelectorAll(".scores h3");
let highscores = {"Easy":0, "Normal":0, "Hard":0};
let containerClasses  = document.querySelector(".container").classList;
let score = 0;
let numCell = 36;
let startTime;
let timerInterval;
let lightInterval;
let blankCells;
let gameOn = false;

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
    if(!gameOn){
        gameOn = true;
        startTimer();
        lightUpCells();
    }
})

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const seconds = Math.floor(elapsedTime / 1000);
      const milliseconds = Math.floor(elapsedTime);
      const formattedTime = `${(seconds % 60)}:${(milliseconds % 100).toString().padStart(2, '0')}`;
  
      document.getElementById("timer").textContent = `Time : ${formattedTime}`;
      if(seconds == 30){
        if(score>highscores[difficulty]){
            highscores[difficulty] = score;
        }
        document.getElementById("timer").textContent = "Time : 30:00";
        if(!document.querySelector(".starting-msg").classList.contains("visible")){
            document.querySelector(".starting-msg").classList.add("visible");
        }
        stopTimer();
      }
    }, 1);
  }
  
  function stopTimer() {
    score = 0;
    document.getElementById("score").innerText = `Score : ${score}`;
    document.getElementById("highscore").innerText = `Highscore: ${highscores[difficulty]} (${difficulty})`;
    gameOn = false;
    clearInterval(timerInterval);
    clearInterval(lightInterval);
    stopCells();
  }

  function lightUpCells(){
    lightInterval = setInterval(() => {
        let ind = Math.floor((Math.random() * blankCells.length));
        if(theme == "dark"){
            if(!blankCells[ind].classList.contains("dark-cell")){
                blankCells[ind].classList.add("dark-cell");
            }
            blankCells[ind].addEventListener("click", function() {
                if(blankCells[ind].classList.contains("dark-cell")){
                    score++;
                    this.classList.remove("dark-cell");
                }
                document.getElementById("score").innerText = `Score : ${score}`;
            })
        }
        else{
            if(!blankCells[ind].classList.contains("light-cell")){
                blankCells[ind].classList.add("light-cell");
            }
            blankCells[ind].addEventListener("click", function() {
                if(blankCells[ind].classList.contains("light-cell")){
                    score++;
                    this.classList.remove("light-cell");
                }
                document.getElementById("score").innerText = `Score : ${score}`;
            })
        }
      }, 300);
  }

  function stopCells(){
    for(let i=0; i<blankCells.length; i++){
        if(blankCells[i].classList.contains("dark-cell")){
            blankCells[i].classList.remove("dark-cell");
        }
        if(blankCells[i].classList.contains("light-cell")){
            blankCells[i].classList.remove("light-cell");
        }
    }
  }