$("#kategori-slider").owlCarousel({
  loop: true,
  autoplay: false,
  margin: 20,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 3,
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
      items: 3,
    },
  },
});

$("#ihalelerimiz-slider").owlCarousel({
  loop: true,
  autoplay: false,
  margin: 20,
  nav: true,
  dots: false,
  responsive: {
    0: {
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

$('.flip-button').on('click', function () {
  $('.front').toggleClass('d-none');
  $('.back').toggleClass('d-block');
});

$('.flip-button-2').on('click', function () {
  $('.front').toggleClass('d-none');
  $('.back').toggleClass('d-block');
});