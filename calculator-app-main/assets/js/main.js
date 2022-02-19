const switchBar = document.querySelector(".switch-bar");
const THEME_HREF_PREFIX = "assets/css/theme-";

switchBar.addEventListener("click", changeTheme);

function changeTheme() {
  const theme = document.querySelector("link#theme");
  if (!theme) {
    console.error("[changeTheme Error] theme not found");
    return false;
  }
  const themeNumber = Number(theme.href.replace(".css", "").slice(-1));
  if (Number.isNaN(themeNumber) || themeNumber > 3 || themeNumber < 1) {
    console.error("[changeTheme Error] theme number is not valid");
    return false;
  }
  const newThemeNumber = themeNumber === 3 ? 1 : themeNumber + 1;
  theme.href = `${THEME_HREF_PREFIX}${newThemeNumber}.css`;
}

// 初始化參數
const box = document.querySelector(".app-display__content");
box.textContent = "0";

const numberButtons = document.querySelectorAll("button[data-number]");
const operatorButtons = document.querySelectorAll("button[data-operator]");
const dotButton = document.querySelector("#dot-btn");
const resetButton = document.querySelector("#reset-btn");
const backSpaceButton = document.querySelector("#back-space-btn");
const equalButton = document.querySelector("#equal-btn");
numberButtons.forEach((numberButton) => {
  numberButton.addEventListener("click", function (e) {
    operand(e.target.dataset.number);
  });
});
operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", function (e) {
    operator(e.target.dataset.operator);
  });
});
dotButton.addEventListener("click", addDot);
resetButton.addEventListener("click", resetScreen);
backSpaceButton.addEventListener("click", backSpace);
equalButton.addEventListener("click", calculate);

const calculator = {
  firstValue: null,
  secondValue: null,
  operator: null,
};

// 運算元 (數字0~9)
function operand(num) {
  if (calculator.operator !== null && calculator.secondValue === null) {
    box.textContent = num;
  } else {
    box.textContent += num;
    box.textContent = +box.textContent;
  }
  if (calculator.operator === null) {
    calculator.firstValue = +box.textContent;
  } else {
    calculator.secondValue = +box.textContent;
  }
}

// 運算子 (加減乘除)
function operator(action) {
  calculator.operator = action;
}

// 計算結果
function calculate() {
  let op = calculator.operator;
  let n1 = calculator.firstValue;
  let n2 = calculator.secondValue;
  let result = 0;
  let floatCalculate = false;
  if (!(Number.isInteger(n1) || Number.isInteger(n2))) {
    n1 *= Math.pow(10, 10);
    n2 *= Math.pow(10, 10);
    floatCalculate = true;
  }
  if (op !== null && n1 !== null && n2 !== null) {
    if (op === "add") {
      result = parseFloat(n1) + parseFloat(n2);
    } else if (op === "subtract") {
      result = parseFloat(n1) - parseFloat(n2);
    } else if (op === "times") {
      result = parseFloat(n1) * parseFloat(n2);
    } else if (op === "divide") {
      result = parseFloat(n1) / parseFloat(n2);
    }
  }
  if (floatCalculate) {
    result /= Math.pow(10, 10);
  }
  box.textContent = result;
  calculator.firstValue = result;
  calculator.secondValue = null;
  calculator.operator = null;
}

// 清除按鈕
function resetScreen() {
  box.textContent = 0;
  calculator.firstValue = null;
  calculator.secondValue = null;
  calculator.operator = null;
}

// 倒退數字
function backSpace() {
  // 刪除螢幕上最後一個字
  box.textContent = box.textContent.slice(0, -1);
  if (calculator.secondValue === null) {
    calculator.firstValue = +box.textContent;
  } else {
    calculator.secondValue = +box.textContent;
  }
  // 如果被刪光了螢幕數字會強制設為0
  if (box.textContent === "") {
    box.textContent = "0";
  }
}

// 加小數點
function addDot() {
  if (Number.isInteger(+box.textContent) === true) {
    box.textContent += ".";
  }
}
