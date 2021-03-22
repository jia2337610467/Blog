import home from "./../views/home.vue";
const routing = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
  {
    path: "/essay",
    name: "essay",
    component: () => import("views/essay"),
  },
];

export default routing;
