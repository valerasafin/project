<template>
  <div class="container">
    <div class="field">
      <label class="label">Название</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Service Name"
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
      <button class="button is-success" @click="saveProduct">Сохранить</button>
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
  methods: {
    //Создать новый продукт
    async saveProduct() {
      try {
        await axios.post("http://localhost:5000/products", {
          product_name: this.productName,
          product_price: this.productPrice,
        });
        (this.productname = ""), (this.productPrice = "");
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
