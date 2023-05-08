const textarea = document.querySelector(".textarea");
const capitalize = document.querySelector("#capitalize");
console.log(capitalize);
const totalCharacters = document.querySelector(".charactersTotal");
const totalTotal = document.querySelector(".wordsTotal");
const from = document.querySelector("#searchFrom");
const to = document.querySelector("#searchTO");
const replace = document.querySelector("#replace");

const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");

const reverseWords = document.querySelector("#reverseWords");
const reversChars = document.querySelector("#reversChars");
const removeSpaces = document.querySelector("#removeSpaces");

textarea.addEventListener("input", (event) => {
  totalCharacters.textContent = `Total charachters: ${textarea.value.length}`;
  totalTotal.textContent = `Total words: ${textarea.value.split(" ").length}`;
});

capitalize.addEventListener("click", () => {
  let result = "";
  const text = textarea.value.split(" ");
  text.forEach((word) => {
    result +=
      word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase() + " ";
    textarea.value = result;
  });

  // text.value = result;
});

replace.addEventListener("click", () => {
  let result = textarea.value.replaceAll(from.value, to.value);
  textarea.value = result;
});

uppercase.addEventListener("click", () => {
  let result = textarea.value.toUpperCase();
  textarea.value = result;
});

lowercase.addEventListener("click", () => {
  let result = textarea.value.toLowerCase();
  textarea.value = result;
});

reverseWords.forEach("click", () => {
  let value = textarea.value;
  let words = value.split(" ");

  words.forEach((word, index) => {
    words[index] = word.split("").reverse().join("");
  });
  let reversedValue = words.join(" ");
  textarea.value = reversedValue;
});
