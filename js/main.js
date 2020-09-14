$(document).ready(() => {
  var $win = $(window);

  $(".header .container").append(
    '<div id="sticky"><div class="container sticky-container"></div></div>'
  );
  var $cloneNav = $(".header .container .header__top-relative")
      .clone()
      .appendTo(".sticky-container"),
    showClass = "is--show";
  // function stickyHeader() {
  //   if ($win.width() > 767) {
  //     $(window).scroll(function() {
  //       if ($(window).scrollTop() > 400) {
  //         $(".sticky").addClass(showClass);
  //       } else {
  //         $(".sticky").removeClass(showClass);
  //       }
  //     });
  //   }
  // }
  // function stickyHeader() {
  //   if ($win.width() > 767) {
  //     $win.on("load scroll", () => {
  //       let value = $(this).scrollTop();
  //       if (value > 400) {
  //         $(".sticky").addClass("showClass");
  //       } else {
  //         $(".sticky").removeClass(showClass);
  //       }
  //     });
  //   }d
  // }

  // $win.on("load resize", function() {
  //   stickyHeader();
  // });

  //Sticky menu
  var prevScrollpos = window.pageYOffset;

  if ($(window).width() < 768) {
    window.onscroll = function() {
      let value = $(window).scrollTop();
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos || value === 0) {
        document.getElementById("header-top").style.transform = "translateY(0)";
      } else {
        document.getElementById("header-top").style.transform =
          "translateY(-60px)";
      }
      prevScrollpos = currentScrollPos;
    };
  } else {
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      let value = $(window).scrollTop();
      if (prevScrollpos > currentScrollPos && value > 400) {
        document.getElementById("sticky").style.transform = "translateY(0)";
      } else {
        document.getElementById("sticky").style.transform =
          "translateY(-200px)";
      }

      prevScrollpos = currentScrollPos;
    };
  }

  $(".menu__collapse").click(() => {
    $(".menu").toggleClass("open--menu");
  });

  /* Scroll to */
  $("a[href*='#']:not([href='#])").click(e => {
    const $this = $(e.currentTarget);
    let target = $this.attr("href");
    $("html,body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top
        },
        1200,
        "swing"
      );
    event.preventDefault();
  });
  //Back Top
  $win.scroll(() => {
    if ($win.scrollTop() > 400) {
      $(".backtop").fadeIn(200);
    } else {
      $(".backtop").fadeOut(200);
    }
  });
  $(".backtop").click(() => {
    $("html,body")
      .stop()
      .animate(
        {
          scrollTop: 0
        },
        1200,
        "swing"
      );
    event.preventDefault();
  });
});
