/**
 * Template Name: Restaurantly - v2.0.0
 * Template URL: https://bootstrapmade.com/restaurantly-restaurant-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

!(function ($) {
  "use strict";
  // Preloader
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(100)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });

  var scrolltoOffset = $("#header").outerHeight() - 1;

  $(document).on(
    "click",
    ".nav-menu a, .mobile-nav a, .scrollto",
    function (e) {
      if (
        location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        if (target.length) {
          e.preventDefault();

          var scrollto = target.offset().top - scrolltoOffset;

          if ($(this).attr("href") == "#header") {
            scrollto = 0;
          }

          $("html, body").animate(
            {
              scrollTop: scrollto,
            },
            1500,
            "easeInOutExpo"
          );

          if ($(this).parents(".nav-menu, .mobile-nav").length) {
            $(".nav-menu .active, .mobile-nav .active").removeClass("active");
            $(this).closest("li").addClass("active");
          }

          if ($("body").hasClass("mobile-nav-active")) {
            $("body").removeClass("mobile-nav-active");
            $(".mobile-nav-overly").fadeOut();
          }
          return false;
        }
      }
    }
  );

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function () {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        console.log(scrolltoOffset);
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $("html, body").animate(
          {
            scrollTop: scrollto,
          },
          1500,
          "easeInOutExpo"
        );
      }
    }
  });

  // Mobile Navigation
  if ($(".nav-menu").width) {
    $(document).on("click", ".mobile-nav-toggle", function (e) {
      $("body").toggleClass("mobile-nav-active");
      $(".mobile-nav-overly").toggle();
    });

    $(document).on("click", ".mobile-nav-close", function (e) {
      $("body").removeClass("mobile-nav-active");
      $(".mobile-nav-overly").fadeOut();
    });

    $(document).on("click", ".mobile-nav p", function (e) {
      $("body").removeClass("mobile-nav-active");
      $(".mobile-nav-overly").fadeOut();
    });

    $(document).on("click", ".mobile-nav .drop-down > a", function (e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass("active");
    });

    $(document).click(function (e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($("body").hasClass("mobile-nav-active")) {
          $("body").removeClass("mobile-nav-active");
          // $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $(".mobile-nav-overly").fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $("#header").addClass("header-scrolled");
      $("#topbar").addClass("topbar-scrolled");
    } else {
      $("#header").removeClass("header-scrolled");
      $("#topbar").removeClass("topbar-scrolled");
    }
  });

  if ($(window).scrollTop() > 100) {
    $("#header").addClass("header-scrolled");
    $("#topbar").addClass("topbar-scrolled");
  }

  // Navigation active state on scroll
  var nav_sections = $("section");
  var main_nav = $(".nav-menu, .mobile-nav");
  console.log(main_nav);
  $(window).on("scroll", function () {
    var cur_pos = $(this).scrollTop() + 200;
    nav_sections.each(function () {
      var top = $(this).offset().top;
      var bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find("li").removeClass("active");
        }
        main_nav
          .find('a[href="#' + $(this).attr("id") + '"]')
          .parent("li")
          .addClass("active");
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass("active");
      }
    });
  });

  // Back to top button
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500,
      "easeInOutExpo"
    );
    return false;
  });

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    portfolioIsotope.isotope({
      filter: $('#starting').data('filter')
    });
    $('#portfolio-filters li').on('click', function () {
      $("#portfolio-filters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });


    // Initiate aos_init() function
    aos_init();

  });

  // Events carousel (uses the Owl Carousel library)
  $(".events-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    autoplayTimeout: 6000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      900: {
        items: 3,
      },
    },
  });


  $(window).on('load', function () {
    $('.food-chef').bind('click', function (e) {
      if (!$(e.target).is('.foreground-food *')) {
        $(".food-chef").addClass("active");
        $(".foreground-food").css({ 'opacity': '0' })
        $(".content2").css({ 'opacity': '0' })
        setTimeout(() => {
          $(".food-chef").removeClass("active");
          $(".foreground-food").css({ 'opacity': '1' })
          $(".content2").css({ 'opacity': '1' })
        }, 2500)
      }
    })
  })

  // chef-master photo carousel
  $(document).ready(function () {
    $('#chefs .owl-carousel').owlCarousel({
      // autoplay:true,
      loop: true,
      autoplay: true,
      nav: true,
      navText: ["<div class='nav-button owl-prev'><i class='icofont-caret-left'></i></div>", "<div class='nav-button owl-next'><i class='icofont-caret-right'></i></div>"],
      dots: false,
      slideSpeed: 1500,
      responsive: {
        0: {
          items: 1
        }

      }
    });
  })

  // Initiate venobox lightbox
  $(document).ready(function () {
    $(".venobox").venobox();
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }
  $(window).on("load", function () {
    aos_init();
  });
})(jQuery);