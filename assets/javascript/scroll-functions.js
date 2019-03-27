//Functions to return the fractional values to control property changes.
const cssZeroToOne = directParams => {
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
};

const cssOneToZero = directParams => {
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
};

//Function to set text color with cssZeroToOne function
// The colorOneRGBA and colorTwoRGBA variables are objects of format{red: number, green: number, blue: number, opacity: number}
//the directorId, startviewHeightPosition, stopviewHeightPosition, markType are passed through
const setColor = (actorParams, directorParams) => {
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
};

//Function to set text background color with cssZeroToOne function
// The backgroundColorOneRGBA and backgroundColorTwoRGBA variables are objects of format{red: number, green: number, blue: number, opacity: number}
//the directorId, startviewHeightPosition, stopviewHeightPosition, markType are passed through
const setBackgroundColor = (actorParams, directorParams) => {
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
};

const moveAbsoluteObject = (actorParams, directorParams) => {
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
};

//Functions to activate animations by changing class when director div hits its mark.
//Set state of animation to activate on scrollup/down)
const animateObject = (animActParams, animDirectParams) => {
  const viewHeight = window.innerHeight;
  const director = document.getElementById(animDirectParams.id);
  const startPosition = (animDirectParams.start * viewHeight) / 100; //will be in px
  const currentPosition = director.getBoundingClientRect()[
    animDirectParams.mark
  ];
  //Resets the class of an element and resets the conditions of the next effect to occur on scroll down.
  const upEndFunction = () => {
    document.getElementById(animActParams.id).className =
      animActParams.upEndClass;
    animDirectParams.scrollUp = false;
  };
  //Resets the class of an element and resets the conditions of the next effect to occur on scroll up.
  const downEndFunction = () => {
    document.getElementById(animActParams.id).className =
      animActParams.downEndClass;
    animDirectParams.scrollUp = true;
  };
  //triggers the effect on scroll up by adding a class then calls the upEndFunction to reset the class of an element.
  if (animDirectParams.scrollUp && currentPosition <= startPosition) {
    const actor = document.getElementById(animActParams.id);
    actor.classList.add(animActParams.upAddClass);
    actor.addEventListener("webkitAnimationEnd", upEndFunction);
    actor.addEventListener("animationend", upEndFunction);
  }
  //triggers the effect on scroll down by adding a class then calls the upEndFunction to reset the class of an element.
  if (!animDirectParams.scrollUp && currentPosition > startPosition) {
    const actor = document.getElementById(animActParams.id);
    actor.classList.add(animActParams.downAddClass);
    actor.addEventListener("webkitAnimationEnd", downEndFunction);
    actor.addEventListener("animationend", downEndFunction);
  }
};
