import Vue from "vue";
import Vuex from "vuex";

import VuexPersistence from "vuex-persist"; //导入持久化的工具

Vue.use(Vuex);

//实例化插件
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});
//定义一个对象
const store = new Vuex.Store({
  //数据池
  state: {
    loading: false,
    cartList: [], //购物车列表
    // nums: 0, //总数量

    orderList: [], //存储订单商品列表
    orderInfo: [],
  },
  //操作state的内容
  mutations: {
    //设置loading
    setLoading(state, payload) {
      state.loading = payload;
    },
    //添加购物车的操作
    addCart(state, payload) {
      state.cartList = payload;
    },
    countCarts(state) {
      let tmp = 0;
      //遍历购物车的数量
      state.cartList.forEach(item => {
        tmp += item.nums;
      })
      //计算总数量
      state.nums = tmp;
    },
    setOrderList(state) {
      state.orderList = state.cartList.filter(item => {
        return item.checked == true;
      });
    },
    setOrder(state, payload) {
      state.orderInfo = payload;
    },

    clear(state) {
      // state.cartList = [];
      // state.nums = 0;
      // state.orderInfo = [];
    },
    del(state,index){
      state.cartList.splice(index,1)
    }
  },
  getters: {
    totalNums(state) {
      let num = 0;
      // state.orderList.forEach(item=>{
      //     amount += item.price*item.nums;
      // });

      state.cartList.forEach(item => {
        num+= item.nums;
      })
      return num;
    }
  },
  actions: {

  },
  modules: {

  },
  plugins: [vuexLocal.plugin]
});

//导出对象
export default store;
