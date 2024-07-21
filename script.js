function changeLogo() {
  // header logo
  let logoImg = document.getElementById("HA");
  if (logoImg.src.match("logo-darkHA.png")) {
    logoImg.src = "images/logo-whiteHA.png";
  } else
    logoImg.src = "images/logo-darkHA.png";
  //footer logo 
  let logoImg2 = document.getElementById("HA2");
  if (logoImg2.src.match("logo-darkHA.png")) {
    logoImg2.src = "images/logo-whiteHA.png";
  } else
    logoImg2.src = "images/logo-darkHA.png";
}

function signinOrLogin() {
  let resultElement = document.getElementById("result");
  let signInRadio = document.querySelector('input[name="acc"][value="Sign in"]');
  let logInRadio = document.querySelector('input[name="acc"][value="Log in"]');
  let submit = document.getElementById("subtn");

  if (signInRadio.checked) {
    resultElement.textContent = "Sign in";
    submit.textContent = "Sign in";
  } else if (logInRadio.checked) {
    resultElement.textContent = "Login";
    submit.textContent = "Login";
  }
}

function changeToSignin() {
  let signInRadio = document.querySelector('input[name="acc"][value="Sign in"]');
  let resultElement = document.getElementById("result");
  let submit = document.getElementById("subtn");
  resultElement.textContent = "Sign in";
  submit.textContent = "Sign in";
  signInRadio.checked = true;
}

//Update products information based on the selected category
function updateProductInformation(category) {
  let imageUrls = {
    games: [
      'images/game1.jpg',
      'images/game2.jpg',
      'images/game3.jpg',
      'images/game4.jpg',
      'images/game5.jpg',
      'images/game6.jpg',
      'images/game7.jpg',
      'images/game8.jpg',
      'images/game9.jpg',
      'images/game10.jpg',
      'images/game11.jpg',
      'images/game12.jpg'
    ],
    laptops: [
      'images/laptop1.jpg',
      'images/laptop2.jpg',
      'images/laptop3.jpg',
      'images/laptop4.jpg',
      'images/laptop5.jpg',
      'images/laptop6.jpg',
      'images/laptop7.jpg',
      'images/laptop8.jpg',
      'images/laptop9.jpg',
      'images/laptop10.jpg',
      'images/laptop11.jpg',
      'images/laptop12.jpg'
    ],
    keyboards: [
      'images/keyboard1.jpg',
      'images/keyboard2.jpg',
      'images/keyboard3.jpg',
      'images/keyboard4.jpg',
      'images/keyboard5.jpg',
      'images/keyboard6.jpg',
      'images/keyboard7.jpg',
      'images/keyboard8.jpg',
      'images/keyboard9.jpg',
      'images/keyboard10.jpg',
      'images/keyboard11.jpg',
      'images/keyboard12.jpg'
    ],
    gamingMice: [
      'images/mouse1.jpg',
      'images/mouse2.jpg',
      'images/mouse3.jpg',
      'images/mouse4.jpg',
      'images/mouse5.jpg',
      'images/mouse6.jpg',
      'images/mouse7.jpg',
      'images/mouse8.jpg',
      'images/mouse9.jpg',
      'images/mouse10.jpg',
      'images/mouse11.jpg',
      'images/mouse12.jpg'
    ],
    controllers: [
      'images/controller1.jpg',
      'images/controller2.jpg',
      'images/controller3.jpg',
      'images/controller4.jpg',
      'images/controller5.jpg',
      'images/controller6.jpg',
      'images/controller7.jpg',
      'images/controller8.jpg',
      'images/controller9.jpg',
      'images/controller10.jpg',
      'images/controller11.jpg',
      'images/controller12.jpg'
    ]
  }
  let productContainer = document.getElementById('productContainer');
  let productImages = productContainer.querySelectorAll('img');
  let productName = productContainer.querySelectorAll('.name');
  let productPrice = productContainer.querySelectorAll('.price');
  let productCategory = productContainer.querySelectorAll('.category');

  let images = imageUrls[category];
  let nameValue = " ";
  let priceValue = 0;

  checkName();
  for (let i = 0; i < productImages.length; i++) {
    productImages[i].src = images[i];
    productName[i].textContent = nameValue + " " + (i + 1);
    productPrice[i].textContent = "$" + priceValue;
    productCategory[i].textContent = category;
  }

  function checkName() {
    if (category == "games") {
      nameValue = "Game";
      priceValue = 65.0;
    }
    else if (category == "laptops") {
      nameValue = "Laptop";
      priceValue = 600.0;
    }
    else if (category == "keyboards") {
      nameValue = "Keyboard";
      priceValue = 50.0;
    }
    else if (category == "gamingMice") {
      nameValue = "Gaming mice";
      priceValue = 20.0;
    }
    else if (category == "controllers") {
      nameValue = "Controller";
      priceValue = 30.0;
    }
  }
}

