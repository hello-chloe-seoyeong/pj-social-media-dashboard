const container = document.querySelector(".container");
const modeSwitch = document.getElementById("switch");

let isChecked = modeSwitch.checked;
const DARKMODE = "dark";

function handleModeSwitch() {
  modeSwitch.checked
    ? container.classList.add(DARKMODE)
    : container.classList.remove(DARKMODE);
}

modeSwitch.addEventListener("click", handleModeSwitch);
