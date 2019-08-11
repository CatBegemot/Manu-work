function startMenu() {
    document.getElementById("divImg").src = imgPath + "menuOn.png";
    document.getElementById("divImg").src = imgPath + "main.png";
    document.getElementById("divImg").src = imgPath + "second.png";
    document.getElementById("divImg").src = imgPath + "third.png";
    return;
};

function startMain() {
    document.getElementById("imgMenu").src = imgPath + "menuOn.png";
    document.getElementById("imgMain").src = imgPath + "mainOn.png";
    document.getElementById("imgSecond").src = imgPath + "second.png";
    document.getElementById("imgThird").src = imgPath + "third.png";
    return;
};

function startSecond() {
    document.getElementById("imgMenu").src = imgPath + "menuOn.png";
    document.getElementById("imgMain").src = imgPath + "main.png";
    document.getElementById("imgSecond").src = imgPath + "secondOn.png";
    document.getElementById("imgThird").src = imgPath + "third.png";
    return;
};

function startThird() {
    document.getElementById("imgMenu").src = imgPath + "menuOn.png";
    document.getElementById("imgMain").src = imgPath + "main.png";
    document.getElementById("imgSecond").src = imgPath + "second.png";
    document.getElementById("imgThird").src = imgPath + "thirdOn.png";
    return;
};

function startMenuOff() {
    document.getElementById("imgMenu").src = imgPath + "menu.png";
    document.getElementById("imgMain").src = imgPath + "main.png";
    document.getElementById("imgSecond").src = imgPath + "second.png";
    document.getElementById("imgThird").src = imgPath + "third.png";
    return;
};

function startLinkMenu() {
    window.location.href = "menu.html";
    return;
};

function startLinkMain() {
    window.location.href = "main.html";
    return;
};

function startLinkSecond() {
    window.location.href = "second.html";
    return;
};

function startLinkThird() {
    window.location.href = "third.html";
    return;
};
