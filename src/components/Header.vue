<template>
  <header class="header">
    <div class="container header">
      <button class="header__cart_button">
        Корзина
        <i class="fas fa-caret-down"></i>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  height: 75px;
  border-bottom: 1px solid #ececec;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.header__cart_button {
  padding: 12px;
  color: white;
  border: none;
  background-color: #f16d7f;
  border-radius: 3px;
}
</style>
