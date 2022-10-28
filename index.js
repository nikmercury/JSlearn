let TL = document.getElementById("TRY");
let USD = document.getElementById("USD");
let RUB = document.getElementById("RUB");
let GEL = document.getElementById("GEL");

let myHeaders = new Headers();
myHeaders.append("apikey", "3yyeJHHhd3zxhWYAI3rqfneLwJStrUlw");

let requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

fetch(
  "https://api.apilayer.com/fixer/latest?symbols=RUB%2CTRY%2CGEL&base=usd",
  requestOptions
)
  .then((response) => response.json())
  .then((answer) => {
    const result = answer.rates;
    TL.oninput = function () {
      USD.value = (TL.value / answer.rates["TRY"]).toFixed(4);
      RUB.value = (USD.value * answer.rates["RUB"]).toFixed(4);
      GEL.value = (USD.value * answer.rates["GEL"]).toFixed(4);
    };

    USD.oninput = function () {
      TL.value = (USD.value * answer.rates["TRY"]).toFixed(4);
      RUB.value = (USD.value * answer.rates["RUB"]).toFixed(4);
      GEL.value = (USD.value * answer.rates["GEL"]).toFixed(4);
    };

    RUB.oninput = function () {
      USD.value = (RUB.value / answer.rates["RUB"]).toFixed(4);
      TL.value = (USD.value * answer.rates["TRY"]).toFixed(4);
      GEL.value = (USD.value * answer.rates["GEL"]).toFixed(4);
    };

    GEL.oninput = function () {
      USD.value = (GEL.value / answer.rates["GEL"]).toFixed(4);
      TL.value = (USD.value * answer.rates["TRY"]).toFixed(4);
      RUB.value = (USD.value * answer.rates["RUB"]).toFixed(4);
    };
  })
  .catch((error) => {
    alert("Offline mode", error);
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
  });
