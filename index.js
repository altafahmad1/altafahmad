var count = [0,0,0,0,0,0];
var text = "hello, I am";
var txt = ["Hello, I am ", "Altaf Ahmad.", "A Freelance ", "Web Developer ", "and ", "Software Engineer."]; /* The text */
var speed = 20; /* The speed/duration of the effect in milliseconds */


const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const options = {
    rootMargin: "0px 0px -50px 0px"
};

function typeWriter() {
    if (count[0] < txt[0].length) {
      document.getElementById("point1").innerHTML += txt[0].charAt(count[0]);
      count[0]++;
      setTimeout(typeWriter, speed);
    }
    else if (count[1] < txt[1].length) {
        document.getElementById("point2").innerHTML += txt[1].charAt(count[1]);
        count[1]++;
        setTimeout(typeWriter, speed);
    }
    else if (count[2] < txt[2].length) {
        document.getElementById("point3").innerHTML += txt[2].charAt(count[2]);
        count[2]++;
        setTimeout(typeWriter, speed);
    }
    else if (count[3] < txt[3].length) {
        document.getElementById("point4").innerHTML += txt[3].charAt(count[3]);
        count[3]++;
        setTimeout(typeWriter, speed);
    }
    else if (count[4] < txt[4].length) {
        document.getElementById("point5").innerHTML += txt[4].charAt(count[4]);
        count[4]++;
        setTimeout(typeWriter, speed);
    }
    else if (count[5] < txt[5].length) {
        document.getElementById("point6").innerHTML += txt[5].charAt(count[5]);
        count[5]++;
        setTimeout(typeWriter, speed);
    }
}

$(".explore-button").click(function() {
    $('html,body').animate({
        scrollTop: $("#profile-section").offset().top},
        'slow');
});

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll){
   entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
   });
}, options);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});
