function addToCart() {
  // Récupérer les détails du Pokémon actuellement affichés
  const name = document.querySelector(".pokemonDetails-name").textContent;
  const imageUrl = document.querySelector(".pokemonDetails-image").src;

  // Récupérer le panier depuis le stockage local
  const cartItems = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  // Ajouter les détails du Pokémon au panier
  cartItems.push({ name, imageUrl });

  // Mettre à jour le panier dans le stockage local
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cart-container");

  // Récupérer le panier depuis le stockage local
  const cartItems = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  // Afficher chaque élément du panier dans l'interface utilisateur
  cartItems.forEach((pokemon) => {
    const cartItemContainer = document.createElement("div");
    const nameElement = document.createElement("p");
    const imageElement = document.createElement("img");

    nameElement.textContent = `Pokémon : ${pokemon.name}`;
    imageElement.src = pokemon.imageUrl;
    imageElement.alt = pokemon.name;

    cartItemContainer.appendChild(nameElement);
    cartItemContainer.appendChild(imageElement);
    cartContainer.appendChild(cartItemContainer);
  });

  const clearCartButton = document.getElementById("clear-cart-button");
  clearCartButton.addEventListener("click", () => {
    localStorage.removeItem("cart");
    cartContainer.innerHTML = "";
    const emptyCartMessage = document.createElement("p");
    emptyCartMessage.textContent = "Le panier est vide.";
    cartContainer.appendChild(emptyCartMessage);
  });
});
