"use strict";

const faqContentQuestion = document.querySelectorAll(".faq-content-question");
faqContentQuestion.forEach((faqsBox) => {
  const question = faqsBox.querySelector(".question");
  const faqsBtn = faqsBox.querySelector(".toggle-faq-button");

  question.addEventListener("click", () => {
    toggleAnswer(question);
  });

  faqsBtn.addEventListener("click", () => {
    toggleAnswer(faqsBtn);
  });
});

function toggleAnswer(toggle) {
  const showAnswer = toggle.parentElement.nextElementSibling;
  if (showAnswer.classList.contains("hidden")) {
    showAnswer.classList.remove("hidden");
  } else {
    showAnswer.classList.add("hidden");
  }
}
