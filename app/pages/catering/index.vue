<template>
  <div class="bg-stone-50 min-h-screen py-16">
    <div class="container mx-auto px-6 max-w-6xl">
      
      <!-- Bagian Copywriting / Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Layanan <span class="text-orange-600">Katering</span>
        </h1>
        <p class="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
          Kecilung Kitchen & Resto, tidak hanya menjadi tempat bersantap, tetapi juga menyediakan berbagai jenis katering mulai dari katering wedding, katering aqiqah, katering ultah, tumpeng mini, snack box, nasi kotak dan prasmanan.
        </p>
      </div>

      <!-- Indikator Loading -->
      <div v-if="pending" class="flex justify-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
      
      <!-- Pesan Jika Data Kosong -->
      <div v-else-if="caterings.length === 0" class="text-center py-20 text-gray-500">
        <p class="text-xl">Belum ada paket katering yang tersedia saat ini.</p>
      </div>

      <!-- Grid Daftar Katering -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Kartu yang bisa diklik -->
        <NuxtLink 
          v-for="cat in caterings" 
          :key="cat.id" 
          :to="`/catering/${cat.id}`"
          class="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
        >
          <!-- Thumbnail Gambar -->
          <div class="relative h-64 overflow-hidden">
            <!-- Tampilkan gambar pertama dari array images -->
            <img 
              v-if="cat.images && cat.images.length > 0" 
              :src="cat.images[0].image_url" 
              :alt="cat.name" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div v-else class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
              [Tidak Ada Gambar]
            </div>
          </div>
          
          <!-- Informasi Katering -->
          <div class="p-6 flex-1 flex flex-col">
            <h2 class="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
              {{ cat.name }}
            </h2>
            <!-- line-clamp-3 membatasi deskripsi hanya 3 baris agar tinggi kartu tetap rapi -->
            <p class="text-gray-600 text-sm line-clamp-3 leading-relaxed mb-4 flex-1">
              {{ cat.description }}
            </p>
            
            <div class="mt-auto text-orange-600 font-bold flex items-center">
              Lihat Detail & Booking 
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </NuxtLink>

      </div>
    </div>
  </div>
</template>

<script setup>
const baseURL = "https://kecilung-resto.vercel.app/api";

// Mengambil data paket katering dari backend
const { data: res, pending } = useFetch(`${baseURL}/catering/packages`, {
    lazy: import.meta.client
});
const caterings = computed(() => res.value?.data || []);
</script>