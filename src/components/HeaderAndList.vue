<template>
  <div :class="{ pageContainer: isModaListVisible || isElektronikListVisible }">
    <the-header 
       @modalistVisible="handleModaListVisibility"
       @elektroniklistVisible="handleElektronikListVisibility">
    </the-header>

    <transition name="slide">
    <div class="categori" v-if="isModaListVisible">          <!--buraya Animasyon vercez-->
      <div class="titles">
        <p>Kadin</p>
        <p>Erkek</p>
        <p>Ayakkabi</p>
      </div>
      <div class="item-lists">
        <ul>
          <router-link @click="selectLink(item)" :to="'/products/' + item" v-for="item in Object.keys(moda.kadin)"
            :key="item">{{ item }}</router-link>
        </ul>
        <ul>
          <router-link @click="selectLink(item)" :to="'/products/' + item" v-for="item in Object.keys(moda.erkek)"
            :key="item">{{ item }}</router-link>
        </ul>
        <ul>
          <router-link @click="selectLink(item)" :to="'/products/' + item" v-for="item in Object.keys(moda.ayakkabi)"
            :key="item">{{ item }}</router-link>
        </ul>
      </div>
    </div>
    </transition>

    <transition name="slide">
    <div class="categori" v-if="isElektronikListVisible">
      <div class="titles">
        <p>Bilgisayar</p>
        <p>Cep Telefonu</p>
        <p>Beyaz Esya</p>
      </div>
      <div class="item-lists">
        <ul>
          <router-link @click="selectLink(item)" :to="'/products/' + item"
            v-for="item in Object.keys(elektronik.bilgisayar)" :key="item">{{ item }}</router-link>
        </ul>
        <ul>
          <router-link @click="selectLink(item)" :to="'/products/' + item"
            v-for="item in Object.keys(elektronik.cepTelefonu)" :key="item">{{ item }}</router-link>
        </ul>
        <ul>
          <router-link @click="selectLink(item)" :to="'/products/' + item"
            v-for="item in Object.keys(elektronik.beyazEsya)" :key="item">{{ item }}</router-link>
        </ul>
      </div>
    </div>
    </transition>


    <div id="productList" v-if="!isNavigated">
      <ul>
        <product-list 
          v-for="item in getList(selectedLink)" 
           :key="item.id"
           :productId="item.id" 
           :img="item.img"
           :description="item.description" 
           :price="item.price" 
           @isNavigated="handleIsNavigated">
        </product-list>
      </ul>
    </div>
    <router-view v-else class="productDetailCSS"></router-view>
  </div>
</template>

<script>
import ProductList from './ProductList.vue';
import TheHeader from './TheHeader.vue';

export default {
  components: {
    ProductList,
    TheHeader
  },
  inject: ['moda', 'elektronik'],
  data() {
    return {
      selectedLink: '', // Seçilen linki tutan değişken
      isModaListVisible: false,
      isElektronikListVisible: false,
      isNavigated: false
    };
  },
  methods: {
    selectLink(link) {
      this.selectedLink = link; // Seçilen linki güncelle
      this.isNavigated = false;
    },
    handleModaListVisibility(booleanForModa, booleanForElektronik) {
      this.isModaListVisible = booleanForModa;
      this.isElektronikListVisible = booleanForElektronik;
    },
    handleElektronikListVisibility(booleanForModa, booleanForElektronik) {
      this.isModaListVisible = booleanForModa;
      this.isElektronikListVisible = booleanForElektronik;
    },
    getList(link) {
      const data = [this.moda, this.elektronik];
      if (data) {
        for (const mainCategory in data) {
          const subCategory = data[mainCategory];
          if (subCategory) {
            for (const subOfSubCategory in subCategory) {
              const products = subCategory[subOfSubCategory];    
          //    console.log(products);   // object verir.
          //    console.log(Object.keys(products));     Object.keys(products) = ['elbise', 'bluz', 'etek'] gibi verir
              if (Object.keys(products).includes(link)) {
                return products[link];
              }
            }
          }
        }
      }
    },
    handleIsNavigated(booleanValue) {
      this.isNavigated = booleanValue;
    }
  }
};
</script>

<style scoped>
header {
  margin: 0;
  width: 100%;
  height: 5rem;
}

.topOfHeader {
  height: 100%;
  color: white;
  background-color: #131921;
}

nav {
  height: 5rem;
  color: white;
  background: #232f3e;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
  cursor: pointer;
}

a {
  text-decoration: none;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: black;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}

#productList {
  margin-top: 5rem;
}

.categori {
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  background: rgb(250, 225, 229);
  border-radius: 0 0 10px 10px;
}

.titles {
  margin-top: 5rem;
  display: flex;
  justify-content: space-around;
  color: rgb(29, 0, 158);
}

.item-lists {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.item-lists ul {
  display: flex;
  flex-direction: column;
}

.item-lists li {
  color: black;
}

.activeBody {
  background-color: gray;
}

.pageContainer {
  background-color: rgb(163, 163, 163);
  height: calc(100vh);
  /* Sayfanın tamamına kadar uzanan bir yükseklik ayarlanır */
  overflow: auto;
  /* Scroll bar'ı görüntüler. Aşağı indirince orayı da gri yapar */
}

.productDetailCSS {
  margin-top: 50px;
}


.slide-enter-active,
.slide-leave-active {
  transition: max-height 0.5s ease-in-out;
}

.slide-enter-to,
.slide-leave-from {
  max-height: 100px;
}

.slide-enter-from,
.slide-leave-to { 
  max-height: 0;
}


</style>
