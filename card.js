/*const productHTML = `<main>
      <section class="question-card">
        <h2 data-js="question" class="h2">
          What is the name of the first Marvel Cinematic Universe film, released
          in 2008?
        </h2>

        <button class="answer-button" data-js="showAnswer" class="button">
          show answer
        </button>

        <h3 class="answer-hidden" data-js="answer1" class="h3">Iron Man</h3>

        <div class="tags">
          <span data-js="span">#html </span>
          <span data-js="span">#flexbox</span>
          <span data-js="span">#css</span>
        </div>`; */

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);
  const main = document.querySelector("main");

  const cardElement = document.createElement("section");
  cardElement.className = "question-card";

  const yourQuestionElement = document.createElement("h2");
  yourQuestionElement.className = "h2";
  yourQuestionElement.textContent = data.question;

  const answerButtonElement = document.createElement("button");
  answerButtonElement.className = "answer-button";
  answerButtonElement.textContent = "Show Answer";

  const yourAnswerElement = document.createElement("h3");
  yourAnswerElement.className = "h3 answer-hidden";
  yourAnswerElement.textContent = data.answer;

  const tagElement = document.createElement("span");
  tagElement.className = "tag";
  tagElement.textContent = data.tag;

  cardElement.append(yourQuestionElement);
  cardElement.append(answerButtonElement);
  cardElement.append(yourAnswerElement);
  cardElement.append(tagElement);

  answerButtonElement.addEventListener("click", () => {
    yourAnswerElement.classList.toggle("answer-hidden");
  });

  main.append(cardElement);

  form.reset();
});
