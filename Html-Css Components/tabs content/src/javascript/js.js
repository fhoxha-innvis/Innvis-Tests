document.addEventListener("DOMContentLoaded", () => {
  const tabsBtns = document.querySelectorAll(".tabs-container-title-button");
  const tabsContent = document.querySelectorAll(".tabs-container-content-body");

  tabsBtns.forEach((btn, i) => {
    btn.addEventListener("click", function () {
      tabsBtns.forEach((other, j) => {
        if (btn !== other && other.classList.contains("is__active")) {
          tabsContent[j].classList.remove("is__active");
          other.classList.remove("is__active");

          tabsContent[i].classList.add("is__active");
          btn.classList.add("is__active");
        }
      });
    });
  });
});
