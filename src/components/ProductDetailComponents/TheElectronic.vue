<template>
    <div>
      <button class="addToCart-btn">Sepete Ekle</button>
  
      <div class="extra-infos">
        <h4>One Cikan Bilgiler</h4>
        <div>
          <ul>
            <li v-for="keyItem in firstPartOfProminentKeys" :key="keyItem">{{ keyItem }}</li>
          </ul>
          <ul>
            <li v-for="valueItem in firstPartOfProminentValues" :key="valueItem">{{ valueItem }}</li>
          </ul>
          <ul>
            <li v-for="keyItem in secondPartOfProminentKeys" :key="keyItem">{{ keyItem }}</li>
          </ul>
          <ul>
            <li v-for="valueItem in secondPartOfProminentValues" :key="valueItem">{{ valueItem }}</li>
          </ul>
        </div>
        <ol>
          <li>15 gün içinde ücretsiz iade. Detayli bilgi için tiklayin.</li>
          <li>
            Bu üründen en fazla 10 adet sipariş verilebilir. 10 adetin üzerindeki siparişlerin iptal etme hakki sakli
            tutulur.
          </li>
          <li>Kampanya fiyatindan satilmak üzere 100 adetten fazla stok sunulmuştur.</li>
          <li>İncelemiş olduğunuz ürünün satis fiyatini satici belirlemektedir.</li>
          <li>Bir ürün, birden fazla satici tarafindan satilabilir.</li>
        </ol>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['prominentDatas'],
    data() {
      return {
        keysOfProminentDatas: Object.keys(this.prominentDatas),
        valuesOfProminentDatas: Object.values(this.prominentDatas),
        firstPartOfProminentKeys: [],
        firstPartOfProminentValues: [],
        secondPartOfProminentKeys: [],
        secondPartOfProminentValues: []
      }
    },
    created() { // Doğru şekilde bir yöntem olarak tanımlanmalı
      this.firstPartOfKeys(); // Oluşturulduğunda bu yöntemi çağıralım
    },
    methods: {
      firstPartOfKeys() {
        for (let i = 0; i < this.keysOfProminentDatas.length / 2; i++) {
          this.firstPartOfProminentKeys.push(this.keysOfProminentDatas[i]);
          this.firstPartOfProminentValues.push(this.valuesOfProminentDatas[i]);
        }
        for (let i = 3; i < this.keysOfProminentDatas.length; i++) { // keysOfProminentDatas.length olarak güncellenmeli
          this.secondPartOfProminentKeys.push(this.keysOfProminentDatas[i]);
          this.secondPartOfProminentValues.push(this.valuesOfProminentDatas[i]); // secondPartOfProminentValues olarak güncellenmeli
        }
      }
    }
  };
  </script>


<style>
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
</style>