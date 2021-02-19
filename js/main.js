const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

class ProductsCart {
  products = new Array();
  totalPrice = 0;

  add(product) {
    if (!(product instanceof Product)) {
      throw new Error("Передан параметр не являющийся инстансом Product");
    }

    this.products.push(product);
    this.totalPrice += product.price;
  }

  render() {
    const productItems = document.querySelector(".products__items");
    this.products.forEach((product) => {
      const productItem = new Product(product.product_name, product.price);
      productItems.insertAdjacentHTML("beforeend", productItem.render());
    });
  }

  fill() {
    fetch(`${API_URL}/catalogData.json`)
      .then((response) => response.json())
      .then((products) => {
        this.products = products;
        this.render();
      })
      .catch((e) => {
        console.log(e);
      });
  }
}

class Product {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  render() {
    return `<div class="products__item">
                  <div class="products__item_cover">
                      <a href="#" class="products__item_cover_button">
                          <img src="images/products/button.svg" alt="image">
                          <p class="products__item_cover_text">Add to Cart</p>
                      </a>
                  </div>
                  <img src="images/products/item__1.png" alt="image">
                  <div class="products__item_header">${this.title}</div>
                  <div class="products__item_price">${this.price} $</div>
              </div>`;
  }
}

const cart = new ProductsCart();
cart.fill();
