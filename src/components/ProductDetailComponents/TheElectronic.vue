<template>
  <div>
    <div class="extra-infos">
      <span class="line"></span>
      <h4>One Cikan Bilgiler</h4>
      <div class="info-properties">
        <div class="first-part-of-info-properties">
          <ul>
            <li v-for="keyItem in firstPartOfProminentKeys" :key="keyItem">
              {{ keyItem }}<span>:</span>
            </li>
          </ul>
          <ul>
            <li v-for="valueItem in firstPartOfProminentValues" :key="valueItem">{{ valueItem }}</li>
          </ul>
        </div>

        <div class="second-part-of-info-properties">
          <ul>
            <li v-for="keyItem in secondPartOfProminentKeys" :key="keyItem">
              {{ keyItem }}<span>:</span>
            </li>
          </ul>

          <ul>
            <li v-for="valueItem in secondPartOfProminentValues" :key="valueItem">{{ valueItem }}</li>
          </ul>
        </div>
      </div>


      <span class="line"></span>
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

.info-properties {
  display: flex;
  flex-direction: row;
  margin-top: -10px;
}

.first-part-of-info-properties,
.second-part-of-info-properties {
  display: flex;
}

.first-part-of-info-properties ul,
.second-part-of-info-properties ul {
  display: flex;
  flex-direction: column;
  margin-top: 0;
  text-align: center;
}


.info-properties {
  margin-bottom: 50px;
  margin-left: -20px;
}

.info-properties li {
  margin-top: 10px;
  font-size: 12px;
  color: black;
  display: flex;
  text-align: center;
}


.info-properties li span {
  margin-left: 10px;
}

.line {
  display: block;
  border-bottom: 0.3px solid #666;
  width: 100%;
  margin-top: 30px;
  margin-right: -20px;
  margin-bottom: 20px;
}

ol {
  list-style-type:disc;
  padding-left: 20px;
}

ol li {
  font-size: 12px;
  line-height: 28px;
  color: #333;
  padding-left: 5px;
}

</style>