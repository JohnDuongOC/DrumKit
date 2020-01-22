window.addEventListener("keydown", function(e) {
  /* this.console.log(e.keyCode); */
  /* why backticks */
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //stops the function from running
  audio.currentTime = 0; //rewind to start
  audio.play();
  key.classList.add("playing");
  /* why shouldnt you use setTimeout function? */
});

function removeTransition(e) {
  /* why do i need this */
  if (e.propertyName !== "transform") return; // skip if its not a transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
