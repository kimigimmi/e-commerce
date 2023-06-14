<template>
  <card-view>
    <li @click="navigateToProductDetail">
      <img :src="img" alt="">
      <p class="description">{{ descriptionTrim }}</p>
      <p>{{ price }}</p>
    </li>
  </card-view>
  
</template>

<script>
import CardView from './CardView.vue'

export default {
  components: {
    CardView,
  },
  emits: ['isNavigated'],
  props: ['productId', 'img', 'description', 'price'],
  data(){
    return {
        isNavigated: false 
    }
  },
  computed: {
    descriptionTrim() {             
      const descriptionTrimmedArray = [];
      if (this.description.length < 50) {
         return this.description;
      } else {
        for (let i = 0; i < 50; i++) {
        descriptionTrimmedArray.push(this.description[i]);
      }
      return descriptionTrimmedArray.join('');
      }
      
      
    }
  },
  methods: {
    navigateToProductDetail() {
      this.isNavigated = !this.isNavigated;
      this.$emit('isNavigated', this.isNavigated);
      this.$router.push(`/products/productDetail/${this.productId}`);
    }
  }
}
</script>

<style scoped>
img {
  height: 200px;
  width: 150px;
}

li h3,
li p {
  margin: 0.5rem 0;
  font-size: 1.25rem;
  color: white;
  background-color: #131921;
}

li {
  width: 70%;
  cursor: pointer; /* Ekle: İmleçin el şeklinde görünmesini sağlar */
}
</style>
