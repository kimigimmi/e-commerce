<template>
    <header>
      <div class="topOfHeader">
        ÜST KISIM
      </div>
      <nav>
        <ul>
          <li @mouseover="toggleModaList">Moda</li>
          <li @mouseover="toggleElektronikList">Elektronik</li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    emits: ['modalistVisible', 'elektroniklistVisible'],
    data() {
      return {
        isModaListVisible: false,
        isElektronikListVisible: false
      };
    },
    methods: {
      toggleModaList() {
        this.isModaListVisible = !this.isModaListVisible;
        if (this.isElektronikListVisible) {
          this.isElektronikListVisible = false;
        }
        this.$emit('modalistVisible', this.isModaListVisible, this.isElektronikListVisible);
      },
      toggleElektronikList() {
        this.isElektronikListVisible = !this.isElektronikListVisible;
        if (this.isModaListVisible) {
          this.isModaListVisible = false;
        }
        this.$emit('elektroniklistVisible', this.isModaListVisible, this.isElektronikListVisible);
      }
    }
  };
  </script>
  
  <style>
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
  </style>
  