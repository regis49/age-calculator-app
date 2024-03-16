import "./style.css";

const app = document.querySelector("#app");
let age = 0;

function calculateAge(dateInput) {
  let dateBirth = new Date(dateInput);
  let dateNow = new Date();
  if (dateBirth != "Invalid Date") {
    age = dateNow.getFullYear() - dateBirth.getFullYear();
    return age;
  }
  alert("Please enter your birthday");
}

function createElement(element) {
  const ele = document.createElement(element);
  return ele;
}

const subTitle = createElement("p");
subTitle.innerText = "Enter your date of birth:";
subTitle.style.fontWeight = "bold";
app.appendChild(subTitle);

const input = document.createElement("input");
input.setAttribute("type", "date");
input.setAttribute("value", "value");
app.appendChild(input);

const button = document.querySelector("button");

app.insertBefore(button, input);
app.insertBefore(input, button);

const showMessage = () =>
  `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
const sentence = createElement("p");
sentence.innerText = showMessage();
sentence.style.fontWeight = "bold";
sentence.style.fontSize = "20px";
app.appendChild(sentence);

button.addEventListener("click", () => {
  calculateAge(input.value);
  sentence.innerText = showMessage();
});
