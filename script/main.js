function correctingElementsOnResizeWindow(){
    if(window.screen.width <= 450){
        myNameMobileVersion.style.display = "block";
        myNameInfo.style.display = "none";
    }
    else{
        myNameMobileVersion.style.display = "none";
        myNameInfo.style.display = "block";
    }
}

function dotsNormalizeDisplay(dotsNodas,content) {
    if(window.screen.width <= 450){
        for(let elem of dotsNodas){
            elem.innerText = "\n";
        }
    }
    else{
        for(let i = 0; i < dotsNodas.length; i++){
            dotsNodas[i].innerText = content[i]
        }
    }
    
}
let myNameInfo = document.getElementById("about-me");
let myNameMobileVersion = document.getElementById("about-me-mobile")

// correcting dots in project section
let dotsElem = document.getElementsByClassName('dots');
let contentDotsElement = [];
for(let i = 0;i < dotsElem.length; i++){
    contentDotsElement.push(dotsElem[i].innerText);
}


//settings on page dowload
if(window.screen.width <= 450){
    correctingElementsOnResizeWindow();
    dotsNormalizeDisplay(dotsElem,contentDotsElement);
    //accordeons
    let accordeonsBlocks = document.getElementsByClassName("my-work-experience-position")
    let threeArows = [,,,];
    for(let i = 0; i<threeArows.length; i++){
        threeArows[i] = document.createElement('span');
        // threeArows[i].innerHTML = '&#8744;';
        threeArows[i].innerText = '\u225A'
        threeArows[i].style.color = "grey";
        accordeonsBlocks[i].appendChild(threeArows[i]);
        threeArows[i].style.float = "right"
    } 

    //arrow - down:&#8744; up:&#8743
    let showHiddenContent = document.getElementsByClassName("accordeon")
    for(elem of showHiddenContent){
        elem.classList.toggle("hide")
    }
    for(let i = 0; i < accordeonsBlocks.length; i++){ 
        accordeonsBlocks[i].onclick = ()=>{
            showHiddenContent[i].classList.toggle("hide");
            if(showHiddenContent[i].classList.contains("hide"))
                threeArows[i].innerText = '\u225A';
            else
                threeArows[i].innerText = '\u2227'; 
        }
    }
    
}
else
    correctingElementsOnResizeWindow()

window.onresize = correctingElementsOnResizeWindow;