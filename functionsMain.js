function startMain() {
    document.getElementById("imgMenu").src = imgPath + "menuOn.png";
    document.getElementById("imgMain").src = imgPath + "mainOn.png";
    document.getElementById("imgSecond").src = imgPath + "second.png";
    document.getElementById("imgThird").src = imgPath + "third.png";
    return;
};



function startLinkMenu() {
    window.location.href = "menu.html";
    return;
};

// - Create div 'logo' pos:0,0 size:160,160
// - Create div 'header' pos:160,0 size:640,160
// - Create div 'menu' pos:0,160 size:160,480
// - Create div 'main' pos:160,160 size:640,480
// - Create div 'footer' pos:0,640 size:800,160
// - Color borders of divs
 