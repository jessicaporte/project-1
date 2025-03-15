const bookmark1 = document.querySelector("[data-js='bookmark-1']");

bookmark1.addEventListener("click", () => {
  bookmark1.classList.toggle("bookmarked");
});

const bookmark2 = document.querySelector("[data-js='bookmark-2']");
bookmark2.addEventListener("click", () => {
  bookmark2.classList.toggle("bookmarked");
});

const bookmark3 = document.querySelector("[data-js='bookmark-3']");
bookmark3.addEventListener("click", () => {
  bookmark3.classList.toggle("bookmarked");
});

const answer1 = document.querySelector("[data-js='answer1']");
const answerButtons = document.querySelector("[data-js='showAnswer']");
answerButtons.addEventListener("click", () => {
  answer1.classList.toggle("answer-show");
});

console.log(answer1);

const answer2 = document.querySelector("[data-js='answer2']");
const answerButtons2 = document.querySelector("[data-js='showAnswer2']");
answerButtons2.addEventListener("click", () => {
  answer2.classList.toggle("answer-show");
});

const answer3 = document.querySelector("[data-js='answer3']");
const answerButtons3 = document.querySelector("[data-js='showAnswer3']");
answerButtons3.addEventListener("click", () => {
  answer3.classList.toggle("answer-show");
});
