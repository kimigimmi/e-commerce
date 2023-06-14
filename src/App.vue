<template>
  <header-and-list></header-and-list>
</template>

<script>
import HeaderAndList from './components/HeaderAndList.vue'

export default {
  components: {
    HeaderAndList
  },
  data() {
    return {
      moda: 
        {
          kadin: {
            elbise: [
             { id: 'urununadi1', img: require('./assets/elbise1.webp'), description:'Etnik Desen Kemerli Gömlek Mini Elbise Midi Elbise', price: '499 TL' },
             { id: 'urununadi2', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' },
             { id: 'urununadi3', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' },
            ],
            bluz: [
              { id: 'urununadi4', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' },
              { id: 'urununadi5', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' }
            ],
             etek: [
              { id: 'urununadi6', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' },
              { id: 'urununadi7', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' }
             ]
        },  
          erkek: {
             gomlek: [
              { id: 'urununadi8', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' },
              { id: 'urununadi9', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' }
             ],
             pantolon: [
              { id: 'urununadi10', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' },
              { id: 'urununadi11', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' }
             ],
             kazak: [
              { id: 'urununadi12', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' },
              { id: 'urununadi13', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' }
             ]
        },
        
          ayakkabi: {
             spor: [
              { id: 'urununadi14', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' },
              { id: 'urununadi15', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' }
             ],
             topuklu: [
              { id: 'urununadi16', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' },
              { id: 'urununadi17', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' }
             ],
             bot: [
              { id: 'urununadi18', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' },
              { id: 'urununadi19', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' }
             ]
          } 
       },

       elektronik: 
        {
          bilgisayar: {
            laptop: [
             { id: 'urununadi20', img: require('./assets/pc1.jpg'), description: 'HP Victus Gaming Dizüstü Bilgisayar, 15,6 inç FHD IPS 144 Hz 9 Ms, Intel Core i5-13500H, 16 GB Ram, NVIDIA GeForce RTX 4050 6 GB, 512 GB SSD, FreeDos, Mika Gümüş, 7N9V3EA', price: '24.999 TL' },
             { id: 'urununadi21', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' },
             { id: 'urununadi22', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' },
            ],
            masaustu: [
              { id: 'urununadi23', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' },
              { id: 'urununadi24', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' }
            ],
             tablet: [
              { id: 'urununadi25', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' },
              { id: 'urununadi26', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' }
             ]
        },  
          cepTelefonu: {
             iphone: [
              { id: 'urununadi27', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' },
              { id: 'urununadi28', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' }
             ],
             samsung: [
              { id: 'urununadi29', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' },
              { id: 'urununadi30', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' }
             ],
             xiaomi: [
              { id: 'urununadi31', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' },
              { id: 'urununadi32', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' }
             ]
        },
        
          beyazEsya: {
             buzdolabi: [
              { id: 'urununadi33', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' },
              { id: 'urununadi34', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' }
             ],
             firin: [
              { id: 'urununadi35', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' },
              { id: 'urununadi36', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' }
             ],
             camasirMakinesi: [
              { id: 'urununadi37', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' },
              { id: 'urununadi38', img: 'buraya image', description: 'ürün aciklamasi', price: 'fiyati' }
             ]
          } 
       }
  }
},

  provide() {
    return {
      moda: this.moda,
      elektronik: this.elektronik,
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
