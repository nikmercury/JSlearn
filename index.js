let TL = document.getElementById("TRY");
let USD = document.getElementById("USD");
let RUB = document.getElementById("RUB");
let GEL = document.getElementById("GEL");

TL.oninput = function () {
  USD.value = (TL.value / 18.5).toFixed(1);
  RUB.value = (USD.value * 73).toFixed(0);
  GEL.value = (USD.value * 3).toFixed(1);
};

USD.oninput = function () {
  TL.value = (USD.value * 18.5).toFixed(1);
  RUB.value = (USD.value * 73).toFixed(0);
  GEL.value = (USD.value * 3).toFixed(0);
};

RUB.oninput = function () {
  USD.value = (RUB.value / 73).toFixed(2);
  TL.value = (USD.value * 18.5).toFixed(2);
  GEL.value = (USD.value * 3).toFixed(2);
};

GEL.oninput = function () {
  USD.value = (GEL.value / 3).toFixed(2);
  TL.value = (USD.value * 18.5).toFixed(2);
  RUB.value = (USD.value * 73).toFixed(2);
};
