const cards = document.getElementById("myCards");
//Ver carrito
const cartIcon = document.getElementById("cartIcon");
const modalContainer = document.getElementById("modal-container");
const quantityCart = document.getElementById("quantityCart");


// Variables para el carrito y el total
let cart = JSON.parse(localStorage.getItem("carrito")) || []; //Mi carrito se inicializa segun lo que esté guardado en LS

// Cards de productos
products.forEach((product) => {
  let card = document.createElement("div");
  card.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src=${product.image} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="cardTitleFont">${product.name}</h5>
      <p class="cardFont">Size: ${product.size}</p>
      <p class="cardFont">$${product.price}</p>
      <button id='btn${product.id}' class='btn btn-edit'>Add to bag</button>
    </div>
  </div>
  `;
  cards.append(card);
});

//evento botón comprar y agregar producto al carrito
products.forEach((product) => {
  document.getElementById(`btn${product.id}`).addEventListener("click", () => {
    const repeat = cart.some(
      (repeatProduct) => repeatProduct.id === product.id
    );

    if (repeat) {
      cart.map((prod) => {
        if (prod.id === product.id) {
          prod.quantity++;
        }
      });
    } else {
      cart.push({
        id: product.id,
        image: product.image,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
      });
    }
    Swal.fire(product.name, "Added to your cart :)", "success");
    cartCounter();
    saveLocal();
  });
});

//guardo productos del carrito en el LS
const saveLocal = () => {
  localStorage.setItem("carrito", JSON.stringify(cart));
};






// placeOrderBtn.addEventListener("click", cartEmpty);
// function cartEmpty(){
//   localStorage.removeItem("carrito");
//   cart = [];
//   cartCounter();
//   window.location.href = 'index.html';
// };
