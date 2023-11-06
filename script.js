const knowButton = document.getElementById('know-btn');
const linkText = knowButton.querySelector("a");

const turnToOrange = () => {
  linkText.classList.add("orange-text");
};

const originColor = () => {
  linkText.classList.remove("orange-text");
};

knowButton.addEventListener('mousedown', turnToOrange);
knowButton.addEventListener('mouseup', originColor);
