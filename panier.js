// // faire un panier avec les pokemons choisis avec le bouton ajouter au panier

// // afficher le panier sur la page panier.html

// document.addEventListener("DOMContentLoaded", () => {
//   const cartContainer = document.getElementById("cart-container");

//   // Récupérer le panier depuis le stockage local
//   const cartItems = localStorage.getItem("cart");

//   if (cartItems) {
//     const parsedCart = JSON.parse(cartItems);

//     // Afficher chaque élément du panier dans votre interface utilisateur
//     parsedCart.forEach((pokemonName) => {
//       const cartItem = document.createElement("div");
//       cartItem.textContent = `Pokémon : ${pokemonName}`;
//       cartContainer.appendChild(cartItem);
//     });
//   } else {
//     // Afficher un message indiquant que le panier est vide
//     const emptyCartMessage = document.createElement("p");
//     emptyCartMessage.textContent = "Le panier est vide.";
//     cartContainer.appendChild(emptyCartMessage);
//   }
// });


document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cart-container");
  const cartItems = localStorage.getItem("cart");

  if (cartItems) {
    const parsedCart = JSON.parse(cartItems);

    parsedCart.forEach((pokemonDetails) => {
      const cartItem = document.createElement("div");
      cartItem.innerHTML = `
        <h2 class="pokemonDetails-name">${pokemonDetails.name}</h2>
      `;
      cartContainer.appendChild(cartItem);
    });
  } else {
    const emptyCartMessage = document.createElement("p");
    emptyCartMessage.textContent = "Le panier est vide.";
    cartContainer.appendChild(emptyCartMessage);
  }
});