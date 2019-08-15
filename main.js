var divLogo = document.createElement("div");
document.body.appendChild(divLogo);

var par1 = document.createElement("p");
document.body.appendChild(par1);
divLogo.appendChild(par1);
par1.innerHTML = "Logo";

divLogo.style.display = inlineblock;
divLogo.style.position = "absolute";
divLogo.style.top = 0;
divLogo.style.left = 0;
divLogo.style.padding = 0;
divLogo.style.height = 160;
divLogo.style.width = 160;
divLogo.style.border = 1;
divLogo.style.backgroundcolor = "grey";


// var imgMenu = document.createElement("img");
// imgMenu.id = "imgMenu";
// divImg.appendChild(imgMenu);
// imgMenu.style.position = "absolute";
// imgMenu.style.zIndex = -1;
// imgMenu.style.top = "10px"; 
// imgMenu.style.left = "10px";
// imgMenu.src = imgPath + "menuOn.png";

