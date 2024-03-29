// document.queryselector is used to run html elements within javascript
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

//for cursor mouse events in x and y axis
document.addEventListener("mousemove", function(dets) {
  crsr.style.left = dets.x + "px";   //for moving cursor
  crsr.style.top = dets.y + "px";
  //cursor blur in background
  blur.style.left = dets.x - 200 + "px";
  blur.style.top = dets.y - 200 + "px";
});
// to select all h4 nav
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem) {
  elem.addEventListener("mouseenter", function() {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  //mouseleave
  elem.addEventListener("mouseleave", function() {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

// ham css ki koi bhi property likh skte hai bs camelcase meh likhna hai chizo ko
gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 2,
  height: "90px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    markers: true,
    start: "top -10%",
    end: "top -11%",
    // define the speed of transition
    scrub: 2,
  },
});

// to get animation when my page changes
gsap.to("#main", {
  backgroundColor: "#000",
  // jb scroll kru niche tb ho 
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    //markers: true,
    start: "top -25%",
    end: "top -70%",
    // define the speed of transition
    scrub: 2,
  },
});

//animation in page 2
gsap.from("#about-us img,#about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    markers: true,
    start: "top 70%",
    end: "top 45%",
    scrub: 1,
  },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 55%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 55%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    //markers:true,
    start: "top 90%",
    end: "top 80%",
    scrub: 3,
  },
});
