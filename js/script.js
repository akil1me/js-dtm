var elForm = document.querySelector(".form");
var elInput = elForm.querySelector(".form__input");
var elSelect = elForm.querySelector(".form__select");
var elOutput = document.querySelector(".output__result");

var maxBall = 189;
var minBall = 0;

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var inputValue = Number(elInput.value);
  var selectValue = Number(elSelect.value);

  if (inputValue < 0) {
    elOutput.setAttribute("class", "output__result-red");
    elOutput.textContent = 'Son faqat musbatda beriladi';
  }
  else if (inputValue >= selectValue && inputValue <= maxBall) {
    elOutput.setAttribute("class", "output__result-green");
    elOutput.textContent = 'Tabriklaymiz siz uqishga tavsiya etildimhiz';
  }
  else if (inputValue <= selectValue && inputValue >= minBall) {
    elOutput.setAttribute("class", "output__result-orange");
    elOutput.textContent = 'Afsuski siz uqishga tavsiya etilmadiz';
  }
  else if (isNaN(selectValue)) {
    elOutput.setAttribute("class", "output__result-red");
    elOutput.textContent = 'Kechirasiz siz yo`nalish tanlamadingiz';
  }
  else if (inputValue > maxBall) {
    elOutput.setAttribute("class", "output__result-red");
    elOutput.textContent = 'Kechirasiz siz maksilmal baldan yuqori ball kiritdingiz';
  }

})