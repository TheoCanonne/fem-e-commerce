const leftCarousel = document.getElementById("left-carousel");
const rightCarousel = document.getElementById("right-carousel");
var indexCarousel = 0;

leftCarousel.addEventListener("click", () => handleCarousel(false));
rightCarousel.addEventListener("click", () => handleCarousel(true));

function handleCarousel(increment) {
  indexCarousel = increment
    ? indexCarousel < 2
      ? indexCarousel + 1
      : 0
    : indexCarousel > 0
    ? indexCarousel -1
    : 2;
  console.log(indexCarousel);
  document.querySelectorAll(".carousel-item").forEach((e) => {
    e.style.transform = `translateX(-${
      indexCarousel * 100
    }%)`;
    console.log(e.style.transform)
  });
}
