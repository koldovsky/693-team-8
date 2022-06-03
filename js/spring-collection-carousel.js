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

(function() {
  const productsJson= `
  [
      {
      "id": "1",
      "name": "Fusion armchair, LEXX",
      "description": "It is an incredibly stylish armchair in a trendy mustard color. In it, you can recline comfortably and read a book or work on a laptop. Dimensions and materials: 25 x 32. Faux suede, steel",
      "price": 320,
      "imgUrl": "img/armchairs-lexx.png"
  },
  {
    "id": "2",
    "name": "Aurora armchair, MDS",
    "description": "This wide-backed trapezoidal chair will welcome you after or during your hard day and help you relax. It will fit into any interior and is very easy to clean. Dimensions and materials: 28 x 37. Faux suede, wood",
    "price": 210,
    "imgUrl": "img/armchairs-mds.png"
},
{
    "id": "3",
    "name": "Cloud armchair, DIX",
    "description": "Simple design and vibrant turquoise color are the hallmarks of this armchair. It is versatile: you can make this armchair a striking accent in your interior or create an island of tranquility in your office. Dimensions and materials: 28 x 35. Faux suede, wood",
    "price": 150,
    "imgUrl": "img/armchairs-dix.png"
},
{
    "id": "4",
    "name": "Jeanine armchair, KUKO",
    "description": "This is the very armchair in which you want to drown after a hard day. Wide handrails and padded back allow you to take any position in this armchair. Dimensions and materials: 28 x 35. Textile, wood",
    "price": 210,
    "imgUrl": "img/armchairs-kuko.png"
}
]
`;

function renderProducts(products) {
  const productsContainer = document.querySelector(".items-spring2020");
  for (const product of products) {
      productsContainer.innerHTML += `<article class="product-card">
      <img class="product-card__image"
        src="${product.imgUrl}"
        alt="${product.name}"
      />
      <h3 class="product-card__h3">${product.name}</h3>
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
    `;
  }
}

const products = JSON.parse(productsJson);
renderProducts(products);

})();