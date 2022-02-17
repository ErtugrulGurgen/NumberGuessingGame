let guessById = document.getElementById("guess");
let submitById = document.getElementById("submit");
let attemptsById = document.getElementById("attempt");
let rangeMinById = document.getElementById("rangeMin");
let rangeMaxById = document.getElementById("rangeMax");
let enterById = document.getElementById("enter");
let outputById = document.getElementById("output");
let img1ById = document.getElementById("fireworks1");
let img2ById = document.getElementById("fireworks2")
let formById = document.getElementById("form");
let counter = 0;
let result = Math.floor(Math.random() * 100);

submitById.addEventListener("click", () => {
  console.log(result);
  let guessValue = guessById.value;
  let rangeMin = parseInt(rangeMinById.innerHTML);
  let rangeMax = parseInt(rangeMaxById.innerHTML);
  let guess = parseInt(guessById.value);
  console.log(guess,result);
//   let attempt = attemptsById.value;
  if (guessById.value.length == 0) {
    alert("Please enter a number.");
  } else if (result == guess) {
    outputById.innerHTML = ["Congrats!"];
    enterById.innerHTML = [" "];
    img1ById.style.display = "inline";
    img2ById.style.display = "inline";
    formById.style.display = "none";
  } else if (guess < result && guess>rangeMin) {
    rangeMinById.innerHTML = guessValue;
    counter++;
  } else if(guess > result && guess<rangeMax){
    rangeMaxById.innerHTML = guessValue;
    counter++;
  } else{
      counter++;
  }
  console.log(guess < result);
  attemptsById.innerHTML = counter;
});
