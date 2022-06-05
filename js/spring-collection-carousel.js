const button = document.querySelector('.quick-view');

const modal = document.querySelector('.modal-window-spring2020');
const span = document.querySelector('.close-modal-window-spring2020');

button.addEventListener('click', modalWindow);

function modalWindow(){
    modal.style.display = 'block';
}

span.addEventListener('click', closeModal);
function closeModal() {
    modal.style.display = 'none';
}

window.addEventListener('click', closeBtn);
function closeBtn (event) {
    if (event.target == modal){
        modal.style.display = 'none';
    }
}


(async function() {

function renderProducts(products) {
  const productsContainer = document.querySelector(".items-spring2020");
  for (const product of products) {
      productsContainer.innerHTML += `<article class="product-card">
      <img class="product-card__image"
        src="${product.imgUrl}"
        alt="${product.name}"
      />
      <h4 class="product-card__h4">${product.name}</h4>
      <p class="product-card__description">
        ${product.description}
      </p>
      <p class="product-card__price">${product.price}</p>
      <div class="product-card__buttons">
        <button class="product-card__buttons-order button button-card">
          order now
        </button>
      </div>
    </article>
    `; }
  }

const response = await fetch('products.json');
const products = await response.json();

renderProducts(products);

})();
