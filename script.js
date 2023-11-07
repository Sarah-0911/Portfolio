const knowButton = document.getElementById('know-btn');
const linkText = knowButton.querySelector("a");

const turnToGreen = () => {
  linkText.classList.add("green-text");
};

const originColor = () => {
  linkText.classList.remove("green-text");
};

knowButton.addEventListener('mousedown', turnToGreen);
knowButton.addEventListener('mouseup', originColor);
