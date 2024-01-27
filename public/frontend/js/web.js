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
  var foto = document.querySelectorAll("#slider li")

 
const sayi = 100 / totalSlides;
  for (let index = 0; index < foto.length; index++) {
    console.log(foto[index]);
    foto[index].style.width = sayi.toString() + "%";
    
  }
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
          slidesToShow: 1,
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
    document.body.scrollTop > 0 ||
    document.documentElement.scrollTop > 0
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

responsiveNavbar();

function responsiveNavbar() {
  const nav = document.querySelector(".nav-menu");
  document.querySelector(".fa-bars").addEventListener("click", barsClick);
  function barsClick() {
    nav.classList.toggle("nav-menu-trans");

    window.onscroll = function () {
      const navv = document.querySelector(".navv");
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        navv.style.marginTop = "-270px";
      } else {
        navv.style.marginTop = "0";
        nav.classList.remove("nav-menu-trans");
      }
    };
  }
}

var viewport_width = window.innerWidth;

if (viewport_width <= 7690) {
  var navlink = document.querySelector("#kurumsal");
  var navvvlink = document.querySelector("#kurumsal-alt");
  var navlinkiii = document.querySelector(".nav-link-a-ii");
  navlink.addEventListener("click", () => {
    navvvlink.classList.toggle("nav-link-alt-active");

    navlinkiii.classList.toggle("nav-link-a-i-active");
    if (navvvlink2.classList.contains("nav-link-alt-active")) {
      navvvlink2.classList.remove("nav-link-alt-active");
      navlinkii.classList.remove("nav-link-a-i-active");
    }
  });
  var navlink2 = document.querySelector("#projeler");
  var navvvlink2 = document.querySelector("#projeler-alt");
  var navlinkii = document.querySelector(".nav-link-a-i");
  navlink2.addEventListener("click", () => {
    navvvlink2.classList.toggle("nav-link-alt-active");

    navlinkii.classList.toggle("nav-link-a-i-active");
    if (navvvlink.classList.contains("nav-link-alt-active")) {
      navvvlink.classList.remove("nav-link-alt-active");
      navlinkiii.classList.remove("nav-link-a-i-active");
    }
  });

  if (document.querySelector(".cl")) {
    const nav = document.querySelector(".nav-menu");
    document.querySelector(".cl").addEventListener("click", () => {
      nav.classList.remove("nav-menu-trans");
    });
  }
}

let buttonRight = document.querySelector("#detail-alt-right");
let buttonLeft = document.querySelector("#detail-alt-left");

buttonLeft.addEventListener("click", function () {
  document.querySelector(".detail-alt").scrollLeft -= 170;
});

buttonRight.addEventListener("click", function () {
  document.querySelector(".detail-alt").scrollLeft += 170;
});

let altImages = document.querySelectorAll(".detail-alt-image");
let dots = document.querySelectorAll(".detail-alt-dots ul i");
document.querySelector(".detail-image-img").src = altImages[0].src;
altImages[0].classList.add("alt-image-active");
dots[0].classList.add("circle-active");




altImages.forEach((eleman, index) => {
  eleman.addEventListener("load", ()=>{
    elem.classList.remove("alt-image-active");
  })
  eleman.addEventListener("click", () => {
    // Tüm <li> elemanlarından "active" sınıfını kaldırın
    altImages.forEach((elem) => {
      elem.classList.remove("alt-image-active");
    });

    // Tıklanan <li> elemanına "active" sınıfını ekleyin
    document.querySelector(".detail-image-img").src = eleman.src;
    eleman.classList.add("alt-image-active");

    dots.forEach((elem, inde) => {
      if (index == inde) {
        elem.classList.add("circle-active");
      }
      dots.forEach((el, indexx) => {
        if (index != indexx) {
          el.classList.remove("circle-active");
        }
      });
    });
  });
});

document.querySelector(".det-btn a").addEventListener("click", (e) => {

  document.querySelector("#map-section").classList.toggle("map-active");
  document.querySelector(".detail-map").classList.toggle("detail-map-active");
});

document.querySelector(".detail-image-img").addEventListener("click", () => {
  document.addEventListener('DOMContentLoaded', function(){
    Code.photoSwipe('img', '.detail-alt-area', { captionAndToolbarHideOnSwipe: false } );
  }, false);
  
  
  
  
  document.querySelector(".picture-plus").classList.add("picture-plus-active");

  if (altImages[0].classList.contains("alt-image-active")) {
    document.querySelector(".plus-image img").src = altImages[0].src;
  }
});

document.querySelector("#plus-close").addEventListener("click", () => {
  document
    .querySelector(".picture-plus")
    .classList.remove("picture-plus-active");
});

var images = [];

altImages.forEach((eleman) => {
  images.push(eleman);
});

var currentIndex = 0;
var imgElement = document.querySelector(".plus-image img");

function showImage(index) {
  if (index < 0 || index >= images.length) return;
  imgElement.src = images[index].src;
  currentIndex = index;
}

document.querySelector("#plus-left").addEventListener("click", function () {
  showImage(currentIndex - 1);
});

document.querySelector("#plus-right").addEventListener("click", function () {
  showImage(currentIndex + 1);
});

// İlk görüntüyü göstermek için:

for (var i = 0; i < altImages.length; i++) {
  altImages[i].addEventListener("click", function (event) {
    event.preventDefault(); // Linkin varsayılan davranışını engelle (sayfayı yenileme gibi)
    var index = Array.prototype.indexOf.call(altImages, this);

    // Burada yapmak istediğiniz işlemleri gerçekleştirebilirsiniz.

    showImage(index);
  });
}
//------------------------------------------------------------------------------------
// let plusGlass = document.querySelector(".fa-magnifying-glass-plus");
// let minusGlass = document.querySelector(".fa-magnifying-glass-minus");
// let sayac = 1;

// plusGlass.addEventListener("click", function () {
//   sayac = sayac + 0.1;
//   document.querySelector(".plus-image img").style.transform = `scale(${sayac})`;

//   if (sayac > 1) {
//     document.querySelector("#plus-left").style.display = "none";
//     document.querySelector("#plus-right").style.display = "none";
//   }
// });

// minusGlass.addEventListener("click", function () {
//   sayac = sayac - 0.1;
//   if (sayac < 1) {
//     sayac = 1;
//   }
//   if (sayac == 1) {
//     document.querySelector("#plus-left").style.display = "block";
//     document.querySelector("#plus-right").style.display = "block";
//   }
//   document.querySelector(".plus-image img").style.transform = `scale(${sayac})`;
// });


