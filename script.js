const button = document.querySelector('[data-js="button"]');
const datum = document.querySelector('[data-js="datum"]');
const rahmen = document.querySelector('[data-js="rahmen_liste"]');
const input = document.querySelector("#enter");

const ol = document.createElement("ol");
rahmen.appendChild(ol);

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = `${input.value},${datum.value},`;
  ol.appendChild(li);
});
