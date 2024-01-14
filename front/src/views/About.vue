<template>
  <div class="About">
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
      <div class="about_us">
            <h2 class="heading">О сервисе</h2>
            <div style="clear: both"><br></div>
            <div class="description">
              <span><b>Мы выполняем:</b></span>
              <span><br></span>
              <span><b>✔</b> Ремонт ДВС</span><br>
              <span><b>✔</b> Ремонт подвески</span><br>
              <span><b>✔</b> Ремонт электрики</span><br>
              <span><b>✔</b> Кузовной ремонт</span><br>
              <span><b>✔</b> Покраска авто</span><br>
            </div>

          </div>
        <div class="work">
          <span><b>Наши работы</b></span><br>
        <div class="slider">
          <input type="radio" name="switch" id="btn1" checked>
          <input type="radio" name="switch" id="btn2">
          <input type="radio" name="switch" id="btn3">
          
          <div class="switch">
            <label for="btn1"></label>
            <label for="btn2"></label>
            <label for="btn3"></label>
          </div>
          
          <div class="slider-inner">
            <div class="slides">
              <img src="/img/z1.jpg"/>
              <img src="/img/z2.jpeg"/>
              <img src="/img/z4.jpg"/>
            </div>
          </div>
        </div>
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
<style>
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
  bottom: 0;
    position: sticky;
    height: auto;
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
 
}
.main{
    margin-top: 5%;
}
.about_us{
    float: left;
    margin-left: 5%;
    font-size: 35px;
    margin-top: 5%;
}
.heading{
  font-size: 35px;
}
.description{
    font-size: 30px;
}
.work{
    margin-right: 20%;
    float: right;

}
.work>span{
    float: right;
    margin-right: 35%;
    margin-top: 5%;
    font-size: 35px;

}

.slider {
    float: right;
    position: relative;
    max-width: 620px;
    margin: 50px auto;
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.75);
  }
  
  .slider input[name="switch"] {
    display: none;
  }
  
  .switch {
    position: absolute;
    left: 0;
    bottom: -40px;
    text-align: center;
    width: 100%;
  }
  
  .switch label {
    display: inline-block;
    width: 8px;
    height: 8px;
    cursor: pointer;
    margin: 0 3px;
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, .8);
    border-radius: 50%;
    border: 5px solid #2f363c;
    background-color: #738290;
  }
  
  #btn1:checked~.switch label[for="btn1"] {
    background-color: white;
  }
  
  #btn2:checked~.switch label[for="btn2"] {
    background-color: white;
  }
  
  #btn3:checked~.switch label[for="btn3"] {
    background-color: white;
  }
  
  .slider-inner {
    overflow: hidden;
    
  }
  
  .slides {
    display: flex;
    width: 100%;
    transition: all 0.5s;
  }
  
  .slides img {
    width: 100%;
    flex-shrink:0;
  }
  
  #btn1:checked~slider-inner slides {
    transform: translate(0);
  }
  
  #btn2:checked~.slider-inner .slides {
    transform: translateX(-100%);
  }
  
  #btn3:checked~.slider-inner .slides {
    transform: translateX(-200%);
  }
.btn:hover{
    border-bottom: 2px solid fuchsia;
    margin-top: 7px;
}
.btn:active{
    border-bottom: 0;
    margin-top: 9px;
}
.btn{
    float: right;
    margin-right: 3%;
    margin-top: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    padding: 5px 9px;
    font-size: 1.2em;
    background-color: gray;
    text-shadow: #454545 0 0 2px;
    border-bottom: 4px solid rgba(217, 91, 72, 1);
}
</style>