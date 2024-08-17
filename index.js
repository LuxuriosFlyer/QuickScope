let dark = true;
let difficulty = "Normal";
let buttons = document.querySelectorAll("button");
let scores = document.querySelectorAll(".scores h3");
let highscores = {"Easy":0, "Normal":0, "Hard":0};

scores[2].innerText = `Highscore: ${highscores["Normal"]} (${difficulty})`;

document.querySelector(".icon").addEventListener("click", function(){
    if(dark){
        dark = false;
        document.querySelector("body").classList.add("light-body");
        for(let i=0; i<buttons.length; i++){
            buttons[i].classList.add("light-button");
        }
        document.querySelector(".icon img").setAttribute("src", "./Icons/red-icon.svg");
    }
    else{
        dark = true;
        document.querySelector("body").classList.remove("light-body");
        for(let i=0; i<buttons.length; i++){
            buttons[i].classList.remove("light-button");
        }
        document.querySelector(".icon img").setAttribute("src", "./Icons/green-icon.svg");
    }
});

buttons[0].addEventListener("click", function(){
    difficulty = "Easy";
    scores[2].innerText = `Highscore: ${highscores["Easy"]} (${difficulty})`;
    if(!document.querySelector(".starting-msg").classList.contains("visible")){
        document.querySelector(".starting-msg").classList.add("visible");
    }
})
buttons[1].addEventListener("click", function(){
    difficulty = "Normal";
    scores[2].innerText = `Highscore: ${highscores["Normal"]} (${difficulty})`;
    if(!document.querySelector(".starting-msg").classList.contains("visible")){
        document.querySelector(".starting-msg").classList.add("visible");
    }
})
buttons[2].addEventListener("click", function(){
    difficulty = "Hard";
    scores[2].innerText = `Highscore: ${highscores["Hard"]} (${difficulty})`;
    if(!document.querySelector(".starting-msg").classList.contains("visible")){
        document.querySelector(".starting-msg").classList.add("visible");
    }
})

document.querySelector(".container").addEventListener("click", function(){
    document.querySelector(".starting-msg").classList.remove("visible");
})