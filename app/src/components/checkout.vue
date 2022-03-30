<template>
  <div>
    <h2>Checkout</h2>
    <h3>Added products</h3>
    <div v-for="product in cart" :key="product.id">
      {{ product.topic }} x{{ product.inCart }}
      <button @click="removeProduct(product)">remove</button>
    </div>
    <p>
      <strong> Name </strong> <input v-model="name" /><br />
      <strong> Address </strong> <input v-model="address" /><br />
      <button>Submit</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "checkoutForm",
  //shows all lessons in the chekcout
  props: ["cart"],
  data() {
    return {
      name: "",
      address: "",
      number: ""
    };
  },
  methods: {
    //emits an event that triggers parent component to remove lesson from cart
    removeProduct(product) {
      this.$emit("removeProduct", product);
    },
  },
};
</script>