<template>
  <div>
    <div class="different-colour-products">
      <h4>Renk:</h4>
      <ul class="colourContainer subImageContainer">
        <li v-for="colourImage in differentColourImagesRight" :key="colourImage">
          <img @mouseover="emitColourImage(colourImage)" :src="colourImage" alt="Colour Image">
        </li>
      </ul>
    </div>

    <div class="sizes">
      <h4>Beden: {{ size }}</h4>
      <ul class="colourContainer subImageContainer">
        <li v-for="sizeItem in sizes" :key="sizeItem" >
          <CardView 
            :class="{ borderedStyle: sizeItem === size || sizeItem === activeBordered }"
            @click="changeSize(sizeItem)"
            @mouseover="changeSizeActivity(sizeItem)">
            {{ sizeItem }} 
          </CardView>
        </li>
      </ul>
    </div>


      <div class="extra-infos">
         <h4>One Cikan Bilgiler</h4>
         <ol>
           <li>15 gün içinde ücretsiz iade. Detayli bilgi için tiklayin.</li>
           <li>Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin üzerindeki siparişlerin iptal etme hakki sakli tutulur.</li>
           <li>Kampanya fiyatindan satilmak üzere 100 adetten fazla stok sunulmuştur.</li>
           <li>İncelemiş olduğunuz ürünün satis fiyatini satici belirlemektedir.</li>
           <li>Bir ürün, birden fazla satici tarafindan satilabilir.</li>
         </ol>
      </div>
  </div>
</template>

<script>
import CardView from '../CardView.vue';

export default {
  components: {
    CardView
  },
  props: ['differentColourImagesRight', 'sizes'],
  inject: ['moda', 'elektronik'],
  data() {
    return {
      size: '',
      activeBordered: ''
    };
  },
  methods: {
    emitColourImage(colourImage) {
      this.$emit('colourImage', colourImage);
    },
    changeSize(sizeItem) {
      this.size = sizeItem;
      localStorage.setItem('size', sizeItem);
    },
    changeSizeActivity(sizeItem){
      this.activeBordered = sizeItem;
    },
  },
};
</script>



<style scoped>
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

ol {
  list-style-type:disc;
  padding-left: 20px;
}

h4 {
  font-size: 14px;
  color: #333;
  margin-bottom: 3px;
}

ol li {
  font-size: 12px;
  line-height: 28px;
  color: #333;
  padding-left: 5px;
}

.borderedStyle {
  border: 1px solid red;
  border-radius: 12px;
}

.sizes {
  margin: 20px 0 40px 0;
}

</style>