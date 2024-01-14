// afficher les pokemons dans des cartes avec fetch pokeapi

function displayPokemon(pokemon) {
  const div = document.querySelector("#pokemonplace");
  const card = document.createElement("div");
  const img = document.createElement("img");
  const name = document.createElement("h2");
  const type = document.createElement("p");
  card.classList.add("card");
  img.src = pokemon.sprites.front_default;
  name.textContent = pokemon.name;
  type.textContent = pokemon.types.map((type) => type.type.name);
  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(type);
  div.appendChild(card);

  if (pokemon.types[0].type.name === "grass") {
    card.style.backgroundColor = "#78C850";
  } else if (pokemon.types[0].type.name === "fire") {
    card.style.backgroundColor = "#F08030";
  } else if (pokemon.types[0].type.name === "water") {
    card.style.backgroundColor = "#6890F0";
  } else if (pokemon.types[0].type.name === "bug") {
    card.style.backgroundColor = "#A8B820";
  } else if (pokemon.types[0].type.name === "normal") {
    card.style.backgroundColor = "#A8A878";
  } else if (pokemon.types[0].type.name === "poison") {
    card.style.backgroundColor = "#A040A0";
  } else if (pokemon.types[0].type.name === "electric") {
    card.style.backgroundColor = "#F8D030";
  } else if (pokemon.types[0].type.name === "ground") {
    card.style.backgroundColor = "#E0C068";
  } else if (pokemon.types[0].type.name === "fairy") {
    card.style.backgroundColor = "#EE99AC";
  }

  card.addEventListener("click", function () {
    window.location.href = "pokemon.html?name=" + pokemon.name;
  });
}

function fetchPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=24")
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((pokemon) => {
        fetch(pokemon.url)
          .then((response) => response.json())
          .then((data) => displayPokemon(data));
      });
    });
}

fetchPokemon();
