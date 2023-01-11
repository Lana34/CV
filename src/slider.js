let offset = 0;
let widthOfImg = document.querySelector(".CV__item_color_aquamarine")
  .offsetWidth;
const slider = document.querySelector(".slider__line");
const btnNext = document.querySelector(".slider__btnNext");
const btnPrev = document.querySelector(".slider__btnPrev");

btnNext.addEventListener("click", () => {
  offset += widthOfImg;
  if (offset > widthOfImg * 3) {
    offset = 0;
  }
  slider.style.left = -offset + "px";
});

btnPrev.addEventListener("click", () => {
  offset -= widthOfImg;
  if (offset < 0) {
    offset = widthOfImg * 3;
  }
  slider.style.left = -offset + "px";
});
