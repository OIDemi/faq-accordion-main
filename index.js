"use strict";

//EVENT LISTENER WHEN CLICKING ON QUESTION
const openFaqText = document.querySelectorAll(".question");

openFaqText.forEach((text) => {
  text.addEventListener("click", () => {
    const imgBtn = text.nextElementSibling;
    const showAnswer = text.parentElement.nextElementSibling;
    if (showAnswer.classList.contains("hidden")) {
      showAnswer.classList.remove("hidden");
      imgBtn.src = "./assets/images/icon-minus.svg";
    } else {
      showAnswer.classList.add("hidden");
      imgBtn.src = "./assets/images/icon-plus.svg";
    }
  });
});

//EVENT LISTENER WHEN CLICKING ON IMAGE
const openBtn = document.querySelectorAll(".toggle-faq-button");

openBtn.forEach((imgBtn) => {
  imgBtn.addEventListener("click", () => {
    const showAnswer = imgBtn.parentElement.nextElementSibling;
    if (showAnswer.classList.contains("hidden")) {
      showAnswer.classList.remove("hidden");
      imgBtn.src = "./assets/images/icon-minus.svg";
    } else {
      showAnswer.classList.add("hidden");
      imgBtn.src = "./assets/images/icon-plus.svg";
    }
  });
});
