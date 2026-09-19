<template>
  <div class="bg-stone-50 min-h-screen pb-16">
    
    <!-- Banner Kategori -->
    <div class="bg-gray-900 text-white py-16 text-center">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">
        {{ currentCategoryName }}
      </h1>
      <p class="text-gray-400 max-w-2xl mx-auto px-4">
        Nikmati pilihan hidangan terbaik dari kategori {{ currentCategoryName }} yang disiapkan khusus untuk memanjakan lidah Anda.
      </p>
    </div>

    <!-- Grid Menu Makanan -->
    <div class="container mx-auto px-6 mt-12">
      <div v-if="pending" class="flex justify-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>

      <div v-else-if="menus.length === 0" class="text-center py-20 text-gray-500">
        <p class="text-2xl mb-2">🍽️</p>
        <p>Belum ada hidangan pada kategori ini.</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <!-- Card Menu -->
        <div 
          v-for="menu in menus" 
          :key="menu.id" 
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
        >
          <div class="relative h-56 overflow-hidden">
            <img 
              v-if="menu.image_url" 
              :src="menu.image_url" 
              :alt="menu.name" 
              class="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110" 
            />
            <div v-else class="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
              [No Image]
            </div>
            <!-- Label Harga Mengambang -->
            <div class="absolute top-4 right-4 bg-orange-500 text-white font-bold py-1 px-3 rounded-full shadow-lg">
              Rp {{ menu.price.toLocaleString("id-ID") }}
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
              {{ menu.name }}
            </h3>
            <p class="text-gray-600 text-sm line-clamp-2 leading-relaxed">
              {{ menu.description || "Hidangan spesial dari Kecilung Kitchen & Resto." }}
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const route = useRoute();
const categoryId = route.params.id;
const baseURL = "https://kecilung-resto.vercel.app/api";

// 1. Fetch Menu berdasarkan ID Kategori
const { data: menuResponse, pending } = useLazyFetch(`${baseURL}/menus/category/${categoryId}`);
const menus = computed(() => menuResponse.value?.data || []);

// 2. Fetch data nama kategori secara paralel untuk judul banner
const { data: categoryResponse } = useLazyFetch(`${baseURL}/categories`);
const currentCategoryName = computed(() => {
  const cats = categoryResponse.value?.data || [];
  const found = cats.find(c => c.id == categoryId);
  return found ? found.name : 'Daftar Menu';
});
</script>