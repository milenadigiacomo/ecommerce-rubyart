//Carrito

const drawCart = () => {
  
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";

  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header"
  modalHeader.innerHTML = `
  <h1 class="modal-header-title">CART</h1>
  `;
  modalContainer.append(modalHeader);

  const modalButton = document.createElement("h1");
  modalButton.innerText ="X";
  modalButton.className ="modal-header-button";

  modalButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  }); 

  modalHeader.append(modalButton);

  //carrito vacío
  if (cart.length > 0){

  cart.forEach((product) => {
  let cartContent = document.createElement("div");
  cartContent.className = "modal-content";
  cartContent.innerHTML = `
  <img src="${product.image}">
  <h3 class="cardTitleFont">${product.name}</h3>
  <span class="subtract pointer"> <i class="fa-solid fa-minus"></i></span>
  <p class="cardTitleFont">${product.quantity}</p>
  <span class="add pointer"> <i class="fa-solid fa-plus"></i> </span>
  <p class="cardTitleFont">${product.quantity * product.price} $</p>
  `;

  modalContainer.append(cartContent);

  let subtract =cartContent.querySelector(".subtract");
  subtract.addEventListener("click", () => {
    if (product.quantity !== 1) {
      product.quantity--;
    }
    saveLocal();
    drawCart();
  });

  let add = cartContent.querySelector(".add");
  add.addEventListener("click", () => {
    product.quantity++;
    saveLocal();
    drawCart();
  })



  let deleteProduct = document.createElement("span");
  

  deleteProduct.innerHTML = `
  <span class="subtract"> <i class="fa-solid fa-trash-can"></i></span>
  `;
  deleteProduct.className = "pointer";
  cartContent.append(deleteProduct);

  deleteProduct.addEventListener("click", removeFromCart);
});


const total = cart.reduce((acc, element) => acc + element.price * element.quantity, 0);

const totalBuying =document.createElement("div");
totalBuying.className="total-content cardTitleFont";
totalBuying.innerHTML = `total: ${total} $ `;
modalContainer.append(totalBuying);

const goPaying =document.createElement("div");
goPaying.className="btn-blue cardTitleFont";
goPaying.innerHTML = `<a href="../checkout.html"class='btn btn-edit'>PROCEED TO CHECKOUT</a> `;
modalContainer.append(goPaying);

}else{
  const modalText = document.createElement("h2");
  modalText.className = "modal-text cardTitleFont";
  modalText.innerText = "Your cart is empty :(";
  modalContainer.append(modalText);

  const shopNow =document.createElement("div");
shopNow.className="btn-blue cardTitleFont";
shopNow.innerHTML = `<a href="#products" class='btn btn-edit'>SHOP NOW</a> `;
modalContainer.append(shopNow);

shopNow.addEventListener("click", () => {
  modalContainer.style.display = "none";
});
};

};



cartIcon.addEventListener("click", function(){
  
  drawCart();

  modalContainer.classList.toggle("active");
});



//eliminar un producto del carrito
let removeFromCart = () => {
  const findId = cart.find((element) => element.id);

  cart = cart.filter((cartId) => {
    return cartId !==findId;
  });
  cartCounter();
  saveLocal();
  drawCart();
};


//Contador carrito
const cartCounter = () => {
  quantityCart.style.display = "block";

  const cartLength = cart.length;

  localStorage.setItem("cartLength", JSON.stringify(cartLength));

  quantityCart.innerText = JSON.parse(localStorage.getItem("cartLength"));
};

cartCounter();



//  removeFromCart = (productId) => {
//   // Encontrar el índice del producto en el carrito
//   const index = cart.findIndex((product) => product.id === productId);
//   if (index !== -1) {
//     // Eliminar el producto del carrito
//     cart.splice(index, 1);
//     // Actualizar el contador del carrito y guardar en localStorage
    
//     saveLocal();
//     // Volver a dibujar el carrito
//     drawCart();
//   }
// };


// Visibilidad
modalContainer.addEventListener("click", function () {
  if (this.window) {
    modalContainer.classList.toggle("active", this.window.onclick);
  }
});



