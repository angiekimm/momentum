const maxNumber = document.querySelector("#max-number input");
const userNumber = document.querySelector("#guess-number-form input");
const playBtn = document.querySelector("#guess-number-form button");
const playBtnClickResult = document.querySelector("#play-btn-click-result");
const userNumberResult = playBtnClickResult.querySelector("span:first-child");
const machineResult = playBtnClickResult.querySelector("span:last-child");
const result = document.querySelector("#result");

function handlePlayBtnClick(event) {
  event.preventDefault();
  const maxNumberValue = parseInt(maxNumber.value);
  const useNumberValue = parseInt(userNumber.value);

  if (
    maxNumberValue < 0 ||
    useNumberValue < 0 ||
    isNaN(maxNumberValue) ||
    isNaN(useNumberValue)
  ) {
    alert("Please write the correct number");
  } else {
    userNumberResult.innerText = useNumberValue;

    const randomNumber = Math.floor(Math.random() * (maxNumberValue + 1));
    machineResult.innerText = randomNumber;

    playBtnClickResult.classList.remove("hidden");

    if (useNumberValue === randomNumber) {
      result.innerText = "You won!";
    } else {
      result.innerText = "You lost!";
    }
  }
}

playBtn.addEventListener("click", handlePlayBtnClick);
