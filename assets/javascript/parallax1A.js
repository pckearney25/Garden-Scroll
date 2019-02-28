//SMOOTH SCROLLING DIRECTOR OBJECTS {id: "text" , start; "number", stop: "number", mark: }
//start and stop refer to % of viewHeight
const firstBoxDirector = {
  scroll1: { id: "first-box", start: 75, stop: 25, mark: "top" }
};

const spanBoxDirector = {
  scroll1: { id: "moving-frames-div", start: 45, stop: 40, mark: "top" },
  scroll2: { id: "moving-frames-div", start: 42, stop: 37, mark: "top" },
  scroll3: { id: "moving-frames-div", start: 39, stop: 34, mark: "top" },
  scroll4: { id: "moving-frames-div", start: 36, stop: 31, mark: "top" },
  position1: { id: "moving-frames-div", start: 30, stop: 0, mark: "top" }
};

const animationBoxDirector = {
  scroll1: { id: "animation-div", start: 70, stop: 55, mark: "top" },
  animation1: { id: "animation-div", start: 52, scrollUp: true, mark: "top" }
};

//SMOOTH SCROLLING ACTOR OBJECTS:
//These contain both intial and final CSS values.
//Position keys refer to percentages of relative parent.
const firstBoxActor = {
  id: "first-box",
  color1: { red: 255, green: 255, blue: 0, opacity: 1 },
  color2: { red: 71, green: 32, blue: 122, opacity: 1 },
  background1: { red: 71, green: 32, blue: 122, opacity: 1 },
  background2: { red: 255, green: 255, blue: 0, opacity: 1 }
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
const circle1ActorB = {
  id: "circle-1",
  upClass: "bloom1",
  downClass: "circle"
};

const circle2ActorB = {
  id: "circle-2",
  upClass: "bloom2",
  downClass: "circle"
};

const circle3ActorB = {
  id: "circle-3",
  upClass: "bloom3",
  downClass: "circle"
};

const circle4ActorB = {
  id: "circle-4",
  upClass: "bloom4",
  downClass: "circle"
};

window.onscroll = function() {
  setColor(firstBoxActor, firstBoxDirector.scroll1);
  setBackgroundColor(firstBoxActor, firstBoxDirector.scroll1);
  setBackgroundColor(spanBox1Actor, spanBoxDirector.scroll1);
  setBackgroundColor(spanBox2Actor, spanBoxDirector.scroll2);
  setBackgroundColor(spanBox3Actor, spanBoxDirector.scroll3);
  setBackgroundColor(spanBox4Actor, spanBoxDirector.scroll4);
  moveAbsoluteObject(spanBox1Actor, spanBoxDirector.position1);
  moveAbsoluteObject(spanBox2Actor, spanBoxDirector.position1);
  moveAbsoluteObject(spanBox3Actor, spanBoxDirector.position1);
  moveAbsoluteObject(spanBox4Actor, spanBoxDirector.position1);
  setBackgroundColor(circle1Actor, animationBoxDirector.scroll1);
  setBackgroundColor(circle2Actor, animationBoxDirector.scroll1);
  setBackgroundColor(circle3Actor, animationBoxDirector.scroll1);
  setBackgroundColor(circle4Actor, animationBoxDirector.scroll1);
  animateObject(circle1ActorB, animationBoxDirector.animation1);
  animateObject(circle2ActorB, animationBoxDirector.animation1);
  animateObject(circle3ActorB, animationBoxDirector.animation1);
  animateObject(circle4ActorB, animationBoxDirector.animation1);
};
