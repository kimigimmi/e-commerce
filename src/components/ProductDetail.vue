<template>
  <img :src="productFound.img">
  <p>{{ productFound.id }}</p>
  <p>Bu şekilde o ürünün özelliklerini, sepete ekle'yi falan bu template'e yazcaz</p>
</template>

<script>
export default {
  props: ['productId'],
  inject: ['moda', 'elektronik'],
  data() {
    return {
      productFound: null
    }
  },
  created() {
    const data = [this.moda, this.elektronik];
    const products = data.flatMap(category => {
      return Object.values(category).flatMap(subCategory => {
        return Object.values(subCategory).flat();
      });
    });
    this.productFound = products.find(product => product.id === this.productId);
  }
}
</script>


<style scoped>
p {
  background-color: wheat;
  font-size: 30px;
}

img {
  margin-top: 100px;
  width: 100px;
}
</style>
