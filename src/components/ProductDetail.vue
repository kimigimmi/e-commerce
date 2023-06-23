<template>
  <div class="container">
    <div class="image-content">
      <img class="mainImage" :src="changedImage">
      <ul class="subImageContainer">
        <li v-for="subImage in subImagesLeft" :key="subImage">
          <img @mouseover="imgSelection(subImage)" :src="subImage" alt="Sub Image">
        </li>
      </ul>
    </div>

    <div class="info-content">
      <div class="top-of-info-content">
        <div class="category-explanation">Erkek gömlek kategorisinde gibi ...... Bu kismi sonra yap</div>
        <div class="product-description">
          <h3>{{ productFound.description }}</h3>
          <span>Tükeniyor...</span>                  
        </div>
        <div class="product-price">{{ productFound.price }}</div>
      </div>
      
      <the-moda 
      v-if="modaClicked"
      :differentColourImagesRight="differentColourImagesRight" 
      @colourImage="changedImage = $event"
      :sizes="productFound.sizes"
      ></the-moda>


      <the-electronic
      v-if="electronicClicked"
      :prominentDatas="productFound.prominentDatas"
      ></the-electronic>
   
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
      productFound: null,
      subImagesLeft: null,
      differentColourImagesRight: null,
      changedImage: null,
      chosenImgFromChildComponent: null,
      modaClicked: false,
      electronicClicked: false
    }
  },

  created() {
  this.loadProducts(this.productId);
  if (this.productFound) {
    this.subImagesLeft = this.productFound.subImages.sub_images_left;
    this.differentColourImagesRight = this.productFound.subImages.different_colour_images_right;
    this.changedImage = this.productFound.img;    
  } else {
    return;
  }
},

  methods: {
    loadProducts(productId) {
      const data = [this.moda, this.elektronik];
      const products = data.flatMap(category => {   // Buraya bakkkkkkkkkkkkkk !!!!!!!!!!!
        return Object.values(category).flatMap(subCategory => {
          return Object.values(subCategory).flat();
        });
      });
      this.productFound = products.find(product => product.id === productId);
      console.log(products)
    },
    imgSelection(subImage){
      this.changedImage = this.subImagesLeft.find(subImg => subImg === subImage);
      
    },
  },
}
</script>


<style scoped>
.container {
  margin-top: 80px;
  border: 0.1px solid rgb(138, 132, 132);
  border-radius: 10px;
  margin: 150px 200px;
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
 background-color: grey;
 margin-right: 50px;
}



.top-of-info-content {
  margin: 0 50px 50px 0;
}


.product-description span{
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

