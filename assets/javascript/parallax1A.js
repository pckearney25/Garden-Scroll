const boxColor1 = { red: 0, green: 0, blue: 0, opacity: 0 };
const boxColor2 = { red: 255, green: 255, blue: 255, opacity: 1 };

const spanBox1Color1 = { red: 0, green: 100, blue: 0, opacity: 1 };
const spanBox1Color2 = { red: 71, green: 32, blue: 122, opacity: 1 };

const spanBox2Color1 = { red: 0, green: 100, blue: 0, opacity: 1 };
const spanBox2Color2 = { red: 255, green: 255, blue: 0, opacity: 1 };

const spanBox3Color1 = { red: 0, green: 100, blue: 0, opacity: 1 };
const spanBox3Color2 = { red: 255, green: 140, blue: 0, opacity: 1 };

const spanBox4Color1 = { red: 0, green: 100, blue: 0, opacity: 1 };
const spanBox4Color2 = { red: 255, green: 0, blue: 0, opacity: 1 };

window.onscroll = function() {
  setColor("third-box", boxColor1, boxColor2, "third-box", 75, 25, "top");
  setBackgroundColor(
    "span-box-1",
    spanBox1Color1,
    spanBox1Color2,
    "moving-frames-div",
    60,
    45,
    "top"
  );

  setBackgroundColor(
    "span-box-2",
    spanBox2Color1,
    spanBox2Color2,
    "moving-frames-div",
    50,
    35,
    "top"
  );

  setBackgroundColor(
    "span-box-3",
    spanBox3Color1,
    spanBox3Color2,
    "moving-frames-div",
    40,
    25,
    "top"
  );

  setBackgroundColor(
    "span-box-4",
    spanBox4Color1,
    spanBox4Color2,
    "moving-frames-div",
    30,
    15,
    "top"
  );
};

//Functions to return the fractional values to control property changes.
function cssZeroToOne(
  directorId,
  startviewHeightPosition,
  stopviewHeightPosition,
  markType
) {
  //(id, number input for %vh, number input for %vh, text defining id parameter for mesaurement)
  const viewHeight = window.innerHeight;
  const director = document.getElementById(directorId);
  const startPosition = (startviewHeightPosition * viewHeight) / 100; //will be in px
  const stopPosition = (stopviewHeightPosition * viewHeight) / 100; //will be in px
  const currentPosition = director.getBoundingClientRect()[markType];
  let fraction;
  if (currentPosition >= startPosition) {
    return (fraction = 0);
  }
  if (currentPosition < startPosition && currentPosition > stopPosition) {
    return (fraction =
      (startPosition - currentPosition) / (startPosition - stopPosition));
  }
  if (currentPosition <= stopPosition) {
    return (fraction = 1);
  }
}

function cssOneToZero(
  directorId,
  startviewHeightPosition,
  stopviewHeightPosition,
  markType
) {
  //(id, number input for %vh, number input for %vh, text defining id parameter for mesaurement)
  const viewHeight = window.innerHeight;
  const director = document.getElementById(directorId);
  const startPosition = (startviewHeightPosition * viewHeight) / 100; //will be in px
  const stopPosition = (stopviewHeightPosition * viewHeight) / 100; //will be in px
  const currentPosition = director.getBoundingClientRect()[markType];
  let fraction;
  if (currentPosition >= startPosition) {
    return (fraction = 1);
  }
  if (currentPosition < startPosition && currentPosition > stopPosition) {
    return (fraction =
      (currentPosition - stopPosition) / (startPosition - stopPosition));
  }

  if (currentPosition <= stopPosition) {
    return (fraction = 0);
  }
}

