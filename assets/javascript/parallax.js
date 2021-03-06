//PROGRESSIVE DIRECTOR OBJECTS {id: "text" , start; "number", stop: "number", mark: }
//start and stop refer to % of viewHeight
//ABRUPT DIRECTOR OBJECTS {id: "text" , start; number, scrollUp: BOOLEAN, mark:"text" }

//THE DIRECTORS!!!
const scrollBoxDirector = {
  scroll1: { id: "first-js-box", start: 75, stop: 25, mark: "top" },
  scroll2: { id: "second-js-box", start: 75, stop: 25, mark: "top" },
  scroll3: { id: "third-js-box", start: 80, stop: 55, mark: "top" },
  scroll4: { id: "fourth-js-box", start: 80, stop: 55, mark: "top" },
  scroll5: { id: "fifth-js-box", start: 80, stop: 55, mark: "top" }
};

const commentBoxDirector = {
  comment1: { id: "parallax-1", start: 15, scrollUp: true, mark: "top" },
  comment2: { id: "parallax-2", start: 15, scrollUp: true, mark: "top" },
  comment3: { id: "parallax-3", start: 15, scrollUp: true, mark: "top" },
  comment4: { id: "parallax-4", start: 15, scrollUp: true, mark: "top" },
  videoComment: {
    id: "video-parallax-box",
    start: 15,
    scrollUp: true,
    mark: "top"
  }
};

const spanBoxDirector = {
  scroll1: { id: "moving-frames-div", start: 65, stop: 60, mark: "top" },
  scroll2: { id: "moving-frames-div", start: 62, stop: 57, mark: "top" },
  scroll3: { id: "moving-frames-div", start: 59, stop: 54, mark: "top" },
  scroll4: { id: "moving-frames-div", start: 56, stop: 51, mark: "top" },
  position1: { id: "moving-frames-div", start: 50, stop: 30, mark: "top" }
};

const animationBoxDirector = {
  scroll1: { id: "animation-div", start: 70, stop: 55, mark: "top" },
  animation1: { id: "animation-div", start: 55, scrollUp: true, mark: "top" }
};

const backgroundImageDirector = {
  backgroundImage1: { id: "parallax-5", start: 50, stop: 0, mark: "top" },
  scroll1: {
    id: "parallax-5",
    start: 30,
    stop: 10,
    mark: "top"
  }
};

const conclusionDirector = {
  animation1: {
    id: "footer-trigger",
    start: 98,
    scrollUp: true,
    mark: "top"
  }
};

//PROGRASSIVE SCROLLING ACTOR OBJECTS:
//These contain both intial and final CSS values.
//Position keys refer to percentages of relative parent.
//ANIMATION ACTOR OBJECTS {id: "text", upClass: "text", downClass: "text"}

//THE ACTORS!!!
const scrollBoxActor = {
  scroll1: {
    id: "first-js-box",
    color1: { red: 255, green: 255, blue: 0, opacity: 1 },
    color2: { red: 71, green: 32, blue: 122, opacity: 1 },
    background1: { red: 71, green: 32, blue: 122, opacity: 1 },
    background2: { red: 255, green: 255, blue: 0, opacity: 1 }
  },
  scroll2: {
    id: "second-js-box",
    color1: { red: 255, green: 255, blue: 0, opacity: 1 },
    color2: { red: 71, green: 32, blue: 122, opacity: 1 },
    background1: { red: 71, green: 32, blue: 122, opacity: 1 },
    background2: { red: 255, green: 255, blue: 0, opacity: 1 }
  },
  scroll3: {
    id: "third-js-box",
    color1: { red: 255, green: 255, blue: 0, opacity: 1 },
    color2: { red: 71, green: 32, blue: 122, opacity: 1 },
    background1: { red: 71, green: 32, blue: 122, opacity: 1 },
    background2: { red: 255, green: 255, blue: 0, opacity: 1 }
  },
  scroll4: {
    id: "fourth-js-box",
    color1: { red: 255, green: 255, blue: 0, opacity: 1 },
    color2: { red: 71, green: 32, blue: 122, opacity: 1 },
    background1: { red: 71, green: 32, blue: 122, opacity: 1 },
    background2: { red: 255, green: 255, blue: 0, opacity: 1 }
  },
  scroll5: {
    id: "fifth-js-box",
    color1: { red: 255, green: 255, blue: 0, opacity: 1 },
    color2: { red: 71, green: 32, blue: 122, opacity: 1 },
    background1: { red: 71, green: 32, blue: 122, opacity: 1 },
    background2: { red: 255, green: 255, blue: 0, opacity: 1 }
  }
};

