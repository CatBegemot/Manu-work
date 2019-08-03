var pictMenu = document.createElement("img");
document.body.appendChild(pictMenu);
pictMenu.id = "pictMenu";
pictMenu.style.position = "absolute";
pictMenu.style.zIndex = -1;
pictMenu.style.top = "10px"; 
pictMenu.style.left = "10px";
pictMenu.src = imgPath + "menuOn.png";

document.body.appendChild(pictMain);
pictMain.id = "pictMain";
pictMain.style.position = "absolute";
pictMain.style.zIndex = 0;
pictMain.style.top = "45px"; 
pictMain.style.left = "10px";
pictMain.src = imgPath + "main.png";

var pictSecond = document.createElement("img");
document.body.appendChild(pictSecond);
pictSecond.id = "pictSecond";
pictSecond.style.position = "absolute";
pictSecond.style.zIndex = 0;
pictSecond.style.top = "80px"; 
pictSecond.style.left = "10px";
pictSecond.src = imgPath + "second.png";

var pictThird = document.createElement("img");
document.body.appendChild(pictThird);
pictThird.id = "pictThird";
pictThird.style.position = "absolute";
pictThird.style.zIndex = 0;
pictThird.style.top = "115px"; 
pictThird.style.left = "10px";
pictThird.src = imgPath + "third.png";

var linkMenu = document.createElement("A");
pictMenu.onmouseover = function() {startMain()};
pictMenu.onmouseover = function() {startSecond()};
pictMenu.onmouseover = function() {startThird()};
pictMenu.onmouseout = function() {startMainOff()};
pictMenu.onclick = function() {startLinkMain()};

