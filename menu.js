var divImg = document.createElement("div");
document.body.appendChild(divImg);

var imgMenu = document.createElement("img");
divImg.appendChild(imgMenu);
imgMenu.style.position = "absolute";
imgMenu.style.zIndex = -1;
imgMenu.style.top = "10px"; 
imgMenu.style.left = "10px";
imgMenu.src = imgPath + "menuOn.png";

var imgMain = document.createElement("img");
divImg.appendChild(imgMain);
imgMain.style.position = "absolute";
imgMain.style.zIndex = 1;
imgMain.style.top = "45px"; 
imgMain.style.left = "10px";
imgMain.src = imgPath + "main.png";

var imgSecond = document.createElement("img");
divImg.appendChild(imgSecond);
imgSecond.style.position = "absolute";
imgSecond.style.zIndex = 1;
imgSecond.style.top = "80px"; 
imgSecond.style.left = "10px";
imgSecond.src = imgPath + "second.png";

var imgThird = document.createElement("img");
divImg.appendChild(imgThird);
imgThird.style.position = "absolute";
imgThird.style.zIndex = 1;
imgThird.style.top = "115px"; 
imgThird.style.left = "10px";
imgThird.src = imgPath + "third.png";

var linkMenu = document.createElement("A");

imgMain.onmouseover = function() {startMain()};
imgSecond.onmouseover = function() {startSecond()};
imgThird.onmouseover = function() {startThird()};
imgMenu.onmouseout = function() {startMainOff()};
imgMain.onclick = function() {startLinkMain()};

