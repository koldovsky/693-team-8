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

 (function() {

    const slides = [
        '<div><img src = "img/armchairs-mds.png"></div>',
        '<div><img src = "img/armchairs-dix.png"></div>',
        '<div><img src = "img/armchairs-lexx.png"></div>'
];
        const currentSlide = 0;

    function renderCarousel() {
       const slideContainer = document.querySelector('.items-spring2020');
       slideContainer.innerHTML = slides[currentSlide];
       if (window.innerWidth >= 600) {
           const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
           slideContainer.innerHTML += slides[secondSlide];
           if (window.innerWidth >= 900) {
             const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
             slideContainer.innerHTML += slides[thirdSlide];              
           }
       }
    }
 
    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        renderCarousel();
    }
 
    function prevSlide() {
        currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
        renderCarousel();
    }
 
    setInterval(nextSlide, 3000);
 
    renderCarousel();
 
    const btnForward = document.querySelector('.carousel .forward');
    btnForward.addEventListener('click', nextSlide);
 
    const btnBack = document.querySelector('.carousel .back');
    btnBack.addEventListener('click', prevSlide);
 
    window.addEventListener('resize', renderCarousel);
 
 })();