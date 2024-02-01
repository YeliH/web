const buttonS = document.getElementById("yes");
const buttonN = document.getElementById("no");

const A = () => {
  location.href = "./aa.html";
};

var evitar = () => {
  buttonN.style.position = "absolute";
  buttonN.style.top = Math.random() * window.innerHeight + "px";
  buttonN.style.left = Math.random() * window.innerWidth + "px";
};

buttonS.addEventListener("click", A);
buttonN.addEventListener("mouseover", evitar);
