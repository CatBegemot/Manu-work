var pictMenu = document.createElement("img");
document.body.appendChild(pictMenu);
pictMenu.id = "pictMenu";
pictMenu.style.position = "absolute";
pictMenu.style.zIndex = -1;
pictMenu.style.top = "10px"; 
pictMenu.style.left = "10px";
pictMenu.src = imgPath + "menu.png";

var linkMenu = document.createElement("A");
pictMenu.onmouseover = function() {startMenu()};
pictMenu.onmouseout = function() {startMenuOff()};
pictMenu.onmouseover = function() {startLink()};
pictMenu.onclick = function() {startLink()};