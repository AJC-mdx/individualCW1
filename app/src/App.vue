<template>
  <div id="app">
    <button v-on:click="showCheckout">{{ this.total }} Checkout</button>
    <div v-if="showLesson">
      <product-list :products="products" @addProduct="addToCart"></product-list>
    </div>
    <div v-else>
      <checkout :cart="cart" @removeProduct="removeFromCart"></checkout>
    </div>
  </div>
</template>

<script>
//imported and registered the 2 child components
import ProductList from "./components/productlist.vue";
import checkout from "./components/checkout.vue";

export default {
  name: "App",
  components: {
    ProductList,
    checkout,
  },
  data() {
    //data of all the lessons
    return {
      showLesson: true,
      cart: [],
      total: 0,
      products: [
        {
          id: 1001,
          topic: "Maths",
          image: "maths.png",
          location: "london",
          price: 90,
          space: 5,
          inCart: 0,
        },
        {
          id: 1002,
          topic: "English",
          image: "literature.png",
          location: "london",
          price: 80,
          space: 5,
          inCart: 0,
        },
        {
          id: 1003,
          topic: "Science",
          image: "biology.png",
          location: "london",
          price: 70,
          space: 5,
          inCart: 0,
        },
        {
          id: 1004,
          topic: "R.E",
          image: "RE.png",
          location: "london",
          price: 50,
          space: 5,
          inCart: 0,
        },
        {
          id: 1005,
          topic: "App Development",
          image: "appdev.png",
          location: "london",
          price: 100,
          space: 5,
          inCart: 0,
        },
      ],
    };
  },
  methods: {
    //switches between lessons and checkout page
    showCheckout() {
      this.showLesson = this.showLesson ? false : true;
    },
    //respnds to addlesson event by adding to the cart
    addToCart(product) {
      let added = false;
      this.cart.forEach((product2) => {
        if (product2.id === product.id) {
          product.inCart++;
          added = true;
        }
      });
      if (!added) {
        this.cart.push(product);
        product.inCart = 1;
      }
      product.space--;
      this.total++;
    },
    //respnds to removelesson event by removing from the cart
    removeFromCart(product) {
      this.cart.forEach((product2) => {
        if (product2.id === product.id) {
          product.space++;
          product.inCart--;
        }
      });
      if (product.inCart === 0) {
        this.cart.splice(this.cart.indexOf(product), 1)
      }
      this.total--;
    },
  },
};
</script>