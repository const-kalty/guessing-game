let player = prompt("Enter your username")
let number = Math.round(Math.random() + 1);
  let range = prompt("Predict a number between 1-2");
let point = []
const guess = (range) => {
  
  if (range === number) {
    point.push(1);
    number++
    alert("You have 1 point, move to stage 2")

  } else if (range != number) {
    alert("You lose");
  }
  return number
}
guess();



