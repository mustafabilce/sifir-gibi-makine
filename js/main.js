$("#banner-slider").owlCarousel({
  items: 1,
  loop: false,
  center: true,
  margin: 10,
  dots: false,
  URLhashListener: true,
  autoplayHoverPause: true,
  startPosition: "URLHash",
});

$("#kategori-slider").owlCarousel({
  loop: false,
  autoplay: false,
  margin: 20,
  center: true,
  startPosition: 1,
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
  loop: false,
  center: true,
  startPosition: 1,
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

// Create Countdown
var Countdown = {
  // Backbone-like structure
  $el: $(".countdown"),

  // Params
  countdown_interval: null,
  total_seconds: 0,

  // Initialize the countdown
  init: function () {
    // DOM
    this.$ = {
      hours: this.$el.find(".bloc-time.hours .figure"),
      minutes: this.$el.find(".bloc-time.min .figure"),
      seconds: this.$el.find(".bloc-time.sec .figure"),
    };

    // Init countdown values
    this.values = {
      hours: this.$.hours.parent().attr("data-init-value"),
      minutes: this.$.minutes.parent().attr("data-init-value"),
      seconds: this.$.seconds.parent().attr("data-init-value"),
    };

    // Initialize total seconds
    this.total_seconds =
      this.values.hours * 60 * 60 +
      this.values.minutes * 60 +
      this.values.seconds;

    // Animate countdown to the end
    this.count();
  },

  count: function () {
    var that = this,
      $hour_1 = this.$.hours.eq(0),
      $hour_2 = this.$.hours.eq(1),
      $min_1 = this.$.minutes.eq(0),
      $min_2 = this.$.minutes.eq(1),
      $sec_1 = this.$.seconds.eq(0),
      $sec_2 = this.$.seconds.eq(1);

    this.countdown_interval = setInterval(function () {
      if (that.total_seconds > 0) {
        --that.values.seconds;

        if (that.values.minutes >= 0 && that.values.seconds < 0) {
          that.values.seconds = 59;
          --that.values.minutes;
        }

        if (that.values.hours >= 0 && that.values.minutes < 0) {
          that.values.minutes = 59;
          --that.values.hours;
        }

        // Update DOM values
        // Hours
        that.checkHour(that.values.hours, $hour_1, $hour_2);

        // Minutes
        that.checkHour(that.values.minutes, $min_1, $min_2);

        // Seconds
        that.checkHour(that.values.seconds, $sec_1, $sec_2);

        --that.total_seconds;
      } else {
        clearInterval(that.countdown_interval);
      }
    }, 1000);
  },

  animateFigure: function ($el, value) {
    var that = this,
      $top = $el.find(".top"),
      $bottom = $el.find(".bottom"),
      $back_top = $el.find(".top-back"),
      $back_bottom = $el.find(".bottom-back");

    // Before we begin, change the back value
    $back_top.find("span").html(value);

    // Also change the back bottom value
    $back_bottom.find("span").html(value);

    // Then animate
    TweenMax.to($top, 0.8, {
      rotationX: "-180deg",
      transformPerspective: 300,
      ease: Quart.easeOut,
      onComplete: function () {
        $top.html(value);

        $bottom.html(value);

        TweenMax.set($top, { rotationX: 0 });
      },
    });

    TweenMax.to($back_top, 0.8, {
      rotationX: 0,
      transformPerspective: 300,
      ease: Quart.easeOut,
      clearProps: "all",
    });
  },

  checkHour: function (value, $el_1, $el_2) {
    var val_1 = value.toString().charAt(0),
      val_2 = value.toString().charAt(1),
      fig_1_value = $el_1.find(".top").html(),
      fig_2_value = $el_2.find(".top").html();

    if (value >= 10) {
      // Animate only if the figure has changed
      if (fig_1_value !== val_1) this.animateFigure($el_1, val_1);
      if (fig_2_value !== val_2) this.animateFigure($el_2, val_2);
    } else {
      // If we are under 10, replace first figure with 0
      if (fig_1_value !== "0") this.animateFigure($el_1, 0);
      if (fig_2_value !== val_1) this.animateFigure($el_2, val_1);
    }
  },
};

Countdown.init();

var Countdown = {
  // Backbone-like structure
  $el: $(".countdown2"),

  // Params
  countdown_interval: null,
  total_seconds: 0,

  // Initialize the countdown
  init: function () {
    // DOM
    this.$ = {
      hours: this.$el.find(".bloc-time.hours .figure"),
      minutes: this.$el.find(".bloc-time.min .figure"),
      seconds: this.$el.find(".bloc-time.sec .figure"),
    };

    // Init countdown values
    this.values = {
      hours: this.$.hours.parent().attr("data-init-value"),
      minutes: this.$.minutes.parent().attr("data-init-value"),
      seconds: this.$.seconds.parent().attr("data-init-value"),
    };

    // Initialize total seconds
    this.total_seconds =
      this.values.hours * 60 * 60 +
      this.values.minutes * 60 +
      this.values.seconds;

    // Animate countdown to the end
    this.count();
  },

  count: function () {
    var that = this,
      $hour_1 = this.$.hours.eq(0),
      $hour_2 = this.$.hours.eq(1),
      $min_1 = this.$.minutes.eq(0),
      $min_2 = this.$.minutes.eq(1),
      $sec_1 = this.$.seconds.eq(0),
      $sec_2 = this.$.seconds.eq(1);

    this.countdown_interval = setInterval(function () {
      if (that.total_seconds > 0) {
        --that.values.seconds;

        if (that.values.minutes >= 0 && that.values.seconds < 0) {
          that.values.seconds = 59;
          --that.values.minutes;
        }

        if (that.values.hours >= 0 && that.values.minutes < 0) {
          that.values.minutes = 59;
          --that.values.hours;
        }

        // Update DOM values
        // Hours
        that.checkHour(that.values.hours, $hour_1, $hour_2);

        // Minutes
        that.checkHour(that.values.minutes, $min_1, $min_2);

        // Seconds
        that.checkHour(that.values.seconds, $sec_1, $sec_2);

        --that.total_seconds;
      } else {
        clearInterval(that.countdown_interval);
      }
    }, 1000);
  },

  animateFigure: function ($el, value) {
    var that = this,
      $top = $el.find(".top"),
      $bottom = $el.find(".bottom"),
      $back_top = $el.find(".top-back"),
      $back_bottom = $el.find(".bottom-back");

    // Before we begin, change the back value
    $back_top.find("span").html(value);

    // Also change the back bottom value
    $back_bottom.find("span").html(value);

    // Then animate
    TweenMax.to($top, 0.8, {
      rotationX: "-180deg",
      transformPerspective: 300,
      ease: Quart.easeOut,
      onComplete: function () {
        $top.html(value);

        $bottom.html(value);

        TweenMax.set($top, { rotationX: 0 });
      },
    });

    TweenMax.to($back_top, 0.8, {
      rotationX: 0,
      transformPerspective: 300,
      ease: Quart.easeOut,
      clearProps: "all",
    });
  },

  checkHour: function (value, $el_1, $el_2) {
    var val_1 = value.toString().charAt(0),
      val_2 = value.toString().charAt(1),
      fig_1_value = $el_1.find(".top").html(),
      fig_2_value = $el_2.find(".top").html();

    if (value >= 10) {
      // Animate only if the figure has changed
      if (fig_1_value !== val_1) this.animateFigure($el_1, val_1);
      if (fig_2_value !== val_2) this.animateFigure($el_2, val_2);
    } else {
      // If we are under 10, replace first figure with 0
      if (fig_1_value !== "0") this.animateFigure($el_1, 0);
      if (fig_2_value !== val_1) this.animateFigure($el_2, val_1);
    }
  },
};

Countdown.init();

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

$("#slider-item-1-right").click(function () {
  $("#slider-item-1-right").toggleClass("d-none");
  $("#slider-item-1-left").toggleClass("d-block");
});

$("#slider-item-1-left").click(function () {
  $("#slider-item-1-right").toggleClass("d-block");
  $("#slider-item-1-left").removeClass("d-block");
});

$("#slider-item-2-right").click(function () {
  $("#slider-item-2-right").toggleClass("d-none");
  $("#slider-item-2-left").toggleClass("d-block");
});

$("#slider-item-2-left").click(function () {
  $("#slider-item-2-right").toggleClass("d-block");
  $("#slider-item-2-left").removeClass("d-block");
});

$("#slider-item-3-right").click(function () {
  $("#slider-item-3-right").toggleClass("d-none");
  $("#slider-item-3-left").toggleClass("d-block");
});

$("#slider-item-3-left").click(function () {
  $("#slider-item-3-right").toggleClass("d-block");
  $("#slider-item-3-left").removeClass("d-block");
});
