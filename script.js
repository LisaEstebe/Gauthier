$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
});

function videoUrl(x){
    document.getElementById("sliderVideo").src = x;
}
