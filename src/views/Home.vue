<template>
  <div class="home">
    <top-bar class="hidden lg:flex" />
    <top-bar class="flex lg:hidden" />
    <portofolio />
    <list-portofolio />
    <Nav />
    <tutorial />
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue';
import Portofolio from '@/components/Portofolio.vue';
import ListPortofolio from '@/components/ListPortofolio.vue';
import Nav from '@/components/Nav.vue';
import Tutorial from '../components/Tutorial.vue';
export default {
  name: "Home",
  components: {
    'top-bar': Topbar,
    Portofolio,
    'list-portofolio': ListPortofolio,
    Nav,
    Tutorial,
  }
};
</script>
