var divImg = document.createElement("div");
document.body.appendChild(divImg);
var imgStart = document.createElement("img");
divImg.appendChild(imgStart);
imgStart.style.position = "absolute";
imgStart.style.zIndex = -1;
imgStart.style.top = "10px"; 
imgStart.style.left = "10px";
imgStart.src = imgPath + "menu.png";

var linkMenu = document.createElement("A");
divImg.onmouseover = function() {startMenu()};
divImg.onmouseout = function() {startMenuOff()};
divImg.onmouseover = function() {startLinkMenu()};
divImg.onclick = function() {startLinkMenu()};