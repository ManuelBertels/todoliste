const listadd = () => {
  let eingabefeld = document.querySelector("#enter");

  let div_container = document.querySelector("#list");

  let datum_eingabe = document.querySelector("#datum");

  div_container.innerHTML +=
    '<li><input type="checkbox">' +
    datum_eingabe.value +
    " " +
    eingabefeld.value +
    "</input></li>";

  eingabefeld.value = " ";
};
