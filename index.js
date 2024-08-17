let dark = true;
buttons = document.querySelectorAll("button");

document.querySelector(".icon").addEventListener("click", function(){
    if(dark){
        dark = false;
        document.querySelector("body").classList.add("light-body");
        for(let i=0; i<buttons.length; i++){
            buttons[i].classList.add("light-button");
            // buttons[i].addEventListener("mouseover", handleMouseOver);
            // buttons[i].addEventListener("mouseout", handleMouseOut);
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