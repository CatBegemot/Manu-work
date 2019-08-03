function startMenu() {
    document.getElementById("pictMenu").src = imgPath + "menuOn.png";
    document.getElementById("pictMain").src = imgPath + "main.png";
    document.getElementById("pictSecond").src = imgPath + "second.png";
    document.getElementById("pictThird").src = imgPath + "third.png";
    return;
};

function startMain() {
    document.getElementById("pictMenu").src = imgPath + "menuOn.png";
    document.getElementById("pictMain").src = imgPath + "mainOn.png";
    document.getElementById("pictSecond").src = imgPath + "second.png";
    document.getElementById("pictThird").src = imgPath + "third.png";
    return;
};

function startMenuOff() {
    document.getElementById("pictMenu").src = imgPath + "menu.png";
    return;
};

function startLink() {
    window.location.href = "menu.html";
    return;
};

function startLinkMain() {
    window.location.href = "main.html";
    return;
};
