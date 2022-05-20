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
}