var imgSlider = new Array(5);
imgSlider[0] = "images/game1.jpg";
imgSlider[1] = "images/laptop4.jpg";
imgSlider[2] = "images/keyboard1.jpg";
imgSlider[3] = "images/mouse7.jpg";
imgSlider[4] = "images/controller1.jpg";

var index = 0;

function cycle() {
  document.getElementById("cycle").src = imgSlider[index];
  index++;
  if (index == imgSlider.length) {
    index = 0;
  }
  setTimeout("cycle()", 2000);
}

function addGame(item) {
  let games = [
    'images/game1.jpg',
    'images/game2.jpg',
    'images/game3.jpg',
    'images/game4.jpg',
    'images/game5.jpg',
    'images/game6.jpg',
    'images/game7.jpg',
    'images/game8.jpg',
    'images/game9.jpg',
    'images/game10.jpg',
    'images/game11.jpg',
    'images/game12.jpg'
  ];
  var html = "<tr><td><div class=\"cart-info\">";
  for (let i = 0; i < games.length; i++) {
    if (item.src == games[i].src) {
      html += "<img src=" + games[i] + "></img>";
      html += "<div><p>Game " + i + "</p>";
      html += "<br>";
      html += "<a href=\"\">Remove</a> </div>";
    }
    html += "</div> </td>";
    html += "<td><input type=\"number\" value=\"1\"></td>";
    html += "<td>$50.00</td>";
    html += "</tr>";
  }
  /*</div>
        </td>
        <td><input type="number" value="1"></td>
        <td>$50.00</td>
      </tr>
  */
}

function updateSubtotal(input) {
  const priceElement = input.parentElement.previousElementSibling.querySelector("small");
  const price = parseFloat(priceElement.textContent.replace("Price: $", ""));
  const quantity = parseInt(input.value);
  const subtotal = price * quantity;

  const subtotalElement = input.parentElement.nextElementSibling;
  subtotalElement.textContent = `$${subtotal.toFixed(2)}`;

  updateTotal();
}

function updateTotal() {
  const subtotalElements = document.querySelectorAll("[id^='subtotal']");
  let total = 0;

  subtotalElements.forEach((element) => {
    const subtotal = parseFloat(element.textContent.replace("$", ""));
    total += subtotal;
  });

  const totalElement = document.getElementById("total");
  const subtotalElement = document.getElementById("subtotal");

  totalElement.textContent = `$${total.toFixed(2)}`;
}

function getGame(game) {
  let x;
  switch (game) {
    case "game1":
      x = 'images/game1.jpg';
      break;
    case "game2":
      x = 'images/game2.jpg';
      break;
    case "game3":
      x = 'images/game3.jpg';
      break;
    case "game4":
      x = 'images/game4.jpg';
      break;
    case "game5":
      x = 'images/game5.jpg';
      break;
    case "game6":
      x = 'images/game6.jpg';
      break;
    case "game7":
      x = 'images/game7.jpg';
      break;
    case "game8":
      x = 'images/game8.jpg';
      break;
    case "game9":
      x = 'images/game9.jpg';
      break;
    case "game10":
      x = 'images/game10.jpg';
      break;
  }
  document.getElementById("imgG").src = x;
}

