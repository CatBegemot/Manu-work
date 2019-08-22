function startViz() {
  var viz = document.getElementById("dropdown");
  viz.style.visibility = "visible";
  
var elem = document.getElementById("dropdown");   
  var pos = -160;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.left = pos + "px"; 
      }
    }
}


function startHid() {
  var viz = document.getElementById("dropdown");
  viz.style.visibility = "hidden";
}