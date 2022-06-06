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
    
    let products;
    
    function renderProducts() {
        const productsContainer = document.querySelector('.items-spring2020');
        productsContainer.innerHTML = '';
        for (const product of products) {
            productsContainer.innerHTML += `
            <article class="product-card">
                <img class="product-card__image"
                src="${product.imgUrl}"
                alt="${product.name}"
                />
                <h3 class="product-card__h3">${product.name}</h3>
                <p class="product-card__description">
                ${product.description}
                </p>
                <p class="product-card__price">
                  ${product.price}
                </p>
            </article>
            `;
        }
    }

    async function loadProducts() {
        const response = await fetch('products.json');
        products = await response.json();
        renderProducts();
    }

    loadProducts();
})();