export function filterByStatus(personagens, status) {
  return personagens.filter(
    (personagemAtual) => personagemAtual.status === status
  );
}

export function filterSpecies(personagens, especies) {
  return personagens.filter(
    (personagemAtual) => personagemAtual.species === especies
  );
}
export function filterGender(personagens, gender) {
  return personagens.filter(
    (personagemAtual) => personagemAtual.gender === gender
  );
}

/*export function filterByOrigin(origin) {
  const filteredOrigin = resultado.filter((resultado) => {
    return resultado.origin.name === origin;
  });
  return filteredOrigin;
}

export function filterByLocation(location) {
  const filteredOrlocation = resultado.filter((resultado) => {
    return resultado.location.name === location;
  });
  return filteredOrlocation;
}*/

export function porcentagem(data) {
  const porcento = (data * 100) / 31;
  const porcentoArredondado = Math.round(porcento);
  return porcentoArredondado;
}

export function ordenar(dadosFiltrados, tipoOrdenacao) {
  const novaArray = [...dadosFiltrados];

  if (tipoOrdenacao === "az") {
    novaArray.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      } else {
        return +1;
      }
    });
  } else if (tipoOrdenacao === "za") {
    //exbibe na ordem inversa
    novaArray.sort(function (a, b) {
      if (a.name > b.name) {
        return -1;
      } else {
        return +1;
      }
    });
  }
  return novaArray;
}
