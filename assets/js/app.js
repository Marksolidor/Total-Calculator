function myFunction() {
    let nmr = document.querySelector("#input-1").value;
    let cantidadSpan = document.querySelector("#quantity");
    cantidadSpan.innerHTML = nmr;
    let nmr2 = document.querySelector("#price");
    let value=nmr2.options[nmr2.selectedIndex].value;
    document.querySelector("#sum").innerHTML = Number(value) * Number(nmr);
    //let sum = Number(nmr) * Number(nmr2);
   // let totalSpan = document.querySelector("#sum");
    //totalSpan.innerHTML = sum;
    console.log(nmr2);
    console.log(nmr);
    console.log(value)
}