const elements = [
  { codigo: 1, descripcion: "uno" },
  { codigo: 2, descripcion: "dos" },
  { codigo: 3, descripcion: "tres" },
  { codigo: 4, descripcion: "cuatro" },
  { codigo: 5, descripcion: "cinco" },
  { codigo: 6, descripcion: "seis" },
  { codigo: 7, descripcion: "siete" },
  { codigo: 8, descripcion: "ocho" },
]

const element = document.querySelector("#list-item")

element.innerHTML = elements.reduce((p, c) => `${p}<span class="item-list">${c.descripcion}</span>`, "")
