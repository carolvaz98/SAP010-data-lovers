import {
  filterByStatus,
  filterSpecies,
  filterGender,
  ordenar,
  porcentagem,
} from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

// Função para criar o card do personagemm
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

  const episodios = document.createElement("p");
  const porcentagemAparicoes = porcentagem(caracter.episode.length);
  episodios.textContent = `Aparições nos EP: ${porcentagemAparicoes}%`;

  div.appendChild(imagem);
  div.appendChild(nome);
  div.appendChild(status);
  div.appendChild(especie);
  div.appendChild(episodios);

  return div;
};

// Array com todos os personagens
const card = document.querySelector("#root");

data.results.forEach((caracter) => {
  const divPersonagem = criarcardcaracter(caracter);
  card.appendChild(divPersonagem);
});

// Função para atualizar a lista de personagens de acordo com os filtros selecionados
const atualizarListaPersonagens = () => {
  const filtroStatus = filterByStatus(data.results, estadoVida.value);
  const filtroEspecie = filterSpecies(data.results, especie.value);
  const filtroGenero = filterGender(data.results, genero.value);

  const personagensFiltrados = data.results.filter((personagem) => {
    const personagemStatus = personagem.status.toLowerCase();
    const personagemEspecie = personagem.species.toLowerCase();
    const personagemGenero = personagem.gender.toLowerCase();

    const filtroStatusValue = estadoVida.value.toLowerCase();
    const filtroEspecieValue = especie.value.toLowerCase();
    const filtroGeneroValue = genero.value.toLowerCase();

    if (
      (filtroStatusValue === "all" ||
        filtroStatus.includes(personagemStatus) ||
        personagemStatus === filtroStatusValue) &&
      (filtroEspecieValue === "all" ||
        filtroEspecie.includes(personagemEspecie) ||
        personagemEspecie === filtroEspecieValue) &&
      (filtroGeneroValue === "all" ||
        filtroGenero.includes(personagemGenero) ||
        personagemGenero === filtroGeneroValue)
    ) {
      return true;
    } else {
      return false;
    }
  });

  let listaOrdenada = [...personagensFiltrados];

  if (ordenacao.value !== "nenhum") {
    listaOrdenada = ordenar(personagensFiltrados, ordenacao.value);
  }

  const card = document.querySelector("#root");
  card.innerHTML = "";

  listaOrdenada.forEach((personagem) => {
    const divPersonagem = criarcardcaracter(personagem);
    card.appendChild(divPersonagem);
  });
};

// Restante do código (event listeners, etc.)

// Filtro de status
const estadoVida = document.getElementById("status");
estadoVida.addEventListener("change", () => {
  atualizarListaPersonagens();
});

// Filtro de espécie
const especie = document.getElementById("species");
especie.addEventListener("change", () => {
  atualizarListaPersonagens();
});

// Filtro de gênero
const genero = document.getElementById("gender");
genero.addEventListener("change", () => {
  atualizarListaPersonagens();
});

//Filtro de ordenação
const ordenacao = document.getElementById("ordenacao");
ordenacao.addEventListener("change", () => {
  atualizarListaPersonagens();
});
