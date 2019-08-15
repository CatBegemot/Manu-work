var divImg = document.createElement("div");
document.body.appendChild(divImg);

var imgHid = document.createElement("img");
imgHid.id = "imgHid";
divImg.appendChild(imgHid);
  
  imgHid.style.position = "absolute";
  imgHid.style.zIndex = 1;
  imgHid.style.top = "10px";
  imgHid.style.left = "100px";
  imgHid.style.visibility = "hidden";  
  imgHid.src = imgPath + "Big_pict.jpg";
  
var imgViz = document.createElement("img");
imgViz.id = "imgViz";
divImg.appendChild(imgViz);
  
  imgViz.style.position = "absolute";
  imgViz.style.zIndex = -1;
  imgViz.style.top = "10px";
  imgViz.style.left = "100px";
  imgViz.src = imgPath + "Black_pict.jpg";
  

  imgHid.onclick = function() {startHid};
  