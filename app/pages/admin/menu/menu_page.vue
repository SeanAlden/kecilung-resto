<!-- <template>
  <div class="container mx-auto p-6 max-w-6xl">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-gray-800">Manajemen Menu Makanan</h1>
      <NuxtLink
        to="/admin/menu/add_menu_page"
        class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition"
      >
        + Tambah Menu Baru
      </NuxtLink>
    </div>

    <div class="bg-white rounded-lg shadow overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              Nama Menu
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              Kategori
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              Harga
            </th>
            <th
              class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
            >
              Aksi
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-if="pending" class="text-center">
            <td colspan="4" class="py-4">Memuat data...</td>
          </tr>
          <tr
            v-else
            v-for="menu in menus"
            :key="menu.id"
            class="hover:bg-gray-50"
          >
            <td
              class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
            >
              {{ menu.name }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
              {{ menu.category?.name || "Tanpa Kategori" }}
            </td>
            <td
              class="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold"
            >
              Rp {{ menu.price.toLocaleString("id-ID") }}
            </td>
            <td
              class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium space-x-4"
            >
              <NuxtLink
                :to="`/admin/menu/detail/${menu.id}`"
                class="text-blue-600 hover:text-blue-900"
                >Detail</NuxtLink
              >
              <NuxtLink
                :to="`/admin/menu/edit/${menu.id}`"
                class="text-amber-600 hover:text-amber-900"
                >Edit</NuxtLink
              >
              <button
                @click="deleteMenu(menu.id)"
                class="text-red-600 hover:text-red-900"
              >
                Hapus
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});

const baseURL = "https://kecilung-resto.vercel.app/api";
const { data: response, pending, refresh } = await useFetch(`${baseURL}/menus`);
const menus = computed(() => response.value?.data || []);

const deleteMenu = async (id) => {
  if (!confirm("Yakin ingin menghapus menu ini?")) return;
  try {
    await $fetch(`${baseURL}/menus/${id}`, { method: "DELETE" });
    refresh();
  } catch (error) {
    alert("Gagal menghapus data");
  }
};
</script> -->

<!-- <template>
  <div class="container mx-auto p-6 max-w-6xl">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-gray-800">Manajemen Menu Makanan</h1>
      <NuxtLink to="/admin/menu/add_menu_page" class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition">
        + Tambah Menu Baru
      </NuxtLink>
    </div>

    <div class="bg-white rounded-lg shadow overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Gambar</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama Menu</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kategori</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Harga</th>
            <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Aksi</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-if="pending" class="text-center"><td colspan="5" class="py-4">Memuat data...</td></tr>
          <tr v-else v-for="menu in menus" :key="menu.id" class="hover:bg-gray-50 items-center">
            
            <td class="px-6 py-4 whitespace-nowrap">
              <img v-if="menu.image_url" :src="menu.image_url" :alt="menu.name" class="w-16 h-16 object-cover rounded-md shadow-sm border" />
              <div v-else class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center text-xs text-gray-400 border">No Image</div>
            </td>

            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ menu.name }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{{ menu.category?.name || "Tanpa Kategori" }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">Rp {{ menu.price.toLocaleString("id-ID") }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium space-x-4">
              <NuxtLink :to="`/admin/menu/detail/${menu.id}`" class="text-blue-600 hover:text-blue-900">Detail</NuxtLink>
              <NuxtLink :to="`/admin/menu/edit/${menu.id}`" class="text-amber-600 hover:text-amber-900">Edit</NuxtLink>
              <button @click="deleteMenu(menu.id)" class="text-red-600 hover:text-red-900">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: "admin" });

const baseURL = "https://kecilung-resto.vercel.app/api";
const { data: response, pending, refresh } = await useFetch(`${baseURL}/menus`);
const menus = computed(() => response.value?.data || []);

const deleteMenu = async (id) => {
  if (!confirm("Yakin ingin menghapus menu ini?")) return;
  try {
    await $fetch(`${baseURL}/menus/${id}`, { method: "DELETE" });
    refresh();
  } catch (error) {
    alert("Gagal menghapus data");
  }
};
</script> -->

<template>
  <div class="container mx-auto p-6 max-w-6xl">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-gray-800">Manajemen Menu Makanan</h1>
      <NuxtLink to="/admin/menu/add_menu_page" class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition">
        + Tambah Menu Baru
      </NuxtLink>
    </div>

    <div class="bg-white rounded-lg shadow overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Gambar</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nama Menu</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kategori</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Harga</th>
            <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Aksi</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          
          <!-- ANIMASI SKELETON LOADING -->
          <template v-if="pending">
            <tr v-for="n in 5" :key="'skel-' + n" class="animate-pulse slide-up-anim hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="w-16 h-16 bg-gray-200 rounded-md"></div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="h-4 bg-gray-200 rounded w-3/4"></div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="h-4 bg-gray-200 rounded w-1/2"></div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="h-4 bg-gray-200 rounded w-1/3"></div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-center flex justify-center space-x-4 mt-5">
                <div class="h-4 bg-gray-200 rounded w-10"></div>
                <div class="h-4 bg-gray-200 rounded w-10"></div>
                <div class="h-4 bg-gray-200 rounded w-10"></div>
              </td>
            </tr>
          </template>

          <!-- DATA ASLI -->
          <template v-else>
            <tr v-for="menu in menus" :key="menu.id" class="hover:bg-gray-50 items-center">
              <td class="px-6 py-4 whitespace-nowrap">
                <img v-if="menu.image_url" :src="menu.image_url" :alt="menu.name" class="w-16 h-16 object-cover rounded-md shadow-sm border" />
                <div v-else class="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center text-xs text-gray-400 border">No Image</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ menu.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{{ menu.category?.name || "Tanpa Kategori" }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">Rp {{ menu.price.toLocaleString("id-ID") }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium space-x-4">
                <NuxtLink :to="`/admin/menu/detail/${menu.id}`" class="text-blue-600 hover:text-blue-900">Detail</NuxtLink>
                <NuxtLink :to="`/admin/menu/edit/${menu.id}`" class="text-amber-600 hover:text-amber-900">Edit</NuxtLink>
                <button @click="deleteMenu(menu.id)" class="text-red-600 hover:text-red-900">Hapus</button>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: "admin" });

const baseURL = "https://kecilung-resto.vercel.app/api";

// PERUBAHAN: Gunakan useLazyFetch tanpa "await"
const { data: response, pending, refresh } = useLazyFetch(`${baseURL}/menus`);
const menus = computed(() => response.value?.data || []);

const deleteMenu = async (id) => {
  if (!confirm("Yakin ingin menghapus menu ini?")) return;
  try {
    await $fetch(`${baseURL}/menus/${id}`, { method: "DELETE" });
    refresh();
  } catch (error) {
    alert("Gagal menghapus data");
  }
};
</script>

<style scoped>
/* Animasi Float / Slide Up */
.slide-up-anim {
  animation: slideUp 0.4s ease-out forwards;
  opacity: 0;
}
@keyframes slideUp {
  0% { transform: translateY(15px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
</style>