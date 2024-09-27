let genratedJSON = "";
const burgerNames = [
  "Classic Burger",
  "Cheese Burger",
  "Bacon Burger",
  "Veggie BUrger",
  "Chicken Burger",
];
const ingredient = [
  "Lettuce",
  "Tomato",
  "Onion",
  "Pickles",
  "Bacon",
  "Cheese",
  "Chicken",
  "Beef",
  "Mushrooms",
];
const sizes = ["small", "Medium", "Large"];
const sauces = ["Ketchup", "Mustard", "Mayo", "BBQ", "Spicy Sauce"];
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function generateFakeAPI() {
  let fakeBurgers = [];
  for (let i = 0; i < 100; i++) {
    let burger = {
      id: i,
      name: getRandomElement(burgerNames),
      sizes: getRandomElement(sizes),
      price: (Math.random() * 10 + 5).toFixed(2),
      ingredient: Array.from({ length: 3 }, () => getRandomElement(ingredient)),
      sauce: getRandomElement(sauces),
      available: Math.random() > 0.5,
    };
    fakeBurgers.push(burger);
  }
  generatedJSON = JSON.stringify(fakeBurgers, null, 2);
  const jsonDisplay = document.getElementById("jsonDisplay");
  jsonDisplay.style.display = "block";
  jsonDisplay.textContent = generatedJSON;
  const downloadBtnburger = document.getElementById("downloadBtnburger");
  downloadBtn.style.display = "inline-block";
  const downloadBtndress = document.getElementById("downloadBtndress");
  downloadBtn.style.display = "inline-block";
}
function downloadFakeAPI() {
  const blob = new Blob([generatedJSON], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  // Create a temporary download link and trigger a click
  const a = document.createElement("a");
  a.href = url;
  a.download = "fake-api.json";
  a.click();

  // Revoke the object URL after the download
  URL.revokeObjectURL(url);
}
var typed = new Typed("#element", {
  strings: ["Food Api", "Dress Api", "Bagpack Api", "Burger Api", "Pizza Api"],
  typeSpeed: 50,
  loop: true,
});
var typed = new Typed("#element2", {
  strings: [
    "All Background genrator",
    "API GENRATOR",
    "EXAMPLE",
    "LIVE PREVIEW",
    "PROJECTS",
  ],
  typeSpeed: 50,
  loop: true,
});
