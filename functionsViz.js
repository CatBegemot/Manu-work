function startHid() {
  var viz = document.getElementById("imgHid");
  if (viz.style.visibility === "hidden") {
    viz.style.visibility = "visible";
  } else {
    viz.style.visibility = "hidden";
  }
}