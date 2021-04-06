import home from "@/views/home.vue";
const routing = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
  {
    path: "/essay",
    name: "Essay",
    component: () => import("@/views/essay.vue"),
  },
];

export default routing;
