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
}

renderGoodsList();
