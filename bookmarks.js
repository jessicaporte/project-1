const bookmark4 = document.querySelector("[data-js='bookmark-4']");

bookmark4.addEventListener("click", () => {
  bookmark4.classList.toggle("bookmarked");
});

const answer2 = document.querySelector("[data-js='answer2']");
const answerButton = document.querySelector("[data-js='showAnswer']");

answerButton.addEventListener("click", () => {
  answer2.classList.toggle("answer-show");
});
