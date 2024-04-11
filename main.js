// завдання 1
function Fields() {
  let field1 = document.getElementById("field1").value.trim();
  let field2 = document.getElementById("field2").value.trim();
  let massage = document.getElementById("message-field");

  if (field1 && field2) {
    massage.textContent = "Обидва поля заповнені";
    massage.style.color = "green";
  } else {
    massage.textContent = "Не всі поля заповнені";
    massage.style.color = "red";
  }
}

// завдання 2
function Sum() {
  const number1 = parseFloat(document.getElementById("number1").value);
  const number2 = parseFloat(document.getElementById("number2").value);
  const suma = number1 + number2;
  const messageSum = document.getElementById("messageSum");

  if (suma > 10) {
    messageSum.textContent = "Сума більша за 10";
    messageSum.style.color = "green";
  } else {
    messageSum.textContent = "Сума менша або дорівнює 10";
    messageSum.style.color = "red";
  }
}

// завдання 3

function Text() {
  const textInput = document.getElementById("textInput").value;
  const messageText = document.getElementById("messageText");

  if (textInput.includes("JavaScript")) {
    messageText.textContent = "Текст містить слово JavaScript";
    messageText.style.color = "green";
  } else {
    messageText.textContent = "Текст не містить слово JavaScript";
    messageText.style.color = "red";
  }
}

// завдання 4
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const numberInput = parseFloat(document.getElementById("numberInput").value);
  const numberMessage = document.getElementById("numberMessage");

  if (numberInput > 10 && numberInput < 20) {
    numberMessage.textContent = "Число входить в діапазон від 10 до 20";
    numberMessage.style.color = "green";
  } else {
    numberMessage.textContent = "Число не входить в діапазон від 10 до 20";
    numberMessage.style.color = "red";
  }
});

// завдання 5
function Form() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (name.length < 3) {
    alert("Ім'я повинно містити не менше 3 символів");
    return false;
  }
  if (!email.includes("@") || !email.includes(".")) {
    alert("Будь ласка, введіть правильну адресу електронної пошти");
    return false;
  }
  if (password.length < 6) {
    alert("Пароль повинен містити не менше 6 символів");
    return false;
  }

  window.location.href = 'https://google.com'
}
