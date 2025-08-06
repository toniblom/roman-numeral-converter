
const ninput = document.getElementById("number");
const noutput = document.getElementById("output");
const button = document.getElementById("convert-btn");

// Convert number to roman numeral
const convert = () => {
  var result = "";
  var num = Number(ninput.value);
  
  const m = Math.floor(num/1000);
  num -= m * 1000;

  const cm = Math.floor(num/900); 
  num -= cm * 900;
  
  const d = Math.floor(num/500);
  num -= d * 500;

  const cd = Math.floor(num/400);
  num -= cd * 400;
  
  const c = Math.floor(num/100);
  num -= c * 100;

  const xc = Math.floor(num/90);
  num -= xc * 90;
  
  const l = Math.floor(num/50);
  num -= l * 50;

  const xl = Math.floor(num/40);
  num -= xl * 40;
  
  const x = Math.floor(num/10);
  num -= x * 10;

  const ix = Math.floor(num/9);
  num -= ix * 9;
  
  const v = Math.floor(num/5);
  num -= v * 5;

  const iv = Math.floor(num/4);
  num -= iv * 4;
  
  const i = num;
  
  result = result 
    + "M".repeat(m)
    + "CM".repeat(cm)
    + "D".repeat(d)
    + "CD".repeat(cd)
    + "C".repeat(c)
    + "XC".repeat(xc)
    + "L".repeat(l)
    + "XL".repeat(xl)
    + "X".repeat(x)
    + "IX".repeat(ix)
    + "V".repeat(v)
    + "IV".repeat(iv)
    + "I".repeat(i)

  return result;
  
};

// When button pressed, display converted number
button.addEventListener("click", () => {
  if (ninput.value === "") {
    noutput.innerText = "Please enter a valid number";
  } else if (isNaN(ninput.value)) {
    noutput.innerText = "Please enter a valid number";
  } else if (Number(ninput.value) < 0) {
    noutput.innerText = "Please enter a number greater than or equal to 1";
  } else if (Number(ninput.value) >= 4000) {
    noutput.innerText = "Please enter a number less than or equal to 3999";
  } else {
    noutput.innerText = convert();
  }
});

