// afficher le pokemon cliqué sur la page pokemon.html

function getPokemonDetailsFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get("name");
  return name;
}

function displayPokemonDetails() {
  const namepokemon = getPokemonDetailsFromUrl();
  const pokemonDetailsContainer = document.getElementById(
    "pokemon-details-container"
  );

  if (pokemonDetailsContainer && namepokemon) {
    getPokemonDetailsByName(namepokemon)
      .then((pokemonDetails) => {
        const price = Math.floor(Math.random() * 1000);
        const detailsContainer = document.createElement("div");
        detailsContainer.innerHTML = `
                    <h2 class="pokemonDetails-name">${
                      pokemonDetails.name
                    }</h2>
                    <img class="pokemonDetails-image" src="${
                      pokemonDetails.sprites.front_default
                    }" alt="${pokemonDetails.name}">
                    <p class="pokemonDetails-type">Type: ${pokemonDetails.types
                      .map((type) => type.type.name)
                      .join(", ")}</p>
                    <p class="pokemonDetails-stats">Stats: ${pokemonDetails.stats
                      .map((stat) => `${stat.stat.name}: ${stat.base_stat}`)
                      .join(", ")}</p>
                    <p class="pokemonDetails-nature">Nature: ${pokemonDetails.abilities
                      .map((ability) => ability.ability.name)
                      .join(", ")}</p>
                    <p class="pokemonDetails-prix">Prix: ${price} €</p>
                    <!-- Ajoutez d'autres détails du Pokémon ici selon vos besoins -->
                `;
        pokemonDetailsContainer.appendChild(detailsContainer);
      })
      .catch((error) =>
        console.error("Error fetching Pokémon details:", error)
      );
  } else {
    console.error(
      "No Pokémon name found in the URL parameters or container not found."
    );
  }

  function getPokemonDetailsByName(name) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
    return fetch(apiUrl).then((response) => response.json());
  }
}

displayPokemonDetails();



const addToCartButton = document.getElementById("addToCartButton");

addToCartButton.addEventListener("click", () => {
  alert(`Le Pokémon a été ajouté au panier !`);
});



