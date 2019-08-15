var divImg = document.createElement("div");
document.body.appendChild(divImg);

var image = document.createElement("img");
image.id = "image";
divImg.appendChild(image);
  
  image.style.position = "absolute";
  image.style.zIndex = 1;
  image.style.top = "10px";
  image.style.left = "100px";
  image.src = imgPath + "Big_pict.jpg";
  
  image.onclick = function() {changeSrc()}; 
  