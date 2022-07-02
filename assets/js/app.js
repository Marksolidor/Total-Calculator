function myFunction() {
    let nmr = document.querySelector("#input-1").value;
    let cantidadSpan = document.querySelector("#quantity");
    cantidadSpan.innerHTML = nmr;
    console.log(nmr);
}