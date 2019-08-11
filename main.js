var divImg = document.createElement("img");
document.body.appendChild(divImg);
divImg.id = "pictMenu";
divImg.style.position = "absolute";
divImg.style.zIndex = -1;
divImg.style.top = "10px"; 
divImg.style.left = "10px";
divImg.src = imgPath + "menuOn.png";

divImg.id = "pictMain";
divImg.style.position = "absolute";
divImg.style.zIndex = 0;
divImg.style.top = "45px"; 
divImg.style.left = "10px";
divImg.src = imgPath + "main.png";

divImg.id = "pictSecond";
divImg.style.position = "absolute";
divImg.style.zIndex = 0;
divImg.style.top = "80px"; 
divImg.style.left = "10px";
divImg.src = imgPath + "second.png";

divImg.id = "pictSecond";
divImg.style.position = "absolute";
divImg.style.zIndex = 0;
divImg.style.top = "115px"; 
divImg.style.left = "10px";
divImg.src = imgPath + "third.png";

var linkMenu = document.createElement("A");
pictMenu.onmouseover = function() {startMain()};
pictMenu.onmouseover = function() {startSecond()};
pictMenu.onmouseover = function() {startThird()};
pictMenu.onmouseout = function() {startMainOff()};
pictMenu.onclick = function() {startLinkMain()};