function getLaptop(laptop) {
  let x;
  switch (laptop) {
    case "laptop1":
      x = 'images/laptop1.jpg';
      break;
    case "laptop2":
      x = 'images/laptop2.jpg';
      break;
    case "laptop3":
      x = 'images/laptop3.jpg';
      break;
    case "laptop4":
      x = 'images/laptop4.jpg';
      break;
    case "laptop5":
      x = 'images/laptop5.jpg';
      break;
    case "laptop6":
      x = 'images/laptop6.jpg';
      break;
    case "laptop7":
      x = 'images/laptop7.jpg';
      break;
    case "laptop8":
      x = 'images/laptop8.jpg';
      break;
    case "laptop9":
      x = 'images/laptop9.jpg';
      break;
    case "laptop10":
      x = 'images/laptop10.jpg';
      break;
  }
  document.getElementById("imgL").src = x;
}

function getKeyboard(keyboard) {
  let x;
  switch (keyboard) {
    case "keyboard1":
      x = 'images/keyboard1.jpg';
      break;
    case "keyboard2":
      x = 'images/keyboard2.jpg';
      break;
    case "keyboard3":
      x = 'images/keyboard3.jpg';
      break;
    case "keyboard4":
      x = 'images/keyboard4.jpg';
      break;
    case "keyboard5":
      x = 'images/keyboard5.jpg';
      break;
    case "keyboard6":
      x = 'images/keyboard6.jpg';
      break;
    case "keyboard7":
      x = 'images/keyboard7.jpg';
      break;
    case "keyboard8":
      x = 'images/keyboard8.jpg';
      break;
    case "keyboard9":
      x = 'images/keyboard9.jpg';
      break;
    case "keyboard10":
      x = 'images/keyboard10.jpg';
      break;
  }
  document.getElementById("imgK").src = x;
}

function getMouse(mouse) {
  let x;
  switch (mouse) {
    case "mouse1":
      x = 'images/mouse1.jpg';
      break;
    case "mouse2":
      x = 'images/mouse2.jpg';
      break;
    case "mouse3":
      x = 'images/mouse3.jpg';
      break;
    case "mouse4":
      x = 'images/mouse4.jpg';
      break;
    case "mouse5":
      x = 'images/mouse5.jpg';
      break;
    case "mouse6":
      x = 'images/mouse6.jpg';
      break;
    case "mouse7":
      x = 'images/mouse7.jpg';
      break;
    case "mouse8":
      x = 'images/mouse8.jpg';
      break;
    case "mouse9":
      x = 'images/mouse9.jpg';
      break;
    case "mouse10":
      x = 'images/mouse10.jpg';
      break;
  }
  document.getElementById("imgM").src = x;
}

function getController(controller) {
  let x;
  switch (controller) {
    case "controller1":
      x = 'images/controller1.jpg';
      break;
    case "controller2":
      x = 'images/controller2.jpg';
      break;
    case "controller3":
      x = 'images/controller3.jpg';
      break;
    case "controller4":
      x = 'images/controller4.jpg';
      break;
    case "controller5":
      x = 'images/controller5.jpg';
      break;
    case "controller6":
      x = 'images/controller6.jpg';
      break;
    case "controller7":
      x = 'images/controller7.jpg';
      break;
    case "controller8":
      x = 'images/controller8.jpg';
      break;
    case "controller9":
      x = 'images/controller9.jpg';
      break;
    case "controller10":
      x = 'images/controller10.jpg';
      break;
  }
  document.getElementById("imgC").src = x;
}