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
    <div class="body" >
    </div>
    <div class="main">
      
          <div class="container">
            <div class="slideshow">
              <div id="slide-1" class="slide">
                <a href="#slide-7"></a>
                <a href="#slide-2"></a>
                <img src="/img/s3.jpg" />
              </div>
              <div id="slide-2" class="slide">
                <a href="#slide-1"></a>
                <a href="#slide-3"></a>
                <img src="/img/s1.jpeg" />
              </div>
              <div id="slide-3" class="slide">
                <a href="#slide-2"></a>
                <a href="#slide-4"></a>
                <img src="/img/s2.jpg" />
              </div>
              <div id="slide-4" class="slide">
                <a href="#slide-3"></a>
                <a href="#slide-5"></a>
                <img src="/img/s4.jpg" />
              </div>
              <div id="slide-5" class="slide">
                <a href="#slide-4"></a>
                <a href="#slide-6"></a>
                <img src="/img/s5.jpeg" />
              </div>
            </div>
            <div class="pagination">
              <a href="#slide-1"><span>1</span></a>
              <a href="#slide-2"><span>2</span></a>
              <a href="#slide-3"><span>3</span></a>
              <a href="#slide-4"><span>4</span></a>
              <a href="#slide-5"><span>5</span></a>
            </div>
          </div>
          <div class="just-block">
            
              <img src="/img/sto22.png">
              <a href="#"><span>Автосервис — с 8 до 20 без выходных</span></a>
           
              <img src="/img/mso22.png"><a href="#"><span>Мойка — круглосуточно</span></a>
             
              <span class="my-just-block_thumb">
                <img src="/img/mest22.png" alt="Время работы" >
              </span>
              <a href="contacts.html"><span>г. Рязань, ул. Восточная окружная дорога 4</span></a>
              <span><br></span>
              <span><br></span>
              <span><br></span>
              <span><br></span>
              <span><br></span>
              <span><br></span>
              <span><br></span>
              <span><br></span>
              
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

</script>
<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Suez+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap');
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
.body{
  padding-top:5% ;
}
.main{
  padding-top: 5%; ;
  background-color: white ;
  width: 100%;
  float: center;
}
.main>span{
  font-family: Trebuchet MS, Helvetica;
    color: black;
    font-size: 20px;
    float: top;
    margin-left: 35%;
    margin-top: 5%;
}

  .just-block{
    margin-top: 5%;
    margin-left: 25%;
    font-weight:normal;
  }
  .just-block>img{
    padding-left: 1%;
  }
  .just-block>a{
    padding-left: 1%;
    font-size:15px;
    color: #000;
  }
  



h1 {
  text-align: center;
  margin-top: 10px;
}

h1,
aside,


.container {
  margin: 0 auto 20px;
  width: 700px;
  border-radius: 5px;
  margin: 0 auto;
  position: relative;
  transition: box-shadow 200ms;
  &:hover {
    box-shadow: 0 10px 50px -10px rgba(0,0,0,0.25);
  }
}
.slideshow {
  position: relative;
  width: 100%;
  &:after {
    content: '';
    display: block;
    padding-bottom: calc((100% / 6) * 4);
  }
  &:hover a {
    opacity: 1;
  }
  a {
    opacity: 0;
    position: relative;
    text-decoration: none;
    transition: opacity 0.5s;
    &:after {
      border-color: #FFF #FFF transparent transparent;
      border-style: solid;
      border-width: 2px;
      color: #FFF;
      display: block;
      height: 10px;
      position: absolute;
      top: calc(50% - 5px);
      width: 10px;
    }
    &:first-child:after {
      content: '';
      left: 10px;
      transform: rotate(-135deg);
    }
    &:nth-child(2):after {
      content: '';
      right: 10px;
      transform: rotate(45deg);
    }
  }
  .slide {
    background-color: #FFF;
    box-sizing: border-box;
    display: none;
    height: 100%;
    position: absolute;
    width: 100%;
    &:first-child,
    &:target {
      display: block;
    }
    a {
      display: block;
      height: 100%;
      position: absolute;
      width: 50%;
      &:nth-child(2) {
        left: 50%;
      }
    }
    img {
      border-radius: 5px;
      width: 100%;
    }
  }
}
.pagination {
  display: flex;
  bottom: 10px;
  justify-content: center;
  position: absolute;
  width: 100%;
  & {
    background: rgba(#FFF,0.75);
    border-radius: 50%;
    display: block;
    height: 10px;
    width: 10px;
    &:not(:last-child) {
      margin-right: 5px;
    }
    span {
      display: none;
    }
  }
}

a:target {
  color: red;
} 
</style>