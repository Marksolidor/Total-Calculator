function myFunction() {
    let nmr = document.querySelector("#input-1").value;
    let cantidadSpan = document.querySelector("#quantity");
    cantidadSpan.innerHTML = nmr;
    let nmr2 = document.querySelector("#price");
    let value = nmr2.options[nmr2.selectedIndex].value;
    document.querySelector("#sum").innerHTML = Number(value) * Number(nmr);
    let color = document.querySelector("#color");
    let circle = color.options[color.selectedIndex].value;
   document.querySelector(".circle").style.backgroundColor = color.value; 
}