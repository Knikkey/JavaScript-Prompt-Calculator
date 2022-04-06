let welcome = confirm(
  "Hello! Welcome to my simple JavaScript prompt based calculator. If you would like to do a calculation, please press OK. Otherwise, press Cancel."
);

if (welcome === false) {
  alert("Thanks for stopping by! Have a great day! :)");
}

if (welcome === true) {
  const calculation = function (firstNumber, operation, secondNumber) {
    let answer = "";
    if (operation === "+") {
      answer = Number(firstNumber + secondNumber);
    } else if (operation === "-") {
      answer = Number(firstNumber - secondNumber);
    } else if (operation === "/") {
      answer = Number(firstNumber / secondNumber);
    } else if (operation === "*") {
      answer = Number(firstNumber * secondNumber);
    } else {
      answer = undefined;
    }
    return answer;
  };

  const firstNumber = prompt("Please enter the first number.");
  const operation = prompt(
    "Please enter the operation required.\nYou may choose from the following symbols:\n+,-,*,/"
  );
  const secondNumber = prompt("Please choose the second number.");
  alert(
    `The answer is:\n${calculation(
      Number(firstNumber),
      operation,
      Number(secondNumber)
    )}`
  );
  const bye = alert(
    "Thank you for using my calculator! If you would like to make another computation, you may refresh the page now."
  );
}
