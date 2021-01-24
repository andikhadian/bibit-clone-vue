<template>
  <div class="carousel flex items-center my-4 coba">
    <div v-for="item in 2" :key="item" class="">
      <div class="card border border-gray-lighter rounded-md bg-white mr-6">
        <div class="p-4">
          <div class="flex justify-between items-center">
            <div class="">
              <div class="flex">
                <h5 class="text-sm text-black font-bold">Dana Pensiun</h5>
                <img
                  src="https://app.bibit.id/static/media/RoboLogo.f3432858.svg"
                  alt=""
                  class="w-5 ml-2"
                />
              </div>
              <h5 class="text-header">4 Reksa Dana</h5>
            </div>
            <img
              src="https://app.bibit.id/assets/images/portfolio/green/2.svg"
              alt="img"
              class="w-10"
            />
          </div>
          <div class="flex justify-between items-center mt-6">
            <div>
              <h5 class="text-header">Investasi</h5>
              <h5 class="text-black text-sm mt-2">Rp 123,321</h5>
            </div>
            <div>
              <h5 class="text-header">Keuntungan</h5>
              <h5 class="text-primary mt-1">Rp 12,321</h5>
            </div>
          </div>
        </div>
        <div
          class="border-t border-gray-lighter text-center flex justify-center py-2"
        >
          <div class="text-primary">Top Up</div>
        </div>
      </div>
    </div>
    <div
      class="ml-6 cursor-pointer flex flex-col justify-center items-center text-center w-14 pr-10 lg:pr-0"
    >
      <div
        class="border border-gray-lighter flex justify-center items-center w-12 h-12 bg-white rounded-full"
      >
        <svg
          class="w-8 h-8 text-green"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
      </div>
      <h5 class="text-primary mt-2">Tambah Portofolio</h5>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>