//Function to set text color with cssZeroToOne function
// The colorOneRGBA and colorTwoRGBA variables are objects of format{red: number, green: number, blue: number, opacity: number}
//the directorId, startviewHeightPosition, stopviewHeightPosition, markType are passed through
function setColor(
  actorId,
  colorOneRGBA,
  colorTwoRGBA,
  directorId,
  startviewHeightPosition,
  stopviewHeightPosition,
  markType
) {
  const actor = document.getElementById(actorId);
  let redColor;
  let greenColor;
  let blueColor;
  let actorOpacity;

  let colorFraction = cssZeroToOne(
    directorId,
    startviewHeightPosition,
    stopviewHeightPosition,
    markType
  );

  if (colorOneRGBA.red === colorTwoRGBA.red) {
    redColor = colorOneRGBA.red;
  } else {
    redColor =
      colorOneRGBA.red - (colorOneRGBA.red - colorTwoRGBA.red) * colorFraction;
  }

  if (colorOneRGBA.green === colorTwoRGBA.green) {
    greenColor = colorOneRGBA.green;
  } else {
    greenColor =
      colorOneRGBA.green -
      (colorOneRGBA.green - colorTwoRGBA.green) * colorFraction;
  }

  if (colorOneRGBA.blue === colorTwoRGBA.blue) {
    blueColor = colorOneRGBA.blue;
  } else {
    blueColor =
      colorOneRGBA.blue -
      (colorOneRGBA.blue - colorTwoRGBA.blue) * colorFraction;
  }

  if (colorOneRGBA.opacity === colorTwoRGBA.opacity) {
    actorOpacity = colorOneRGBA.opacity;
  } else {
    actorOpacity =
      colorOneRGBA.opacity -
      (colorOneRGBA.opacity - colorTwoRGBA.opacity) * colorFraction;
  }
  actor.style.color = `rgba(${redColor}, ${greenColor}, ${blueColor}, ${actorOpacity})`;
  console.log(`${actorId}: ${actor.style.color}`);
}

//Function to set text color with cssZeroToOne function
// The backgroundColorOneRGBA and backgroundColorTwoRGBA variables are objects of format{red: number, green: number, blue: number, opacity: number}
//the directorId, startviewHeightPosition, stopviewHeightPosition, markType are passed through
function setBackgroundColor(
  actorId,
  backgroundColorOneRGBA,
  backgroundColorTwoRGBA,
  directorId,
  startviewHeightPosition,
  stopviewHeightPosition,
  markType
) {
  const actor = document.getElementById(actorId);
  let redColor;
  let greenColor;
  let blueColor;
  let actorOpacity;

  let colorFraction = cssZeroToOne(
    directorId,
    startviewHeightPosition,
    stopviewHeightPosition,
    markType
  );

  if (backgroundColorOneRGBA.red === backgroundColorTwoRGBA.red) {
    redColor = backgroundColorOneRGBA.red;
  } else {
    redColor =
      backgroundColorOneRGBA.red -
      (backgroundColorOneRGBA.red - backgroundColorTwoRGBA.red) * colorFraction;
  }

  if (backgroundColorOneRGBA.green === backgroundColorTwoRGBA) {
    greenColor = backgroundColorOneRGBA.green;
  } else {
    greenColor =
      backgroundColorOneRGBA.green -
      (backgroundColorOneRGBA.green - backgroundColorTwoRGBA.green) *
        colorFraction;
  }

  if (backgroundColorOneRGBA.blue === backgroundColorTwoRGBA.blue) {
    blueColor = backgroundColorOneRGBA.blue;
  } else {
    blueColor =
      backgroundColorOneRGBA.blue -
      (backgroundColorOneRGBA.blue - backgroundColorTwoRGBA.blue) *
        colorFraction;
  }

  if (backgroundColorOneRGBA.opacity === backgroundColorTwoRGBA.opacity) {
    actorOpacity = backgroundColorOneRGBA.opacity;
  } else {
    actorOpacity =
      backgroundColorOneRGBA.opacity -
      (backgroundColorOneRGBA.opacity - backgroundColorTwoRGBA.opacity) *
        colorFraction;
  }
  actor.style.backgroundColor = `rgba(${redColor}, ${greenColor}, ${blueColor}, ${actorOpacity})`;
  console.log(`${actorId}: ${actor.style.backgroundColor}`);
}
