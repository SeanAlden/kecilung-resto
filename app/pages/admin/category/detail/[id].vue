<template>
  <div class="container mx-auto p-6 max-w-4xl">
    <div class="mb-6 flex justify-between items-center">
      <h1 class="text-3xl font-bold text-gray-800">Detail Kategori</h1>
      <NuxtLink
        to="/admin/category/category_page"
        class="text-orange-600 hover:underline"
        >&larr; Kembali ke Daftar</NuxtLink
      >
    </div>

    <div v-if="pendingCat || pendingMenu" class="text-center py-10">
      Memuat data...
    </div>

    <div v-else-if="category" class="bg-white rounded-lg shadow p-6 mb-8">
      <div class="grid grid-cols-2 gap-4 border-b pb-4 mb-4">
        <div>
          <span class="text-gray-500 block text-sm">ID</span
          ><span class="font-semibold">{{ category.id }}</span>
        </div>
        <div>
          <span class="text-gray-500 block text-sm">Kode</span
          ><span class="font-semibold">{{ category.code }}</span>
        </div>
        <div class="col-span-2">
          <span class="text-gray-500 block text-sm">Nama Kategori</span
          ><span class="font-semibold text-lg">{{ category.name }}</span>
        </div>
        <div class="col-span-2">
          <span class="text-gray-500 block text-sm">Deskripsi</span>
          <p class="text-gray-800">{{ category.description }}</p>
        </div>
      </div>

      <h3 class="text-xl font-bold mt-6 mb-4">Daftar Menu di Kategori Ini</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li v-for="menu in relatedMenus" :key="menu.id" class="text-gray-700">
          <span class="font-medium">{{ menu.name }}</span> — Rp
          {{ menu.price.toLocaleString("id-ID") }}
        </li>
        <li
          v-if="relatedMenus.length === 0"
          class="text-gray-500 italic list-none"
        >
          Belum ada menu di kategori ini.
        </li>
      </ul>
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

// Ambil semua kategori untuk mencari detail berdasarkan ID (karena belum ada endpoint get by id khusus di Go)
const { data: resCat, pending: pendingCat } = await useFetch(
  `${baseURL}/categories`,
);
const category = computed(() => {
  const cats = resCat.value?.data || [];
  return cats.find((c) => c.id == id);
});

// Ambil semua menu, lalu filter berdasarkan category_id
const { data: resMenu, pending: pendingMenu } = await useFetch(
  `${baseURL}/menus`,
);
const relatedMenus = computed(() => {
  const menus = resMenu.value?.data || [];
  return menus.filter((m) => m.category_id == id);
});
</script>