const commentBoxActor = {
  comment1: {
    id: "parallax-1-comment",
    //triggers the scroll-up animation
    upAddClass: "grow",
    //class that will replace the current classList on scroll-up animation completion
    upEndClass: "parallax-comment-box",
    //triggers the scroll-down animation
    downAddClass: "shrink",
    //class that will replace the current classList on scroll-down animation completion
    downEndClass: "parallax-comment-box-zero"
  },
  comment2: {
    id: "parallax-2-comment",
    upAddClass: "grow",
    upEndClass: "parallax-comment-box",
    downAddClass: "shrink",
    downEndClass: "parallax-comment-box-zero"
  },
  comment3: {
    id: "parallax-3-comment",
    upAddClass: "grow",
    upEndClass: "parallax-comment-box",
    downAddClass: "shrink",
    downEndClass: "parallax-comment-box-zero"
  },
  comment4: {
    id: "parallax-4-comment",
    upAddClass: "grow",
    upEndClass: "parallax-comment-box",
    downAddClass: "shrink",
    downEndClass: "parallax-comment-box-zero"
  },
  videoComment: {
    id: "video-comment-box",
    upAddClass: "grow",
    upEndClass: "parallax-comment-box",
    downAddClass: "shrink",
    downEndClass: "parallax-comment-box-zero"
  }
};
const spanBoxActor = {
  span1: {
    id: "span-box-1",
    background1: { red: 0, green: 100, blue: 0, opacity: 1 },
    background2: { red: 71, green: 32, blue: 122, opacity: 1 },
    position1: { top: 16, left: 16, bottom: "", right: "" },
    position2: { top: 67, left: 0, bottom: "", right: "" }
  },
  span2: {
    id: "span-box-2",
    background1: { red: 0, green: 100, blue: 0, opacity: 1 },
    background2: { red: 255, green: 255, blue: 0, opacity: 1 },
    position1: { top: 16, left: 50, bottom: "", right: "" },
    position2: { top: 0, left: 0, bottom: "", right: "" }
  },
  span3: {
    id: "span-box-3",
    background1: { red: 0, green: 100, blue: 0, opacity: 1 },
    background2: { red: 255, green: 140, blue: 0, opacity: 1 },
    position1: { top: 50, left: 50, bottom: "", right: "" },
    position2: { top: 0, left: 67, bottom: "", right: "" }
  },
  span4: {
    id: "span-box-4",
    background1: { red: 0, green: 100, blue: 0, opacity: 1 },
    background2: { red: 255, green: 0, blue: 0, opacity: 1 },
    position1: { top: 50, left: 16, bottom: "", right: "" },
    position2: { top: 67, left: 67, bottom: "", right: "" }
  }
};

const circleActor = {
  circle1: {
    id: "circle-1",
    background1: { red: 0, green: 100, blue: 0, opacity: 1 },
    background2: { red: 71, green: 32, blue: 122, opacity: 1 },
    //triggers the scroll-up animation
    upAddClass: "bloom1",
    //class that will replace the current classList on scroll-up animation completion
    upEndClass: "circle2",
    //triggers the scroll-down animation
    downAddClass: "wilt",
    //class that will replace the current classList on scroll-down animation completion
    downEndClass: "circle"
  },
  circle2: {
    id: "circle-2",
    background1: { red: 0, green: 100, blue: 0, opacity: 1 },
    background2: { red: 255, green: 255, blue: 0, opacity: 1 },
    upAddClass: "bloom2",
    upEndClass: "circle2",
    downAddClass: "wilt",
    downEndClass: "circle"
  },
  circle3: {
    id: "circle-3",
    background1: { red: 0, green: 100, blue: 0, opacity: 1 },
    background2: { red: 255, green: 140, blue: 0, opacity: 1 },
    upAddClass: "bloom3",
    upEndClass: "circle2",
    downAddClass: "wilt",
    downEndClass: "circle"
  },
  circle4: {
    id: "circle-4",
    background1: { red: 0, green: 100, blue: 0, opacity: 1 },
    background2: { red: 255, green: 0, blue: 0, opacity: 1 },
    upAddClass: "bloom4",
    upEndClass: "circle2",
    downAddClass: "wilt",
    downEndClass: "circle"
  }
};
//the background x and y postions position values are in % will be
const backgroundImageActor = {
  moveBackground1: {
    id: "parallax-5",
    backgroundPosition1: { x: 50, y: 100 },
    backgroundPosition2: { x: 50, y: 0 }
  },
  scroll1: {
    id: "cypress-comment-box",
    color1: { red: 194, green: 1, blue: 118, opacity: 0 },
    color2: { red: 194, green: 1, blue: 118, opacity: 1 },
    background1: { red: 255, green: 255, blue: 255, opacity: 0 },
    background2: { red: 255, green: 255, blue: 255, opacity: 0.8 }
  }
};
const parallelSlideshowActor = {
  animate1: {
    id: "concluding-triggered-box",
    upAddClass: "appear1",
    //class that will replace the current classList on scroll-up animation completion
    upEndClass: "parallax-comment-box",
    //triggers the scroll-down animation
    downAddClass: "fade1",
    //class that will replace the current classList on scroll-down animation completion
    downEndClass: "opaque0"
  }
};

