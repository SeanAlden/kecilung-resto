<!-- <template>
  <div class="container mx-auto p-6 max-w-2xl">
    <div class="mb-6 flex justify-between items-center">
      <h1 class="text-3xl font-bold text-gray-800">Edit Menu</h1>
      <NuxtLink to="/admin/menu/menu_page" class="text-gray-600 hover:underline"
        >&larr; Batal</NuxtLink
      >
    </div>

    <div v-if="pending" class="text-center py-10">Memuat data...</div>

    <div v-else class="bg-white p-6 rounded-lg shadow">
      <form @submit.prevent="updateMenu">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Nama Menu</label>
          <input
            v-model="form.name"
            type="text"
            required
            class="w-full border rounded px-3 py-2"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Kategori</label>
          <select
            v-model="form.category_id"
            required
            class="w-full border rounded px-3 py-2 bg-white"
          >
            <option v-for="cat in categories" :key="cat.id" :value="cat.id">
              {{ cat.name }}
            </option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Harga (Rp)</label>
          <input
            v-model="form.price"
            type="number"
            required
            min="0"
            class="w-full border rounded px-3 py-2"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 font-bold mb-2">Deskripsi</label>
          <textarea
            v-model="form.description"
            rows="4"
            class="w-full border rounded px-3 py-2"
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-amber-500 text-white font-bold py-3 rounded hover:bg-amber-600 transition"
        >
          Perbarui Menu
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});

const route = useRoute();
const router = useRouter();
const id = route.params.id;
const baseURL = "https://kecilung-resto.vercel.app/api";

// Ambil daftar kategori
const { data: catResponse } = await useFetch(`${baseURL}/categories`);
const categories = computed(() => catResponse.value?.data || []);

// Ambil data menu saat ini (cari dari list)
const { data: menuResponse, pending } = await useFetch(`${baseURL}/menus`);
const form = ref({ name: "", category_id: "", price: 0, description: "" });

// Lifecycle hook Nuxt 3 untuk set form value
watchEffect(() => {
  if (menuResponse.value?.data) {
    const currentMenu = menuResponse.value.data.find((m) => m.id == id);
    if (currentMenu) {
      form.value = {
        name: currentMenu.name,
        category_id: currentMenu.category_id,
        price: currentMenu.price,
        description: currentMenu.description,
      };
    }
  }
});

const updateMenu = async () => {
  try {
    const payload = {
      ...form.value,
      price: parseFloat(form.value.price),
      category_id: parseInt(form.value.category_id),
    };
    await $fetch(`${baseURL}/menus/${id}`, { method: "PUT", body: payload });
    router.push("/admin/menu/menu_page");
  } catch (error) {
    alert("Gagal memperbarui menu: " + error.message);
  }
};
</script> -->

<template>
  <div class="container mx-auto p-6 max-w-2xl">
    <div class="mb-6 flex justify-between items-center">
      <h1 class="text-3xl font-bold text-gray-800">Edit Menu</h1>
      <NuxtLink to="/admin/menu/menu_page" class="text-gray-600 hover:underline">&larr; Batal</NuxtLink>
    </div>

    <div v-if="pending" class="text-center py-10">Memuat data...</div>

    <div v-else class="bg-white p-6 rounded-lg shadow">
      <form @submit.prevent="updateMenu">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Nama Menu</label>
          <input v-model="form.name" type="text" required class="w-full border rounded px-3 py-2" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Kategori</label>
          <select v-model="form.category_id" required class="w-full border rounded px-3 py-2 bg-white">
            <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.name }}</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Harga (Rp)</label>
          <input v-model="form.price" type="number" required min="0" class="w-full border rounded px-3 py-2" />
        </div>
        
        <!-- TAMBAHAN: Input File Gambar -->
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Ubah Gambar (Biarkan kosong jika tidak ingin mengubah)</label>
          <input type="file" @change="handleFileChange" accept="image/*" class="w-full border rounded px-3 py-2 bg-gray-50" />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 font-bold mb-2">Deskripsi</label>
          <textarea v-model="form.description" rows="4" class="w-full border rounded px-3 py-2"></textarea>
        </div>
        <button type="submit" class="w-full bg-amber-500 text-white font-bold py-3 rounded hover:bg-amber-600 transition">Perbarui Menu</button>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: "admin" });

const route = useRoute();
const router = useRouter();
const id = route.params.id;
const baseURL = "https://kecilung-resto.vercel.app/api";

const { data: catResponse } = await useFetch(`${baseURL}/categories`);
const categories = computed(() => catResponse.value?.data || []);

const { data: menuResponse, pending } = await useFetch(`${baseURL}/menus`);
const form = ref({ name: "", category_id: "", price: 0, description: "" });

// TAMBAHAN: File handler
const selectedFile = ref(null);
const handleFileChange = (e) => {
  if (e.target.files.length > 0) {
    selectedFile.value = e.target.files[0];
  }
};

watchEffect(() => {
  if (menuResponse.value?.data) {
    const currentMenu = menuResponse.value.data.find((m) => m.id == id);
    if (currentMenu) {
      form.value = {
        name: currentMenu.name,
        category_id: currentMenu.category_id,
        price: currentMenu.price,
        description: currentMenu.description,
      };
    }
  }
});

const updateMenu = async () => {
  try {
    // PERUBAHAN: Gunakan FormData
    const formData = new FormData();
    formData.append("name", form.value.name);
    formData.append("category_id", form.value.category_id);
    formData.append("price", form.value.price);
    formData.append("description", form.value.description);
    
    if (selectedFile.value) {
      formData.append("image", selectedFile.value);
    }

    await $fetch(`${baseURL}/menus/${id}`, { method: "PUT", body: formData });
    router.push("/admin/menu/menu_page");
  } catch (error) {
    alert("Gagal memperbarui menu: " + error.message);
  }
};
</script>