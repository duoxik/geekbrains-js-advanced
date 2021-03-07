<template>
  <div class="product">
    <div class="product_cover">
      <a href="#" class="product_cover_button">
        <img src="../assets/products/button.svg" alt="image" />
        <p class="product_cover_text">Add to Cart</p>
      </a>
    </div>
    <img src="../assets/products/item__1.png" alt="image" />
    <div class="product_header">{{ title }}</div>
    <div class="product_price">{{ price }} $</div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    title: String,
    price: Number,
  },
};
</script>

<style scoped>
.product {
  width: 263px;
  height: 364px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
}

.product:not(:nth-child(4n)) {
  margin-right: 29px;
}

.product:nth-child(n + 5) {
  margin-top: 39px;
}

.product:hover {
  -webkit-box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.15);
}

.product:hover .product_cover {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.product_header {
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  color: #222222;
  margin: 18px 14px;
}

.product_price {
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: #f16d7f;
  margin-left: 14px;
  margin-right: 14px;
}

.product_cover {
  width: 100%;
  height: 281px;
  background-color: rgba(58, 56, 56, 0.83);
  position: absolute;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: none;
}

.product_cover_button {
  width: 123px;
  height: 39px;
  border: 1px solid #ffffff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-decoration: none;
}

.product_cover_text {
  font-size: 13px;
  font-weight: 700;
  color: #ffffff;
}
</style>
