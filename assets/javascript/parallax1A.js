window.onscroll = function() {
  thirdBoxParameters();
  setColor();
  setBackGroundColor();
};

function thirdBoxParameters() {
  const thirdBox = document.getElementById("third-box");
  console.log(thirdBox.getBoundingClientRect());
}

function setColor() {
  const viewHeight = window.innerHeight;
  const thirdBox = document.getElementById("third-box");
  const divFraction =
    (2 * (viewHeight - thirdBox.getBoundingClientRect().top)) / viewHeight;
  console.log(divFraction);
  const whiteness = divFraction * 255;
  thirdBox.style.color = `rgba(${whiteness}, ${whiteness}, ${whiteness}, 1)`;
}

function setColor() {
  const viewHeight = window.innerHeight;
  const thirdBox = document.getElementById("third-box");
  const divFraction =
    (2 * (viewHeight - thirdBox.getBoundingClientRect().top)) / viewHeight;
  console.log(divFraction);
  const whiteness = divFraction * 255;
  thirdBox.style.color = `rgba(${whiteness}, ${whiteness}, ${whiteness}, 1)`;
}

function setBackGroundColor() {
  const viewHeight = window.innerHeight;
  const thirdBox = document.getElementById("third-box");
  const divFraction =
    (2 * (viewHeight - thirdBox.getBoundingClientRect().top)) / viewHeight;
  console.log(divFraction);
  const colorChangeRed = 255 - divFraction * 153;
  const colorChangeGreen = 102;
  const colorChangeBlue = 178 + divFraction * 77;

  thirdBox.style.backgroundColor = `rgba(${colorChangeRed}, ${colorChangeGreen}, ${colorChangeBlue}, 1)`;
}
