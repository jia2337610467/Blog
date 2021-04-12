import home from "@/views/home.vue";
const routing = [
  {
    path: "/",
    name: "Home",
    component: home,
    meta: {},
  },
  {
    path: "/essay",
    name: "Essay",
    component: () => import("@/views/essay.vue"),
    meta: {},
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/about.vue"),
    meta: {},
  },
];

export default routing;
