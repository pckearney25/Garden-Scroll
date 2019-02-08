//SMOOTH SCROLLING DIRECTOR OBJECTS {id: "text" , start; "number", stop: "number", mark: }
//start and stop refer to % of viewHeight
const thirdBoxDirector = {
  id: "third-box",
  start: 75,
  stop: 25,
  mark: "top"
};

const spanBox1ColorDirector = {
  id: "moving-frames-div",
  start: 45,
  stop: 40,
  mark: "top"
};

const spanBox2ColorDirector = {
  id: "moving-frames-div",
  start: 42,
  stop: 37,
  mark: "top"
};

const spanBox3ColorDirector = {
  id: "moving-frames-div",
  start: 39,
  stop: 34,
  mark: "top"
};

const spanBox4ColorDirector = {
  id: "moving-frames-div",
  start: 36,
  stop: 31,
  mark: "top"
};

const spanBoxesPositionDirector = {
  id: "moving-frames-div",
  start: 30,
  stop: 0,
  mark: "top"
};

const circleAnimationDirector1 = {
  //As above this is a simple position director.
  id: "animation-div",
  start: 50,
  stop: 45,
  mark: "top"
};

//SMOOTH SCROLLING ACTOR OBJECTS:
//These contain both intial and final CSS values.
//Position keys refer to percentages of relative parent.
const thirdBoxActor = {
  id: "third-box",
  color1: { red: 0, green: 0, blue: 0, opacity: 1 },
  color2: { red: 255, green: 255, blue: 0, opacity: 1 },
  background1: { red: 255, green: 102, blue: 178, opacity: 1 },
  background2: { red: 71, green: 32, blue: 122, opacity: 1 }
};

const spanBox1Actor = {
  id: "span-box-1",
  background1: { red: 0, green: 100, blue: 0, opacity: 1 },
  background2: { red: 71, green: 32, blue: 122, opacity: 1 },
  position1: { top: 10, left: 5, bottom: "", right: "" },
  position2: { top: 10, left: 25, bottom: "", right: "" }
};

const spanBox2Actor = {
  id: "span-box-2",
  background1: { red: 0, green: 100, blue: 0, opacity: 1 },
  background2: { red: 255, green: 255, blue: 0, opacity: 1 },
  position1: { top: 10, left: 25, bottom: "", right: "" },
  position2: { top: 48, left: 25, bottom: "", right: "" }
};

const spanBox3Actor = {
  id: "span-box-3",
  background1: { red: 0, green: 100, blue: 0, opacity: 1 },
  background2: { red: 255, green: 140, blue: 0, opacity: 1 },
  position1: { top: 48, left: 25, bottom: "", right: "" },
  position2: { top: 48, left: 5, bottom: "", right: "" }
};

const spanBox4Actor = {
  id: "span-box-4",
  background1: { red: 0, green: 100, blue: 0, opacity: 1 },
  background2: { red: 255, green: 0, blue: 0, opacity: 1 },
  position1: { top: 48, left: 5, bottom: "", right: "" },
  position2: { top: 10, left: 5, bottom: "", right: "" }
};

const circle1Actor = {
  id: "circle-1",
  background1: { red: 0, green: 100, blue: 0, opacity: 1 },
  background2: { red: 71, green: 32, blue: 122, opacity: 1 }
};

const circle2Actor = {
  id: "circle-2",
  background1: { red: 0, green: 100, blue: 0, opacity: 1 },
  background2: { red: 255, green: 255, blue: 0, opacity: 1 }
};

const circle3Actor = {
  id: "circle-3",
  background1: { red: 0, green: 100, blue: 0, opacity: 1 },
  background2: { red: 255, green: 140, blue: 0, opacity: 1 }
};

const circle4Actor = {
  id: "circle-4",
  background1: { red: 0, green: 100, blue: 0, opacity: 1 },
  background2: { red: 255, green: 0, blue: 0, opacity: 1 }
};

//ANIMATION DIRECTOR OBJECTS {id: "text" , start; number, scrollUp: BOOLEAN, mark:"text" }
const circleAnimationDirector2 = {
  id: "animation-div",
  start: 35,
  scrollUp: true,
  mark: "top"
};
//ANIMATION ACTOR OBJECTS {id: "text", upClass: "text", downClass: "text"}
const circle1Actor2 = {
  id: "circle-1",
  upClass: "circle2",
  downClass: "circle"
};

