<template>
  <div class="">
    <h5 class="px-5 lg:px-0 text-sm text-black-lighter font-bold">
      Tutorial Berinvestasi
    </h5>
    <div class="coba mt-4">
      <img
        src="https://app.bibit.id/static/media/home-modal-banner-2.cd4675ce.svg"
        alt=""
        class="banner mr-6"
      />
      <img
        src="https://app.bibit.id/static/media/tutor-1.b275c77c.svg"
        alt=""
        class="border border-gray-lighter bg-white rounded-md mr-6"
      />
      <img
        src="https://app.bibit.id/static/media/tutor-2.e4c353f2.svg"
        alt=""
        class="border border-gray-lighter bg-white rounded-md mr-6"
      />

      <img
        src="https://app.bibit.id/static/media/tutor-3.01daadcb.svg"
        alt=""
        class="border border-gray-lighter bg-white rounded-md mr-6"
      />

      <img
        src="https://app.bibit.id/static/media/tutor-4.09661e53.svg"
        alt=""
        class="border border-gray-lighter bg-white rounded-md mr-6"
      />
    </div>
  </div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.min.css'
export default {
    components: {
    //   Swiper,
    //   SwiperSlide,
    },
    data() {
        return {
            // swiperOption: {
            //     slidesPerView: 5,
            //     spaceBetween: 0,
            //     freeMode: true,
            // }
        }
    },
    methods: {
      onSwiper(swiper) {
        console.log(swiper)
      },
      onSlideChange() {
        console.log('slide change')
      },
    },
}
</script>

<style>
</style>