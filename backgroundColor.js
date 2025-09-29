let modeBtn = document.querySelector("#mode");

let currMode = "light";
modeBtn.addEventListener("click", () => {
    // console.log("you are changing backgorund color");
    if(currMode == "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor="black";
    }else {
        currMode = "light";
         document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currMode);

});