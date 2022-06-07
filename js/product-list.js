class ProductList {
    constructor(cart) {
      this.cart = cart;
      this.container = document.querySelector('.products-container');
      this.productService = new ProductsService();
      this.sortDirection = 'ascending';
      this.productService
        .getProducts()
        .then(() => this.renderProducts())
        .then(() => this.addEventListeners()); 
      document.querySelector('.search').addEventListener('keydown', async () => {
        await this.renderProducts();
        this.addEventListeners();
      });   
    }
    async renderProducts() {
      const searchInput = document.querySelector('.search');
      let productListDomString = '';
      const products = await this.productService.getProducts();
      [...products]
        .filter( product => product.title.includes(searchInput.value) )
        .sort( (a, b) => this.sortDirection === 'ascending' 
                           ? a.price - b.price
                           : b.price - a.price)
        .forEach(product => {
        productListDomString += `<div class="location__price btn">
                    <div class="card product">
                      <img class="card-img-top" src="${product.image}" 
                          alt="${product.title}">
                      <div class="card-body d-flex flex-column">
                        <h4 class="card-title">${product.title}</h4>
                        <p class="card-text flex-fill">${product.description}</p>
                        <div class="d-flex justify-content-around">mm
                          <button class="btn btn-primary buy" data-id="${product.id}">
                            $${product.price} - Buy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>`;
      });
      this.container.innerHTML = productListDomString;
    }
    async addEventListeners() {
      document
        .querySelectorAll('.product .btn')
        .forEach(button =>
          button.addEventListener('click', event =>
            this.handleProductInfoClick(event)
          )
        );
      document
        .querySelectorAll(
          '.card.product button.buy, #productModal button.buy'
        )
        .forEach(button =>
          button.addEventListener('click', event =>
            this.handleProductBuyClick(event)
          )
        );
      document.querySelector('.sort-asc').addEventListener('click', async () => {
          this.sortDirection = 'ascending';
          await this.renderProducts();
          this.addEventListeners();
      });
      document.querySelector('.sort-desc').addEventListener('click', async () => {
          this.sortDirection = 'descending';
          await this.renderProducts();
          this.addEventListeners();
      });
    }
    handleProductBuyClick(event) {
        const id = button.dataset.id;
        this.cart.addProduct(id);
        window.showAlert('Product added to cart');
      }
    }