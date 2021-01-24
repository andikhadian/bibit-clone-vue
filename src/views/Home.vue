<template>
  <div class="home">
    <div class="">
      <top-bar class="hidden lg:flex" />
      <top-bar class="flex lg:hidden" />
      <div class="content pb-24 overflow-y-auto">
        <portofolio />
        <list-portofolio />
        <tutorial />
        <recommendation />
        <choose />
        <list />
        <articel />
        <quiz />
        <list-2 />
        <ojk />
      </div>
    </div>
    <Nav />
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue';
import Portofolio from '@/components/Portofolio.vue';
import ListPortofolio from '@/components/ListPortofolio.vue';
import Nav from '@/components/Nav.vue';
import Tutorial from '../components/Tutorial.vue';
import Recommendation from '../components/Recommendation.vue';
import Choose from '../components/Choose.vue';
import List from '../components/List.vue';
import List2 from '../components/List2.vue';
import Articel from '../components/Articel.vue';
import Quiz from '../components/Quiz.vue';
import Ojk from '../components/Ojk.vue';
export default {
  name: "Home",
  components: {
    'top-bar': Topbar,
    Portofolio,
    'list-portofolio': ListPortofolio,
    Nav,
    Tutorial,
    Recommendation,
    Choose,
    List,
    List2,
    Articel,
    Quiz,
    Ojk,
  },
};
</script>
