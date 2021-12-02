function myFunction() {
    var x = document.getElementById("menu");
    var y = document.getElementById("intro-box");
    var z = document.getElementById("arrow");
    if (x.style.display === "none") {
      x.style.display = "flex";
      y.style.display = "none"
      z.style.display = "none"
    } else {
      x.style.display = "none";
      y.style.display = "flex";
      z.style.display = "flex"
    }
  }