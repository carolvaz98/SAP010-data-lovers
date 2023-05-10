import data from "./data/rickandmorty/rickandmorty.js";
import { filterByStatus, filterSpecies, filterGender, sortAll } from "./data.js";


/*Essa função cria uma div com a classe "caracter" e quatro elementos filhos: 
uma imagem, um h2 com o nome do personagem, um parágrafo com o status e outro com a espécie. */
const criarcardcaracter = (caracter) => {
  const div = document.createElement("div");
  div.classList.add("caracter");

  const imagem = document.createElement("img");
  imagem.src = caracter.image;
  imagem.alt = `${caracter.name} thumbnail`;

  const nome = document.createElement("h2");
  nome.textContent = caracter.name;

  const status = document.createElement("p");
  status.textContent = `Status: ${caracter.status}`;

  const especie = document.createElement("p");
  especie.textContent = `Espécie: ${caracter.species}`;

  div.appendChild(imagem);
  div.appendChild(nome);
  div.appendChild(status);
  div.appendChild(especie);

  return div;

}

const todosCaracteres = data.results.map((caracter) => criarcardcaracter(caracter));



const estadoVida = document.getElementById("status");
estadoVida.addEventListener("change", () => {

  const card = document.querySelector("#root");

  card.innerHTML = "";

  const personStatus = filterByStatus(estadoVida.value);

  const filtroStatus = personStatus.map((caracter) => criarcardcaracter(caracter));

  filtroStatus.forEach((divCaracter) => {
    card.appendChild(divCaracter);
  });

  if (estadoVida.value === "Status") {
    todosCaracteres.forEach((divCaracter) => {
      card.appendChild(divCaracter);
    });
  }
});

const especie = document.getElementById("species");
especie.addEventListener("change", () => {
  const card = document.querySelector("#root");
  card.innerHTML = "";
  const personEspecie = filterSpecies(especie.value);

  const filtroEspecie = personEspecie.map((caracter) => criarcardcaracter(caracter));

  filtroEspecie.forEach((divCaracter) => {
    card.appendChild(divCaracter);
  });

  if (especie.value === "Specie") {
    todosCaracteres.forEach((divCaracter) => {
      card.appendChild(divCaracter);
    });
  }
});



const genero = document.getElementById("gender");
genero.addEventListener("change", () => {
  const card = document.querySelector("#root");
  card.innerHTML = "";
  const personGenero = filterGender(genero.value);

  const filtroGenero = personGenero.map((caracter) => criarcardcaracter(caracter));

  filtroGenero.forEach((divCaracter) => {
    card.appendChild(divCaracter)
  });

  if (genero.value === "All") {
    todosCaracteres.forEach((divCaracter) => {
      card.appendChild(divCaracter);
    });
  }
});

const ordenar = document.getElementById("ordenar");
ordenar.addEventListener("change", () => {
  const card = document.querySelector("#root");
  card.innerHTML = "";

  let ordem = "";

  if (ordenar.value === "A-Z") {
    ordem = true;
  } else {
    ordem = false;
  }
  const resultado = data.results;
  const resultadoOrdenado = sortAll(ordem, resultado);
  const resultadoPerso = criarcardcaracter(resultadoOrdenado);
  resultadoPerso.forEach((divCaracter) => {
    card.appendChild(divCaracter);
  });
});
