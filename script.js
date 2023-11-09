// Button Know More

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

// Zoom effect on Card

// const cards = document.querySelectorAll(".card");

// cards.forEach(card => {
//   card.addEventListener('mouseover', () =>
//   card.style.backgroundSize = '120%');
//   card.addEventListener('mouseout', () =>
//   card.style.backgroundSize = '100%');
// })
