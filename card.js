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
  yourAnswerElement.className = "answer-hidden";
  yourAnswerElement.textContent = data.answer;

  const tagElement = document.createElement("span");
  tagElement.className = "tags";
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
