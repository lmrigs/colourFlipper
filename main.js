document.getElementById("button").addEventListener("click", changeColour)

function changeColour () {
    const options = ["coral", "#25CED1", "#FBDBE1", "#EA526F"];
    const selection = options[Math.floor(Math.random()*options.length)];
     {
        document.getElementById("background").style.backgroundColor = selection;
     }

}

