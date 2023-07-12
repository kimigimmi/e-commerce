<template>
  <div class="container">
    <div class="image-content"> <!--left side-->
      <img class="mainImage" :src="changedImage">
      <ul class="subImageContainer">
        <li v-for="subImage in subImagesLeft" :key="subImage">
          <img @mouseover="imgSelection(subImage)" :src="subImage" alt="Sub Image">
        </li>
      </ul>
    </div>

    <div class="info-content">
      <div class="top-of-info-content">
        <div class="category-explanation">{{category()}}</div>
        <div class="product-description">
          <h3>{{ productFound.description }}</h3>
          <span>Tükeniyor...</span>
        </div>
        <div class="product-price">{{ productFound.price }} Lira</div>
      </div>

      <button @click="navigateToChart" class="addToCart-btn">Sepete Ekle</button>

      <the-moda v-if="modaClicked" :differentColourImagesRight="differentColourImagesRight"
        @colourImage="changedImage = $event" :sizes="productFound.sizes">
      </the-moda>


      <the-electronic v-if="electronicClicked" :prominentDatas="productFound.prominentDatas">
      </the-electronic>

    </div>
  </div>
</template>

<script>
import TheModa from './ProductDetailComponents/TheModa.vue';
import TheElectronic from './ProductDetailComponents/TheElectronic.vue'
export default {
  components: {
    TheModa,
    TheElectronic
  },
  props: ['productId'],
  inject: ['moda', 'elektronik'],
  data() {
    return {
      productList: [],
      productFound: null,
      subImagesLeft: null,
      differentColourImagesRight: null,
      changedImage: null,
      chosenImgFromChildComponent: null,
      modaClicked: false,
      electronicClicked: false,
    }
  },

  created() {
    this.loadProducts(this.productId);
    if (this.productFound) {
      this.subImagesLeft = this.productFound.subImages.sub_images_left;
      this.differentColourImagesRight = this.productFound.subImages.different_colour_images_right;
      this.changedImage = this.productFound.img;

      this.productList = this.regulatingProductList;
      const matchedProduct = this.productList.find(product => product.id === this.productFound.id);
      if (matchedProduct.category === 'moda') {
        this.modaClicked = true;
        this.electronicClicked = false;
      } else if (matchedProduct.category === 'elektronik') {
        this.electronicClicked = true;
        this.modaClicked = false;
      }
    
    } else {
      return;
    }
  },

  methods: {
    loadProducts(productId) {
      const data = [this.moda, this.elektronik];
      const products = data.flatMap(category => {
        return Object.values(category).flatMap(subCategory => {
          return Object.values(subCategory).flat();
        });
      });
      this.productFound = products.find(product => product.id === productId);
      console.log(products)
    },
    imgSelection(subImage) {
      this.changedImage = this.subImagesLeft.find(subImg => subImg === subImage);
    },
    itemsToLocalStorage(size){   
      this.productFound.size = size;
      let itemsFromLocalStorage = JSON.parse(localStorage.getItem('holdingProducts'));   
      let holdProducts = [];
      holdProducts.push(this.productFound);  
      if (!itemsFromLocalStorage) {
        localStorage.setItem('holdingProducts', JSON.stringify(holdProducts));    
      } else {
        holdProducts = itemsFromLocalStorage;   
        let productFoundElement = holdProducts.find(prdtc => prdtc.id === this.productFound.id);
        if(!productFoundElement){
            productFoundElement = this.productFound;  
        } else {
          this.productFound.count = productFoundElement.count + 1;    
        }
        const notProductFoundObjects = holdProducts.filter(prdtc => prdtc.id !== this.productFound.id);
      //  console.log(notProductFoundObjects)
        notProductFoundObjects.push(this.productFound);
      //  console.log(notProductFoundObjects)
        localStorage.setItem('holdingProducts', JSON.stringify(notProductFoundObjects));
      }
    },
    navigateToChart(){
      let size = localStorage.getItem('size');
      console.log(size);
      if(!size && this.modaClicked){
        alert('Please choose size first !!!');
        return;
      }
      this.$router.push(`/shoppingChart`);
      localStorage.setItem('sizeToShoppingChart', size);
      this.itemsToLocalStorage(size); 
      size=''; 
      localStorage.setItem('size', size);
    },
    category(){
      const foundItem = this.regulatingProductList.find(prdtc => prdtc.id === this.productFound.id);
      return `${foundItem.category} > ${foundItem.kind} > ${foundItem.scat}  category`
    }

  },

  computed: {
    regulatingProductList() {
      const obj = { moda: this.moda, elektronik: this.elektronik };
      let productListKeeper = [];
      for (const category in obj) { // moda, elektronik
        for (const scat in obj[category]) { // elbise, laptop
          for (const kind in obj[category][scat]) { // kadin, acer
            const prList = obj[category][scat][kind]; // product list array
            productListKeeper = productListKeeper.concat(prList.map(product => {
              return {
                ...product,
                category,
                scat,
                kind,
              };
            }));
          }
        }
      }

    //  console.log({ productListKeeper });

      return productListKeeper;


      /*      {
       productListKeeper: [
         { id: 'id1', img, ......falanfilan hepsi burda, category: 'moda', scat: 'elbise', kind: 'kadin' },
         { id: 'id2',  ......falanfilan hepsi burda, category: 'moda', scat: 'elbise', kind: 'kadin' },
         { id: 'id4',  ......falanfilan hepsi burda, category: 'elektronik', scat: 'laptop', kind: 'acer' },
         { id: 'id3',  ......falanfilan hepsi burda, category: 'elektronik', scat: 'laptop', kind: 'acer' }
       ]
     } */

    },
  }
}
</script>



<style scoped>
.container {
  margin-top: 80px;
  border: 0.1px solid rgb(138, 132, 132);
  border-radius: 10px;
  margin: 150px 125px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-content {
  padding: 15px;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
}

.mainImage {
  border-radius: 8px;
  width: 100%;
  margin-bottom: 10px;
}

.subImageContainer {
  display: flex;
  justify-content: flex-start;
}

.colourContainer {
  position: relative;
  right: 30px;
  top: 10px;
}

.addToCart-btn {
  width: 30rem;
  height: 3rem;
  background: #f27a1a;
  font-size: 20px;
  color: #fff;
  border: 1px solid #f27a1a;
  border-radius: 6px;
  cursor: pointer;
}

.addToCart-btn:hover,
.addToCart-btn:active {
  background: #f09449;
}

.subImageContainer ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.subImageContainer li {
  margin-right: -20px;
}

.subImageContainer img {
  width: auto;
  height: 60px;
  border-radius: 5px;
}

.info-content {
  /* background-color: grey; */
  margin-right: 50px;
}



.top-of-info-content {
  margin: 0 50px 50px 0;
}


.product-description span {
  font-size: 13px;
  color: #d21313;
}

.product-description h3 {
  margin-bottom: 0;
  color: #272626;
  font-weight: normal;
}

.product-price {
  align-self: center;
  margin-top: 16px;
  color: #f27a1a;
  font-size: 22px;
  line-height: 26px;
  font-weight: 600;

}
</style>

