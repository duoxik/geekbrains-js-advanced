const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 }
];

const renderGoodsItem = (title, price) => {
    return `<div class="products__item">
                <div class="products__item_cover">
                    <a href="#" class="products__item_cover_button">
                        <img src="images/products/button.svg" alt="image">
                        <p class="products__item_cover_text">Add to Cart</p>
                    </a>
                </div>
                <img src="images/products/item__1.png" alt="image">
                <div class="products__item_header">${title}</div>
                <div class="products__item_price">${price} $</div>
            </div>`;
};

const renderGoodsList = () => {
    const items = document.querySelector('.products__items');
    goods.forEach(item => items.insertAdjacentHTML('beforeend', renderGoodsItem(item.title, item.price)));
};

renderGoodsList();

/* Домашка к уроку 2 */
/* 1. не стал выносить size потому что он может быть не у всех товаров */
/* 2. помечаю поля как private по аналогии с парадигмой инкапсуляции в java */
/*    насколько это уместно здесь не знаю :) */
class ProductsCart {
    #products = new Array();
    #totalPrice = 0; 

    addProduct(product) {
        if (!(product instanceof Product)) {
            throw new Error('Передан параметр не являющийся инстансом Product');
        }

        this.#products.push(product);
        this.#totalPrice += product.getPrice();
    }

    getTotalPrice() {
        return this.#totalPrice;
    }
}

class Product {
    #name;
    #price;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

class Shirt extends Product {
    #size;
    
    constructor(name, price, size) {
        super(name, price);
        this.size = size;
    }

    getSize() {
        return this.size;
    }
}

class Socks extends Product {
    #size;

    constructor(name, price, size) {
        super(name, price);
        this.size = size;
    }

    getSize() {
        return this.size;
    }
}

class Jacket extends Product {
    #size;

    constructor(name, price, size) {
        super(name, price);
        this.size = size;
    }

    getSize() {
        return this.size;
    }
}

class Shoes extends Product {
    #size;

    constructor(name, price, size) {
        super(name, price);
        this.size = size;
    };

    getSize() {
        return this.size;
    };
};

shirt = new Shirt('test shirt', 250, 'L');
socks = new Socks('test socks', 100, 'S');
jacket = new Jacket('test jacket', 1000, 'XL');
shoes = new Shoes('test shoes', 500, 'M');

cart = new ProductsCart();
cart.addProduct(shirt);
cart.addProduct(socks);
cart.addProduct(jacket);
cart.addProduct(shoes);

console.log(cart);
