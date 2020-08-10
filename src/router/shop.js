import Home from "@/views/home/home.vue";
import Search from "@/views/home/search.vue";
import Goods from "@/views/home/goods.vue";
export default [{
    path: "/",
    name: "/",
    component: Home,
  },
 
  {
    path: "/search",
    name: "/search",
    component: Search,
  },
  {
    path: "/goods",
    name: "/goods",
    component: Goods,
  },
]
