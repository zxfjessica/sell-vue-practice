<template>
  <div class="app">
    <v-header :seller="seller"></v-header>
    <div class="tab onepxborder">
      <div class="tab-item">
        <router-link to="/goodspage" >商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratingspage">评价</router-link>
    
      </div>
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>  
    <img src="./assets/logo.png" alt="">
  </div>
</template>

<script>
import Header from './components/Header/Header'
export default {
  name: 'app',
  data: function () {
    return {
      seller: {}
    }
  },
  created: function () {
    this.$http.get('api/seller').then(
      response => {
        response = response.body
        if (response.errno === 0) {
          this.seller = response.data
        }
      },
      response => {}
      )
  },
  components: {
    'v-header': Header
  }
}
</script>

<style>
.app{width:100%;}
.tab{height:40px;display: flex;flex-direction: row;background:#fff;position:relative;}
.tab:after{display:block;content:'';position:absolute;left:0;bottom:0;border:1px solid #f4f4f4;width:100%;}
.tab-item{width:50%;}
.tab-item a{display: block;text-align:center;line-height: 30px;color:#666666;width:30%;position:relative;left:50%;transform:translateX(-50%);}
.tab-item a.acitve{color:#3190e8;border-bottom:2px solid #3190e8;}
</style>