//THE SCRIPT FOR THE DIRECTORS AND ACTORS!!!

window.onscroll = function() {
  setColor(scrollBoxActor.scroll1, scrollBoxDirector.scroll1);
  setBackgroundColor(scrollBoxActor.scroll1, scrollBoxDirector.scroll1);
  animateObject(commentBoxActor.comment1, commentBoxDirector.comment1);
  animateObject(commentBoxActor.comment2, commentBoxDirector.comment2);
  animateObject(commentBoxActor.comment3, commentBoxDirector.comment3);
  animateObject(commentBoxActor.comment4, commentBoxDirector.comment4);
  animateObject(commentBoxActor.videoComment, commentBoxDirector.videoComment);
  setColor(scrollBoxActor.scroll2, scrollBoxDirector.scroll2);
  setBackgroundColor(scrollBoxActor.scroll2, scrollBoxDirector.scroll2);
  setColor(scrollBoxActor.scroll3, scrollBoxDirector.scroll3);
  setBackgroundColor(scrollBoxActor.scroll3, scrollBoxDirector.scroll3);
  setColor(scrollBoxActor.scroll4, scrollBoxDirector.scroll4);
  setBackgroundColor(scrollBoxActor.scroll4, scrollBoxDirector.scroll4);
  setColor(scrollBoxActor.scroll5, scrollBoxDirector.scroll5);
  setBackgroundColor(scrollBoxActor.scroll5, scrollBoxDirector.scroll5);
  setBackgroundColor(spanBoxActor.span1, spanBoxDirector.scroll1);
  setBackgroundColor(spanBoxActor.span2, spanBoxDirector.scroll2);
  setBackgroundColor(spanBoxActor.span3, spanBoxDirector.scroll3);
  setBackgroundColor(spanBoxActor.span4, spanBoxDirector.scroll4);
  moveAbsoluteObject(spanBoxActor.span1, spanBoxDirector.position1);
  moveAbsoluteObject(spanBoxActor.span2, spanBoxDirector.position1);
  moveAbsoluteObject(spanBoxActor.span3, spanBoxDirector.position1);
  moveAbsoluteObject(spanBoxActor.span4, spanBoxDirector.position1);
  setBackgroundColor(circleActor.circle1, animationBoxDirector.scroll1);
  setBackgroundColor(circleActor.circle2, animationBoxDirector.scroll1);
  setBackgroundColor(circleActor.circle3, animationBoxDirector.scroll1);
  setBackgroundColor(circleActor.circle4, animationBoxDirector.scroll1);
  animateObject(circleActor.circle1, animationBoxDirector.animation1);
  animateObject(circleActor.circle2, animationBoxDirector.animation1);
  animateObject(circleActor.circle3, animationBoxDirector.animation1);
  animateObject(circleActor.circle4, animationBoxDirector.animation1);
  moveBackgroundPosition(
    backgroundImageActor.moveBackground1,
    backgroundImageDirector.backgroundImage1
  );
  setColor(backgroundImageActor.scroll1, backgroundImageDirector.scroll1);
  setBackgroundColor(
    backgroundImageActor.scroll1,
    backgroundImageDirector.scroll1
  );
  animateObject(parallelSlideshowActor.animate1, conclusionDirector.animation1);
};
