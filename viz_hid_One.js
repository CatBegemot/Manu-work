var divImg = document.createElement("div");
document.body.appendChild(divImg);

var Image = document.createElement("img");
Image.id = "Image";
divImg.appendChild(Image);
  
  Image.style.position = "absolute";
  Image.style.zIndex = 1;
  Image.style.top = "10px";
  Image.style.left = "100px";
  Image.src = imgPath + "Big_pict.jpg";
  
  Image.onclick = function() {changeSrc()}; 
  