let message = document.querySelector(".message")
let firstArt = document.querySelector(".firstArt")
let secondArt = document.querySelector(".secondArt")

let keyupText = (event) => {
  firstArt.innerHTML = event.target.value
  secondArt.innerHTML = event.target.value
}

message.addEventListener("keyup", keyupText)
