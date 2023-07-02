window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");
  loader.addEventListener("transitionend", () => {
    loader.style.visibility = "hidden";
  });
});

//current position
var pos = 0;
//number of slides
var totalSlides = $("#slider-wrap ul li").length;
//get the slide width
var sliderWidth = $("#slider-wrap").width();

$(document).ready(function () {
  /*****************
       BUILD THE SLIDER
      *****************/
  //set width to be 'x' times the number of slides
  $("#slider-wrap ul#slider").width(sliderWidth * totalSlides);

  //next slide
  $("#next").click(function () {
    slideRight();
  });

  //previous slide
  $("#previous").click(function () {
    slideLeft();
  });

  /*************************
       //*> OPTIONAL SETTINGS
      ************************/
  //automatic slider
  var autoSlider = setInterval(slideRight, 3000);

  //for each slide
  $.each($("#slider-wrap ul li"), function () {
    //set its color

    //create a pagination
    var li = document.createElement("li");
    $("#pagination-wrap ul").append(li);
  });

  //counter
  countSlides();

  //pagination
  pagination();

  //hide/show controls/btns when hover
  //pause automatic slide when hover
  $("#slider-wrap").hover(
    function () {
      $(this).addClass("active");
      clearInterval(autoSlider);
    },
    function () {
      $(this).removeClass("active");
      autoSlider = setInterval(slideRight, 3000);
    }
  );
}); //DOCUMENT READY

/***********
   SLIDE LEFT
  ************/
function slideLeft() {
  pos--;
  if (pos == -1) {
    pos = totalSlides - 1;
  }
  $("#slider-wrap ul#slider").css("left", -(sliderWidth * pos));

  //*> optional
  countSlides();
  pagination();
}

/************
   SLIDE RIGHT
  *************/
function slideRight() {
  pos++;
  if (pos == totalSlides) {
    pos = 0;
  }
  $("#slider-wrap ul#slider").css("left", -(sliderWidth * pos));

  //*> optional
  countSlides();
  pagination();
}

/************************
   //*> OPTIONAL SETTINGS
  ************************/
function countSlides() {
  $("#counter").html(pos + 1 + " / " + totalSlides);
}

function pagination() {
  $("#pagination-wrap ul li").removeClass("active");
  $("#pagination-wrap ul li:eq(" + pos + ")").addClass("active");
}

$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 110000,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  });
});

window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.querySelector("nav").style.marginTop = "-158px";
  } else {
    document.querySelector("nav").style.marginTop = "0";
  }

  if (
    document.body.scrollTop > 1900 ||
    document.documentElement.scrollTop > 1900
  ) {
    const counters = document.querySelectorAll(".count");
    const speed = 10000;

    counters.forEach((counter) => {
      const animate = () => {
        const value = +counter.getAttribute("data-val");
        const data = +counter.innerText;

        const time = value / speed;
        if (data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        } else {
          counter.innerText = value;
        }
      };

      animate();
    });
  }
};

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

//Responsive Navbar Animation



function responsiveNavbar() {
  const nav = document.querySelector(".nav-menu");
  document.querySelector(".fa-bars").addEventListener("click", barsClick);
  function barsClick() {
    nav.classList.toggle("nav-menu-trans");

    window.onscroll = function () {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        nav.style.marginTop = "-270px";
      } else {
        nav.style.marginTop = "0";
      }
    };
  }
}

var viewport_width = window.innerWidth;

if (viewport_width <=480) {
  responsiveNavbar();

    var navlink = document.querySelector("#kurumsal");
    var navvvlink = document.querySelector("#kurumsal-alt")
    var navlinkiii = document.querySelector(".nav-link-a-ii")
    navlink.addEventListener("click", ()=>{
  
      
      navvvlink.classList.toggle("nav-link-alt-active");

     
      navlinkiii.classList.toggle("nav-link-a-i-active")
      if(navvvlink2.classList.contains("nav-link-alt-active")){
        navvvlink2.classList.remove("nav-link-alt-active");
        navlinkii.classList.remove("nav-link-a-i-active")
      }
    })
    var navlink2 = document.querySelector("#projeler");
    var navvvlink2 = document.querySelector("#projeler-alt")
    var navlinkii = document.querySelector(".nav-link-a-i")
    navlink2.addEventListener("click", ()=>{
      
      navvvlink2.classList.toggle("nav-link-alt-active");

      
      navlinkii.classList.toggle("nav-link-a-i-active")
      if(navvvlink.classList.contains("nav-link-alt-active")){
        navvvlink.classList.remove("nav-link-alt-active");
        navlinkiii.classList.remove("nav-link-a-i-active")
      }
    })

    // function navlink() {
    //   var navvvlink2 = document.querySelector("#kurumsal-alt")
    //   navvvlink2.classList.toggle("nav-link-alt-active");
    // }
    // function navlinkk() {
    //   var navvvlink2 = document.querySelector("#projeler-alt")
    //   navvvlink2.classList.toggle("nav-link-alt-active");

    //   if()
    // }
  

}
