<template>
  <div class="container products">
    <div class="products__items">
      <Product
        v-for="item in products"
        v-bind:key="item.product_name"
        :title="item.product_name"
        :price="item.price"
      />
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";

const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

export default {
  components: { Product },
  name: "Products",
  data() {
    return {
      products: null,
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      fetch(`${API_URL}/catalogData.json`)
        .then((response) => response.json())
        .then((products) => {
          this.products = products;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
.products {
  margin-top: 30px;
}

.products__items {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
</style>
