let colorText = document.getElementById("text-change-color");
let colorTitle = document.getElementById("color-heading");
let loopy = document.getElementById("loopy-text");
let colorIndex = 0;
let colorIndexTitle = 0;
let colorsArr = ["#41ead4","#fbff12"," #ff206e"];
let colorsArr2 = ["#41ead4","#ffffff","#fbff12"," #ff206e", "#428EEB"];
function changeColorFn(){
    if(colorIndex > colorsArr.length - 1){
        colorIndex = 0;
    }
    colorText.style.color = colorsArr[colorIndex];
    colorIndex++;   
}

setInterval(changeColorFn, 500);

function changeColorTitleFn(){
    if(colorIndexTitle > colorsArr2.length - 1){
        colorIndexTitle = 0;
    }
    colorTitle.style.color = colorsArr2[colorIndexTitle];
    colorIndexTitle++;   
}

setInterval(changeColorTitleFn, 200);

loopy.innerText = "Loops";
let loopNum = 0;
let addToLoop = true;

function modifyLoopy(){
    if(addToLoop == true){
        incLoopy();
    }
    else{
        decLoopy();
    }
}

function incLoopy(){
    loopNum++;
    if(loopNum == 7){
        addToLoop = false;
    }
    switch(loopNum){
        case 0:
            loopy.innerText = "Loops";
            break;
        case 1:
            loopy.innerText = "Looops";
            break;
        case 2:
            loopy.innerText = "Loooops";
            break;
        case 3:
            loopy.innerText = "Looooops";
            break;
        case 4:
            loopy.innerText = "Loooooops";
            break;
        case 5:
            loopy.innerText = "Looooooops";
            break;
        case 6:
            loopy.innerText = "Loooooooops";
            break;
        case 7:
            loopy.innerText = "Looooooooops";
            break;
        default:
            loopy.innerText = "Loops";
            break;
    }   
}

function decLoopy(){
    loopNum--;
    if(loopNum == 0){
        addToLoop = true;
    }
    switch(loopNum){
        case 0:
            loopy.innerText = "Loops";
            break;
        case 1:
            loopy.innerText = "Looops";
            break;
        case 2:
            loopy.innerText = "Loooops";
            break;
        case 3:
            loopy.innerText = "Looooops";
            break;
        case 4:
            loopy.innerText = "Loooooops";
            break;
        case 5:
            loopy.innerText = "Looooooops";
            break;
        case 6:
            loopy.innerText = "Loooooooops";
            break;
        case 7:
            loopy.innerText = "Looooooooops";
            break;
        default:
            loopy.innerText = "Loops";
            break;
    }   
}

setInterval(modifyLoopy, 150);