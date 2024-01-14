// Description: Script JS pour la page pokemon.html

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


// quand on clique sur le bouton ajouter au panier, le pokemon est ajouté au panier
// et le panier est affiché sur la page panier.html

function addToCart(pokemonName) {
  const existingCart = localStorage.getItem("cart");

  if (!existingCart) {
    // Si le panier n'existe pas encore dans le localStorage
    const newCart = [];
    newCart.push(pokemonName);
    localStorage.setItem("cart", JSON.stringify(newCart));
  } else {
    // Ajouter le Pokémon au panier existant
    const parsedCart = JSON.parse(existingCart);
    parsedCart.push(pokemonName);
    localStorage.setItem("cart", JSON.stringify(parsedCart));
  }

  // Vous pouvez également afficher un message de confirmation ici
  alert(`Le Pokémon ${pokemonName} a été ajouté au panier !`);
}



