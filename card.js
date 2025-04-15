const textArea1 = document.querySelector("[data-js='textArea1']");
const remainingCharacters1 = document.querySelector(
  "[data-js='remaining-characters1']"
);
textArea1.addEventListener("input", (event) => {
  remainingCharacters1.textContent = 150 - event.target.value.length;
});
const textArea2 = document.querySelector("[data-js='textArea2']");
const remainingCharacters2 = document.querySelector(
  "[data-js='remaining-characters2']"
);
textArea2.addEventListener("input", (event) => {
  remainingCharacters2.textContent = 150 - event.target.value.length;
});

const textArea3 = document.querySelector("[data-js='textArea3']");
const remainingCharacters3 = document.querySelector(
  "[data-js='remaining-characters3']"
);
textArea3.addEventListener("input", (event) => {
  remainingCharacters3.textContent = 150 - event.target.value.length;
});

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

textArea3.addEventListener("input", () => {
  if (!textArea3.value.startsWith("#")) {
    textArea3.value = "#" + textArea3.value;
  }
});
