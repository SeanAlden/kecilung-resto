<!-- <template>
  <div class="flex items-center justify-center min-h-[60vh]">
    <h1 class="text-4xl font-bold text-gray-800">Articles Page</h1>
  </div>
</template> -->

<template>
  <div class="bg-stone-50 min-h-screen py-16">
    <div class="container mx-auto px-6 max-w-6xl">
      <!-- Pesan Sambutan -->
      <div class="text-center mb-16">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-4">Layanan Katering</h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">{{ greetingMsg }}</p>
      </div>

      <!-- List Katering -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="cat in caterings" :key="cat.id" class="bg-white rounded-2xl shadow-md overflow-hidden group">
          <div class="h-64 overflow-hidden">
            <!-- Tampilkan gambar PERTAMA saja -->
            <img v-if="cat.images && cat.images.length > 0" :src="cat.images[0].image_url" class="w-full h-full object-cover transition transform group-hover:scale-105" />
            <div v-else class="w-full h-full bg-gray-200 flex justify-center items-center">No Image</div>
          </div>
          <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ cat.name }}</h2>
            <NuxtLink :to="`/articles/detail/${cat.id}`" class="inline-block mt-4 text-orange-600 font-semibold hover:underline">Lihat Detail & Booking &rarr;</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const baseURL = "https://kecilung-resto.vercel.app/api";

const { data: greetData } = useLazyFetch(`${baseURL}/catering/greeting`);
const greetingMsg = computed(() => greetData.value?.data?.message || "Memuat pesan...");

const { data: catData } = useLazyFetch(`${baseURL}/catering/packages`);
const caterings = computed(() => catData.value?.data || []);
</script>