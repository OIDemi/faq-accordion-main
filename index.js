"use strict";

const openFaqAnswer = document.querySelectorAll(".faq-content-question");

openFaqAnswer.forEach((showFaq) => {
  showFaq.addEventListener("click", () => {
    const showAnswer = showFaq.nextElementSibling;
    const imgBtn = showFaq.lastElementChild;
    if (showAnswer.classList.contains("hidden")) {
      showAnswer.classList.remove("hidden");
      imgBtn.src = "./assets/images/icon-minus.svg";
    } else {
      showAnswer.classList.add("hidden");
      imgBtn.src = "./assets/images/icon-plus.svg";
    }
  });
});
