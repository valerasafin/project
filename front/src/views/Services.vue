<template>
    <div class="home">
      <div class="cap">
          <div class="logo">
              <a href="/" title="Garage113">
                  <img src="/img/logo.png" title="Garage113">
                  <span>Garage113</span>
              </a>
          </div>
          <div class="about">
              <a href="/" title="Главная" onclick="slowScroll('#main')">Главная</a>
              <a href="/about" onclick="slowScroll('#about_us')" title="О Нас">О Нас</a>
              <a href="/services" onclick="slowScroll('#services')" title="Услуги">Услуги</a>
              <a href="/contacts" onclick="slowScroll('#contacts')" title="Контакты">Контакты</a>
          </div>
      </div>
      <div id="main">
        <div class="text">
          <div class="title">
            <h1><B>Наши Услуги</B></h1>
          </div>
    
    <table class="table is-striped is-bordered mt-2 is-fullwidth ">
      <thead>
        <tr>
          <th>Название</th>
          <th>Цена</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.product_id">
          <td>
            {{ item.product_name }}
          </td>
          <td>{{ item.product_price }}</td>
          <td class="has-text-centered">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
      </div>
          <div class="footnote">
                <div class="contact_us">
                  <span>Garage113</span>
                    <a href="#" title="telegram">
                      <img src="/img/telegram.png">
                    </a>
                    <a href="#" title="instagram">
                      <img src="/img/instagram.png">
                    </a>
                    <a href="#" title="whatsapp">
                      <img src="/img/whatsapp.png">
                    </a>
                  </div>
                    <div class="rights">
                      <a href="">Все права защищены &copy; 2024</a>
                    </div> 
      </div>   
    </div>
  </template>
  

  <script>
//import axios
import axios from "axios";

export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    //get all products
    async getProducts() {
      try {
        const response = await axios.get("http://localhost:5000/products");
        this.items = response.data;
        console.log(this.items);
      } catch (err) {
        console.log(err);
      }
    },
    //delete product
    async deleteProduct(id) {
      try {
        await axios.delete(`http://localhost:5000/products/${id}`);
        this.getProducts();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
  <style  scoped>
  @import url('https://fonts.googleapis.com/css2?family=Suez+One&display=swap');
  
  .cap {
    float: left;
    background-color: #343434;
    width: 100%;
    border-bottom: 5px solid #59595a;
  }
  .logo {
      float: left;
    width: 30%;
  }
  .logo>a>img {
      width: 75px;
    height: 75px;
    float: left;
    margin-left: 5%;
    margin-top: 5px;
  }
  .logo>a{
      color: rgb(179, 175, 175);
      margin-left: 2%;
  }
  .logo>a>span {
      font-size: 3.5em;
    margin-left: 15px;
    padding-top: 20px;
    font-family: 'Suez One', serif;
  }
  .about {
      text-align: center;
    font-family: 'Suez One', serif;
    font-size: 2em;
    padding-right: 15%;
    padding-top: 15px;
    float: right;
    width: 50%;
  }
  .about>a {
    display: inline;
    color: rgb(179, 175, 175);
    padding-left: 5%;
    margin-left: 2%;
    float: center;
    
  }
  .about>a:hover {
      color: white;
    border-style: hidden;
  }
  .footnote {
    position: absolute;
      bottom: 0;
      height: 60px;
      float: left;
    background-color: #343434;
    width: 100%;
    border-top: 5px solid #59595a;
    font-family: 'Roboto Slab', serif;
  }
  .contact_us {
      margin-left: 5%;
  }
  .contact_us>span {
      color: #fafafa;
    float: left;
    font-size: 2.5em;
  }
  .contact_us>a {
      float: left;
    margin-left: 1%;
    margin-top: 5px;
  }
  .rights{
    color: #fafafa;
    font-size: 1.1em;
    float: right;
    margin-right: 5%;
    margin-top: 20px;
  }
  .main{
    position: relative;
    padding-bottom: 60px;
    box-sizing: border-box;
  }
  .title {
    text-align: center;
    padding-top: 6%;
  }
  .table {
    background-color: ;
    float: center;
    width: 120%;
    padding-top: 5%; 
    text-align: center;
  }
  .table>thead>tr>th{
    text-align: center;
  }
  </style>