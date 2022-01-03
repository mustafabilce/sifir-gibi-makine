$("#banner-slider").owlCarousel({
  items:1,
  loop:false,
  center:true,
  margin:10,
  dots: false,
  URLhashListener:true,
  autoplayHoverPause:true,
  startPosition: 'URLHash'
});

$("#kategori-slider").owlCarousel({
  loop: true,
  autoplay: false,
  margin: 20,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: true,
    },
    768: {
      items: 4,
    },
  },
});

$("#yeni-eklenenler-slider").owlCarousel({
  loop: true,
  autoplay: false,
  margin: 20,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 2,
      nav: false,
      dots: true,
    },
    768: {
      items: 4,
    },
  },
});

$("#ihalelerimiz-slider").owlCarousel({
  loop: true,
  autoplay: false,
  margin: 16,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 2,
      nav: false,
      dots: true,
    },
    768: {
      items: 3,
    },
  },
});

$("#blog-slider").owlCarousel({
  loop: true,
  autoplay: false,
  margin: 20,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 2,
      nav: false,
      dots: true,
    },
    768: {
      items: 3,
    },
  },
});

$("#urun-detay-slider").owlCarousel({
  items: 1,
  dots: false,
  loop: false,
  center: true,
  margin: 10,
  URLhashListener: true,
  autoplayHoverPause: true,
  startPosition: "URLHash",
});

$("#benzer-urunler-slider").owlCarousel({
  loop: true,
  autoplay: false,
  margin: 20,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 4,
    },
  },
});

/* COUNTER */

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEL = document.getElementById("mins");
const secondsEL = document.getElementById("seconds");

const newYears = "30 December 2022";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerText = days;
  hoursEl.innerText = hours;
  minsEL.innerText = minutes;
  secondsEL.innerText = seconds;
}

setInterval(countdown, 1000);

/* Flip Card */

$(".flip-button").on("click", function () {
  $(".front").toggleClass("d-none");
  $(".back").toggleClass("d-block");
});

$(".flip-button-2").on("click", function () {
  $(".front").toggleClass("d-none");
  $(".back").toggleClass("d-block");
});

/* OTHER COUNTER */

$(".counting").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-count");

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo,
    },

    {
      duration: 3000,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
      },
    }
  );
});

$( "#slider-item-1-right" ).click(function() {
  $( "#slider-item-1-right" ).toggleClass( "d-none" );
  $( "#slider-item-1-left" ).toggleClass( "d-block" );
});

$( "#slider-item-1-left" ).click(function() {
  $( "#slider-item-1-right" ).toggleClass( "d-block" );
  $( "#slider-item-1-left" ).removeClass( "d-block" );
});

$( "#slider-item-2-right" ).click(function() {
  $( "#slider-item-2-right" ).toggleClass( "d-none" );
  $( "#slider-item-2-left" ).toggleClass( "d-block" );
});

$( "#slider-item-2-left" ).click(function() {
  $( "#slider-item-2-right" ).toggleClass( "d-block" );
  $( "#slider-item-2-left" ).removeClass( "d-block" );
});

$( "#slider-item-3-right" ).click(function() {
  $( "#slider-item-3-right" ).toggleClass( "d-none" );
  $( "#slider-item-3-left" ).toggleClass( "d-block" );
});

$( "#slider-item-3-left" ).click(function() {
  $( "#slider-item-3-right" ).toggleClass( "d-block" );
  $( "#slider-item-3-left" ).removeClass( "d-block" );
});