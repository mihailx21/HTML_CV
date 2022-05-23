if(window.screen.width <= 450){
    //moving my name to another place
    let myNameInfo = document.getElementById("about-me");
    myNameInfo.remove();
    let newParent = document.getElementsByTagName('aside')[0];
    newParent.insertBefore(myNameInfo, newParent.firstChild);
    myNameInfo.classList.add("about-me-new-style");

    // correcting dots in project section
    let some = document.getElementsByClassName('dots');
    for(let elem of some){
        elem.innerText = "\n";
    }

    //accordeons
    let accordeonsBlocks = document.getElementsByClassName("my-work-experience-position")
    //arrow - down:&#8744; up:&#8743
    let showHiddenContent = document.getElementsByClassName("accordeon")
    for(elem of showHiddenContent){
        elem.classList.toggle("hide")
    }
    for(let i = 0; i < accordeonsBlocks.length; i++){
        accordeonsBlocks[i].onclick = ()=>{
            showHiddenContent[i].classList.toggle("hide");
            showHiddenContent[i].nextElementSibling.classList.toggle("show");
        }
    }
}