window.onscroll = function() {
  setColor(thirdBoxActor, thirdBoxDirector);
  setBackgroundColor(thirdBoxActor, thirdBoxDirector);
  setBackgroundColor(spanBox1Actor, spanBox1ColorDirector);
  setBackgroundColor(spanBox2Actor, spanBox2ColorDirector);
  setBackgroundColor(spanBox3Actor, spanBox3ColorDirector);
  setBackgroundColor(spanBox4Actor, spanBox4ColorDirector);
  moveAbsoluteObject(spanBox1Actor, spanBoxesPositionDirector);
  moveAbsoluteObject(spanBox2Actor, spanBoxesPositionDirector);
  moveAbsoluteObject(spanBox3Actor, spanBoxesPositionDirector);
  moveAbsoluteObject(spanBox4Actor, spanBoxesPositionDirector);
  setBackgroundColor(thirdBoxActor, thirdBoxDirector);
  setBackgroundColor(circle1Actor, circleAnimationDirector1);
  setBackgroundColor(circle2Actor, circleAnimationDirector1);
  setBackgroundColor(circle3Actor, circleAnimationDirector1);
  setBackgroundColor(circle4Actor, circleAnimationDirector1);
  animateObject(circle1Actor2, circleAnimationDirector2);
};

//Functions to return the fractional values to control property changes.
function cssZeroToOne(directParams) {
  const viewHeight = window.innerHeight;
  const director = document.getElementById(directParams.id);
  const startPosition = (directParams.start * viewHeight) / 100; //will be in px
  const stopPosition = (directParams.stop * viewHeight) / 100; //will be in px
  const currentPosition = director.getBoundingClientRect()[directParams.mark];
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
  console.log(fraction);
}

