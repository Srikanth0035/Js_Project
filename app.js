const colors = ["grey", "black", "blue"];

const color = document.querySelector(".color");

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const rand = randomNum();
  color.textContent = colors[rand];
  document.body.style.backgroundColor = colors[rand];
});

const randomNum = () => {
  return Math.floor(Math.random() * colors.length);
};
