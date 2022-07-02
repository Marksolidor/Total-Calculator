function myFunction() {
  let nmr = document.querySelector("#input-1").value;
  document.querySelector("#quantity").innerHTML = nmr;
  let nmr2 = document.querySelector("#price");
  let value = nmr2.options[nmr2.selectedIndex].value;
  document.querySelector("#sum").innerHTML = Number(value) * Number(nmr);
  let color = document.querySelector("#color");
  document.querySelector(".circle").style.backgroundColor = color.value;
}
