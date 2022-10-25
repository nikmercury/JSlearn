function buttonClick() {
  let lira = document.getElementById("TRY");
  let dolar = document.getElementById("USD");
  let ruble = document.getElementById("RUB");
  let lari = document.getElementById("GEL");

  dolar.value = (Number(lira.value) / 18.5).toFixed(1);
  ruble.value = (dolar.value * 73).toFixed(0);
  lari.value = (dolar.value * 3).toFixed(1);
}
