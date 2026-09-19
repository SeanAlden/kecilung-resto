<!-- <template>
  <div class="container mx-auto p-6 max-w-3xl">
    <div class="mb-6 flex justify-between items-center">
      <h1 class="text-3xl font-bold text-gray-800">Informasi Menu</h1>
      <NuxtLink
        to="/admin/menu/menu_page"
        class="text-orange-600 hover:underline"
        >&larr; Kembali ke Daftar</NuxtLink
      >
    </div>

    <div v-if="pending" class="text-center py-10">Memuat data...</div>

    <div v-else-if="menu" class="bg-white rounded-lg shadow overflow-hidden">
      <div
        class="bg-gray-200 h-48 w-full flex items-center justify-center text-gray-400"
      >
        [Area Gambar Menu]
      </div>
      <div class="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <span class="text-gray-500 block text-sm">Nama Menu</span
          ><span class="font-bold text-2xl text-gray-800">{{ menu.name }}</span>
        </div>
        <div>
          <span class="text-gray-500 block text-sm">Harga</span
          ><span class="font-bold text-2xl text-green-600"
            >Rp {{ menu.price.toLocaleString("id-ID") }}</span
          >
        </div>
        <div>
          <span class="text-gray-500 block text-sm">Kategori</span>
          <span
            class="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold mt-1"
          >
            {{ menu.category?.name || "Tanpa Kategori" }}
          </span>
        </div>
        <div class="md:col-span-2">
          <span class="text-gray-500 block text-sm">Deskripsi</span>
          <p class="text-gray-700 leading-relaxed">
            {{ menu.description || "Tidak ada deskripsi." }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});

const route = useRoute();
const id = route.params.id;
const baseURL = "https://kecilung-resto.vercel.app/api";

const { data: response, pending } = await useFetch(`${baseURL}/menus`);
const menu = computed(() => {
  const menus = response.value?.data || [];
  return menus.find((m) => m.id == id);
});
</script> -->

<template>
  <div class="container mx-auto p-6 max-w-3xl">
    <div class="mb-6 flex justify-between items-center">
      <h1 class="text-3xl font-bold text-gray-800">Informasi Menu</h1>
      <NuxtLink to="/admin/menu/menu_page" class="text-orange-600 hover:underline">&larr; Kembali ke Daftar</NuxtLink>
    </div>

    <div v-if="pending" class="text-center py-10">Memuat data...</div>

    <div v-else-if="menu" class="bg-white rounded-lg shadow overflow-hidden">
      
      <!-- Area Render Gambar -->
      <div v-if="menu.image_url" class="w-full h-64 sm:h-80 bg-gray-100">
        <img :src="menu.image_url" :alt="menu.name" class="w-full h-full object-cover" />
      </div>
      <div v-else class="bg-gray-200 h-48 w-full flex items-center justify-center text-gray-400">
        [Tidak Ada Gambar Menu]
      </div>

      <div class="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <span class="text-gray-500 block text-sm">Nama Menu</span>
          <span class="font-bold text-2xl text-gray-800">{{ menu.name }}</span>
        </div>
        <div>
          <span class="text-gray-500 block text-sm">Harga</span>
          <span class="font-bold text-2xl text-green-600">Rp {{ menu.price.toLocaleString("id-ID") }}</span>
        </div>
        <div>
          <span class="text-gray-500 block text-sm">Kategori</span>
          <span class="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold mt-1">
            {{ menu.category?.name || "Tanpa Kategori" }}
          </span>
        </div>
        <div class="md:col-span-2">
          <span class="text-gray-500 block text-sm">Deskripsi</span>
          <p class="text-gray-700 leading-relaxed">
            {{ menu.description || "Tidak ada deskripsi." }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: "admin" });

const route = useRoute();
const id = route.params.id;
const baseURL = "https://kecilung-resto.vercel.app/api";

const { data: response, pending } = await useFetch(`${baseURL}/menus`);
const menu = computed(() => {
  const menus = response.value?.data || [];
  return menus.find((m) => m.id == id);
});
</script>

