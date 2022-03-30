<template>
  <main>
    <div v-for="product in products" :key="product.id">
      <br><br>
      <img v-bind:src="product.image">
      <h2>{{ product.topic }}</h2>
      <p>Location: {{ product.location }}</p>
      <p>Price: {{ product.price }}</p>
      <p>Available stock: {{ product.space }}</p>
      <button @click="addToCart(product)" v-bind:disabled="!canAddToCart(product)">Add to cart</button>
    </div>
  </main>
</template>

<script>
export default {
  name: "ProductList",
  props: ["products"],
  data() {
    return {};
  },
  methods: {
    addToCart(product) {
      this.$emit("addProduct", product);
    },
    canAddToCart(product) {
      return product.space > 0;
    },
  },
};
</script>
