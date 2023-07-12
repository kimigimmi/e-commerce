<template>
    <div class="container">
        <h2>My Chart ({{ numberOfItems }} Products)</h2>


        <div class="product-properties">
            <ul>
                <li v-for="item in items" :key="item">
                    <div class="chx-div">
                        <input type="checkbox" v-model="item.checked" @click="toggleCheckbox(item)">
                        <img :src="item.img">
                    </div>
                    <div class="description-div">
                        <p>{{ item.description }}</p>
                        <p v-if="size"> Size: {{ item.size }}</p> <!--HATA!!!!!!!!!!!!!!!!!!!!!-->
                    </div>
                    <div class="free-cargo" v-if="(item.price * item.count) >= 300">
                        <!-- if sum is greater than 300 liras show this div -->
                        Free Cargo
                    </div>
                    <div class="free-cargo white" v-else></div>
                    <div class="numberOfProducts">
                        <button @click="decreasingNumber(item)">-</button>
                        <div>{{ item.count }}</div>
                        <button @click="increasingNumber(item)">+</button>
                    </div>
                    <div class="price">{{ stringToFloat(item.price, item.count) }} <span>TL</span></div>
                    <div @click="deleteProduct(item)" class="delete-btn">Delete</div>
                </li>
            </ul>
        </div>

        <div class="order-summary">
            <div class="order-summary-box">
                <h1>Order Summary</h1>
                <ul class="summary-box-prices">
                    <li>
                        <span>Total Price:</span>
                        <strong title="buraya toplam fiyat">{{ totalPrice }} TL</strong>
                    </li>
                    <li>
                        <span>Total Cargo Price:</span>
                        <strong title="buraya kargo fiyat">{{ priceOfFreeCargos }} TL</strong>
                    </li>
                </ul>
                <hr>
                <div class="total-price-included-cargo">
                   Total: <strong> {{ (parseFloat(totalPrice) + parseFloat(priceOfFreeCargos)).toFixed(2) }} TL </strong>
                </div>
            </div>
            <button class="addToCart-btn">Confirm Chart</button>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            items: [],
            size: ''
        }
    },
    beforeMount() {       // beforeMount, mounted, created.... all work
        this.items = this.getItemsFromLocalStorage();
        this.size = this.sizes();
    },
    methods: {
        toggleCheckbox(item) {
            const foundItem = this.items.find(it => it === item);
            const foundItemIndex = this.items.indexOf(foundItem);
            foundItem.checked = !foundItem.checked;
            this.items.splice(foundItemIndex, 1, foundItem);
            localStorage.setItem('holdingProducts', JSON.stringify(this.items));
        },
        getItemsFromLocalStorage() {
            const itemsFromLocalStorage = JSON.parse(localStorage.getItem('holdingProducts'));
            return itemsFromLocalStorage ? itemsFromLocalStorage : [];
        },
        sizes() {
            const sizeFromLocalStorage = localStorage.getItem('sizeToShoppingChart');
            return sizeFromLocalStorage ? sizeFromLocalStorage : '';
        },
        increasingNumber(item) {
            const foundItem = this.items.find(it => it === item);
            const foundItemIndex = this.items.indexOf(foundItem);
            foundItem.count++;
            this.items.splice(foundItemIndex, 1, foundItem);
            localStorage.setItem('holdingProducts', JSON.stringify(this.items));
        },
        decreasingNumber(item) {
            const foundItem = this.items.find(it => it === item);
            const foundItemIndex = this.items.indexOf(foundItem);
            if (foundItem.count === 0) {
                return;
            }
            foundItem.count--;
            this.items.splice(foundItemIndex, 1, foundItem);
            localStorage.setItem('holdingProducts', JSON.stringify(this.items));
        },
        stringToFloat(price, count) {
            return (parseFloat(price) * count).toFixed(2);
        },
        deleteProduct(item) {
            const foundItemIndex = this.items.findIndex(it => it.id === item.id);
            this.items.splice(foundItemIndex, 1);
            localStorage.setItem('holdingProducts', JSON.stringify(this.items));
        }
    },
    computed: {
        numberOfItems() {
            let sum = 0;
            for (const item of this.items) {
                if(item.checked){
                    sum += item.count;
                }
                
            }
            return sum;
        },
        totalPrice() {
            let sum = 0;
            for (const item of this.items) {
                if(item.checked){
                sum += item.count * parseFloat(item.price);
                }
            }
            return sum.toFixed(2);
        },
        priceOfFreeCargos() {
            let count = 0;  
            for (const item of this.items) {
                 if (item.count * parseFloat(item.price) < 300  &&  item.checked  &&  item.count > 0){
                    count += 1;   
                 }
            }
            return count * 32.5;           // cargo price 32.5 TL per one
        },
    }

};
</script>
  
<style scoped>
.container {
    margin: 100px 0 0 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

.product-properties {
    margin-top: 30px;
    margin-left: -35px;
}

.product-properties ul {
    display: flex;
    flex-direction: column;
}

.product-properties li {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    border: 1px solid #e2e2e2;
    border-radius: 8px;
    padding: 20px;
    /* padding-right: 150px; */
    cursor: auto;
}

.chx-div {
    display: flex;
    align-items: center;
    margin-right: 20px;
}

.chx-div input {
    margin-right: 15px;
    width: 30px;
    height: 18px;
}

.description-div {
    width: 50%;
}

h2 {
    font-size: 30px;
}

img {
    height: 100px;
}

.free-cargo {
    height: 30px;
    width: 50%;
    background: rgb(208, 224, 208);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-left: 30px;
}

.white {
    background-color: white;
}

.numberOfProducts {
    display: flex;
    margin: 0 150px 0 50px;
    border: 1px solid #e6e6e6;
    background-color: #f8f8f8;
    height: 34px;
    align-items: center;
}

.numberOfProducts button {
    border: 0.5px solid #e0e0e0;
    background-color: #f8f8f8;
    cursor: pointer;
    color: #d21313;
    height: 34px;
}

.numberOfProducts div {
    margin: 0 10px;
}

.price {
    display: flex;
    color: #d21313;
}

.price span {
    margin-left: 5px;
}

.delete-btn {
    margin: 0 10px 0 50px;
    font-size: 14px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    background-color: #fafafa;
    padding: 5px;
    cursor: pointer;
}

.order-summary-box {
    width: 100%;
    padding: 15px;
    border-radius: 6px;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.05);
    border: solid 1px #e6e6e6;
    box-sizing: border-box;
    margin-bottom: 20px;
    background-color: #ffffff;
    line-height: 24px;
}

.order-summary-box h1 {
    font-size: 22px;
    line-height: 28px;
    color: #333;
    margin-bottom: 16px;
    text-align: center;
}

.summary-box-prices {
    list-style: none;
    color: #333;
    font-size: 14px;
    display: flex;
    flex-direction: column;
}

.summary-box-prices li strong {}

.total-price-included-cargo {
    display: flex;
    justify-content: center;
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
  margin-bottom: 10rem;
}

.addToCart-btn:hover,
.addToCart-btn:active {
  background: #f09449;
}

</style>
  