function cssOneToZero(directParams) {
  const viewHeight = window.innerHeight;
  const director = document.getElementById(directParams.id);
  const startPosition = (directParams.start * viewHeight) / 100; //will be in px
  const stopPosition = (directParams.stop * viewHeight) / 100; //will be in px
  const currentPosition = director.getBoundingClientRect()[directParams.mark];
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
function setColor(actorParams, directorParams) {
  const actor = document.getElementById(actorParams.id);
  let redColor;
  let greenColor;
  let blueColor;
  let actorOpacity;

  let colorFraction = cssZeroToOne(directorParams);
  if (actorParams.color1.red === actorParams.color2.red) {
    redColor = actorParams.color1.red;
  } else {
    redColor =
      actorParams.color1.red -
      (actorParams.color1.red - actorParams.color2.red) * colorFraction;
  }

  if (actorParams.color1.green === actorParams.color2.green) {
    greenColor = actorParams.color1.green;
  } else {
    greenColor =
      actorParams.color1.green -
      (actorParams.color1.green - actorParams.color2.green) * colorFraction;
  }

  if (actorParams.color1.blue === actorParams.color2.blue) {
    blueColor = actorParams.color1.blue;
  } else {
    blueColor =
      actorParams.color1.blue -
      (actorParams.color1.blue - actorParams.color2.blue) * colorFraction;
  }

  if (actorParams.color1.opacity === actorParams.color2.opacity) {
    actorOpacity = actorParams.color1.opacity;
  } else {
    actorOpacity =
      actorParams.color1.opacity -
      (actorParams.color1.opacity - actorParams.color2.opacity) * colorFraction;
  }
  actor.style.color = `rgba(${redColor}, ${greenColor}, ${blueColor}, ${actorOpacity})`;
  if (colorFraction > 0 && colorFraction < 1) {
    console.log(`${actorParams.id}: ${actor.style.color}`);
  }
}

//Function to set text color with cssZeroToOne function
// The backgroundColorOneRGBA and backgroundColorTwoRGBA variables are objects of format{red: number, green: number, blue: number, opacity: number}
//the directorId, startviewHeightPosition, stopviewHeightPosition, markType are passed through
function setBackgroundColor(actorParams, directorParams) {
  const actor = document.getElementById(actorParams.id);
  let redColor;
  let greenColor;
  let blueColor;
  let actorOpacity;

  let colorFraction = cssZeroToOne(directorParams);

  if (actorParams.background1.red === actorParams.background2.red) {
    redColor = actorParams.background1.red;
  } else {
    redColor =
      actorParams.background1.red -
      (actorParams.background1.red - actorParams.background2.red) *
        colorFraction;
  }

  if (actorParams.background1.green === actorParams.background2.green) {
    greenColor = actorParams.background1.green;
  } else {
    greenColor =
      actorParams.background1.green -
      (actorParams.background1.green - actorParams.background2.green) *
        colorFraction;
  }

  if (actorParams.background1.blue === actorParams.background2.blue) {
    blueColor = actorParams.background1.blue;
  } else {
    blueColor =
      actorParams.background1.blue -
      (actorParams.background1.blue - actorParams.background2.blue) *
        colorFraction;
  }

  if (actorParams.background1.opacity === actorParams.background2.opacity) {
    actorOpacity = actorParams.background1.opacity;
  } else {
    actorOpacity =
      actorParams.background1.opacity -
      (actorParams.background1.opacity - actorParams.background2.opacity) *
        colorFraction;
  }

  actor.style.backgroundColor = `rgba(${redColor}, ${greenColor}, ${blueColor}, ${actorOpacity}`;
  if (colorFraction > 0 && colorFraction < 1) {
    console.log(`${actorParams.id}: ${actor.style.backgroundColor})`);
  }
}

function moveAbsoluteObject(actorParams, directorParams) {
  const actor = document.getElementById(actorParams.id);
  let top;
  let left;
  let bottom;
  let right;

  let positionFraction = cssZeroToOne(directorParams);
  if (actorParams.position1.top !== "" && actorParams.position2.top !== "") {
    if (actorParams.position1.top === actorParams.position2.top) {
      top = actorParams.position1.top;
    } else {
      top =
        actorParams.position1.top -
        (actorParams.position1.top - actorParams.position2.top) *
          positionFraction;
    }
  }

  if (actorParams.position1.left !== "" && actorParams.position2.left !== "") {
    if (actorParams.position1.left === actorParams.position2.left) {
      left = actorParams.position1.left;
    } else {
      left =
        actorParams.position1.left -
        (actorParams.position1.left - actorParams.position2.left) *
          positionFraction;
    }
  }

  if (
    actorParams.position1.bottom !== "" &&
    actorParams.position2.bottom !== ""
  ) {
    if (actorParams.position1.bottom === actorParams.position2.bottom) {
      bottom = actorParams.position1.bottom;
    } else {
      bottom =
        actorParams.position1.bottom -
        (actorParams.position1.bottom - actorParams.position2.bottom) *
          positionFraction;
    }
  }

  if (
    actorParams.position1.right !== "" &&
    actorParams.position2.right !== ""
  ) {
    if (actorParams.position1.right === actorParams.position2.right) {
      right = actorParams.position1.right;
    } else {
      right =
        actorParams.position1.right -
        (actorParams.position1.right - actorParams.position2.right) *
          positionFraction;
    }
  }

  if (top) {
    actor.style.top = `${top}%`;
  }
  if (left) {
    actor.style.left = `${left}%`;
  }
  if (bottom) {
    actor.style.bottom = `${bottom}%`;
  }
  if (right) {
    actor.style.right = `${right}%`;
  }
  if (positionFraction > 0 && positionFraction < 1) {
    console.log(
      `${
        actorParams.id
      }: top (${top}) left (${left}) bototom (${bottom}) right (${right})`
    );
  }
}

function animateObject(animActParams, animDirectParams) {
  const viewHeight = window.innerHeight;
  const director = document.getElementById(animDirectParams.id);
  const startPosition = (animDirectParams.start * viewHeight) / 100; //will be in px
  const currentPosition = director.getBoundingClientRect()[
    animDirectParams.mark
  ];

  if (animDirectParams.scrollUp && currentPosition <= startPosition) {
    document.getElementById(animActParams.id).className = animActParams.upClass;
  }

  if (animDirectParams.scrollUp && currentPosition > startPosition) {
    document.getElementById(animActParams.id).className =
      animActParams.downClass;
  }

  if (!animDirectParams.scrollUp && currentPosition >= startPosition) {
    document.getElementById(animActParams.id).className =
      animActParams.downClass;
  }

  if (!animDirectParams.scrollUp && currentPosition < startPosition) {
    document.getElementById(animActParams.id).className = animActParams.upClass;
  }
}
