"use strict";

//EVENT LISTENER WHEN CLICKING ON QUESTION
const openFaqText = document.querySelectorAll(".question");

openFaqText.forEach((text) => {
  text.setAttribute("tabindex", "0");
  const imgBtn = text.nextElementSibling;
  const showAnswer = text.parentElement.nextElementSibling;

  text.addEventListener("click", () => {
    if (showAnswer.classList.contains("hidden")) {
      showAnswer.classList.remove("hidden");
      imgBtn.src = "./assets/images/icon-minus.svg";
    } else {
      showAnswer.classList.add("hidden");
      imgBtn.src = "./assets/images/icon-plus.svg";
    }
  });

  //KEYBOARD EVENT
  text.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && showAnswer.classList.contains("hidden")) {
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
  imgBtn.setAttribute("tabindex", "0");
  const showAnswer = imgBtn.parentElement.nextElementSibling;

  imgBtn.addEventListener("click", () => {
    if (showAnswer.classList.contains("hidden")) {
      showAnswer.classList.remove("hidden");
      imgBtn.src = "./assets/images/icon-minus.svg";
    } else {
      showAnswer.classList.add("hidden");
      imgBtn.src = "./assets/images/icon-plus.svg";
    }
  });

  //KEYBOARD EVENT
  imgBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && showAnswer.classList.contains("hidden")) {
      showAnswer.classList.remove("hidden");
      imgBtn.src = "./assets/images/icon-minus.svg";
    } else {
      showAnswer.classList.add("hidden");
      imgBtn.src = "./assets/images/icon-plus.svg";
    }
  });
});
