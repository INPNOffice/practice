const domready = require("domready");

domready(function() {
  const span = document.getElementById("span");
  span.addEventListener("click", function(e) {
    span.innerHTML = "hugahuga";
    span.style.backgroundColor = "#00ffff";
    console.log("I love naari.");
  });
});
