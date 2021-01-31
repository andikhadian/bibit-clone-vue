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
    <v-tour name="myTour" :steps="steps" :options="tourOptions">
      <!-- <template slot-scope="tour">
        <transition name="fade">
          <v-step
            v-if="tour.steps[tour.currentStep]"
            :key="tour.currentStep"
            :step="tour.steps[tour.currentStep]"
            :previous-step="tour.previousStep"
            :next-step="tour.nextStep"
            :stop="tour.stop"
            :skip="tour.skip"
            :is-first="tour.isFirst"
            :is-last="tour.isLast"
            :labels="tour.labels"
          >
            <template v-if="tour.currentStep === 0">
            <div slot="actions">
              <button @click="tour.nextStep" class="button-small">Lanjut</button>
            </div>
          </template>
          </v-step>
        </transition>
      </template> -->
    </v-tour>
  </div>
</template>

<script>
import Topbar from "@/components/Topbar.vue";
import Portofolio from "@/components/Portofolio.vue";
import ListPortofolio from "@/components/ListPortofolio.vue";
import Nav from "@/components/Nav.vue";
import Tutorial from "../components/Tutorial.vue";
import Recommendation from "../components/Recommendation.vue";
import Choose from "../components/Choose.vue";
import List from "../components/List.vue";
import List2 from "../components/List2.vue";
import Articel from "../components/Articel.vue";
import Quiz from "../components/Quiz.vue";
import Ojk from "../components/Ojk.vue";
export default {
  name: "Home",
  components: {
    "top-bar": Topbar,
    Portofolio,
    ListPortofolio,
    Nav,
    Tutorial,
    Recommendation,
    Choose,
    List,
    List2,
    Articel,
    Quiz,
    Ojk
  },
  data() {
    return {
      tourOptions: {
        highlight: true,
        useKeyboardNavigation: false,
        labels: {
          buttonSkip: "Lewati Tur",
          buttonPrevious: "Sebelumnya",
          buttonNext: "Lanjut",
          buttonStop: "Selesai Tur"
        }
      },
      steps: [
        {
          target: "#step-1",
          content: "Disini kamu bisa lihat total portofolio kamu nih",
          params: {
            // highlight: true,
            enableScrolling: false
          }
        },
        {
          target: "#step-2",
          content: "Disini kamu bisa lihat daftar portofolio yang kamu punya nih",
          params: {
            // highlight: true,
            enableScrolling: false
          }
        },
        {
          target: "#step-3",
          content: "Disini kamu bisa belajar investasi nih",
          params: {
            // highlight: true,
            enableScrolling: false
          }
        },
        {
          target: "#step-4",
          content: "Disini robo akan memberi saran yang sesuai dengan resiko kamu nih",
          params: {
            // highlight: true,
            enableScrolling: false
          }
        },
        {
          target: "#step-5",
          content: "Disini kamu bisa pilih daftar reksa dana disini nih ",
          params: {
            // highlight: true,
            enableScrolling: false
          }
        },
        {
          target: "#step-6",
          content: "Disini kamu bisa set nabung rutin dan kasih gift untuk teman atupun keluarga nih",
          params: {
            // highlight: true,
            enableScrolling: false
          }
        },
        {
          target: "#step-7",
          content: "Disini kamu bisa baca artikel-artikel menarik disini nih",
          params: {
            // highlight: true,
            enableScrolling: false
          }
        },
        {
          target: "#step-8",
          content: "Disini kamu bisa ikutin quis investasi nih",
          params: {
            // highlight: true,
            enableScrolling: false
          }
        },
        {
          target: "#step-9",
          content: "Disini kamu bisa ajak teman dan gabung di komunitas nih",
          params: {
            // highlight: true,
            enableScrolling: false
          }
        },
      ]
    };
  },
  mounted() {
    this.$tours["myTour"].start();
  }
};
</script>
