const accordionBtns = document.querySelectorAll(".accordion__title__button");
const accordionCheckbox = document.getElementById("multiple__checkbox");
const accordionContent = document.getElementsByClassName("accordion__content ");
const active = null;

for (let i = 0; i < accordionBtns.length; i++) {
  accordionBtns[i].addEventListener("click", function () {
    if (accordionCheckbox.checked) {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      // if (content.classList.contains("open")) {
      //   content.classList.remove("open");
      // } else {
      //   content.classList.add("open");
      // }
      content.classList.toggle("open");
    } else {
      this.classList.toggle("active");
      for (let j = 0; j < accordionContent.length; j++) {
        if (i === j) {
          accordionContent[j].classList.toggle("open");
        } else {
          accordionContent[j].classList.remove("open");
        }
      }
    }
  });
}
