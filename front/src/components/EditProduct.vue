<template>
  <div class="container">
    <div class="field">
      <label class="label">Название</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Product Name"
          v-model="productName"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Цена <b>₽</b></label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Price"
          v-model="productPrice"
        />
      </div>
    </div>

    <div class="control">
      <button class="button is-success" @click="updateProduct">Обновить</button>
    </div>
  </div>
</template>

<script>
//import axios
import axios from "axios";

export default {
  data() {
    return {
      productName: "",
      productPrice: "",
    };
  },
  created: function () {
    this.getProductById();
  },
  methods: {
    //get product by id
    async getProductById() {
      try {
        const response = await axios.get(
          `http://localhost:5000/products/${this.$route.params.id}`
        );
        this.productName = response.data.product_name;
        this.productPrice = response.data.product_price;
      } catch (err) {
        console.log(err);
      }
    },

    //update product
    async updateProduct() {
      try {
        await axios.put(
          `http://localhost:5000/products/${this.$route.params.id}`,
          {
            product_name: this.productName,
            product_price: this.productPrice,
          }
        );
        (this.productName = ""), (this.productPrice = "");
        this.$router.push("/modify");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
.container {
  margin-top: 10px;
  width: 20%;
  padding: 30px;
}
</style>
