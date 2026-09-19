<!-- <template>
  <div class="container mx-auto p-6 max-w-2xl">
    <div class="mb-6 flex justify-between items-center">
      <h1 class="text-3xl font-bold text-gray-800">Tambah Menu</h1>
      <NuxtLink to="/admin/menu/menu_page" class="text-gray-600 hover:underline"
        >&larr; Batal</NuxtLink
      >
    </div>

    <div class="bg-white p-6 rounded-lg shadow">
      <form @submit.prevent="submitMenu">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Nama Menu</label>
          <input
            v-model="form.name"
            type="text"
            required
            class="w-full border rounded px-3 py-2"
            placeholder="Misal: Nasi Goreng Kecilung"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Kategori</label>
          <select
            v-model="form.category_id"
            required
            class="w-full border rounded px-3 py-2 bg-white"
          >
            <option value="" disabled>-- Pilih Kategori --</option>
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
            placeholder="35000"
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
          class="w-full bg-orange-500 text-white font-bold py-3 rounded hover:bg-orange-600 transition"
        >
          Simpan Menu
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});
const router = useRouter();
const baseURL = "https://kecilung-resto.vercel.app/api";

// Ambil daftar kategori untuk dropdown
const { data: catResponse } = await useFetch(`${baseURL}/categories`);
const categories = computed(() => catResponse.value?.data || []);

const form = ref({
  name: "",
  category_id: "",
  price: 0,
  description: "",
});

const submitMenu = async () => {
  try {
    // Pastikan price dan category_id terkirim sebagai angka (integer/float) sesuai struct Go
    const payload = {
      ...form.value,
      price: parseFloat(form.value.price),
      category_id: parseInt(form.value.category_id),
    };
    await $fetch(`${baseURL}/menus`, { method: "POST", body: payload });
    router.push("/admin/menu/menu_page");
  } catch (error) {
    alert("Gagal menyimpan menu: " + error.message);
  }
};
</script> -->

<template>
  <div class="container mx-auto p-6 max-w-2xl">
    <div class="mb-6 flex justify-between items-center">
      <h1 class="text-3xl font-bold text-gray-800">Tambah Menu</h1>
      <NuxtLink to="/admin/menu/menu_page" class="text-gray-600 hover:underline">&larr; Batal</NuxtLink>
    </div>

    <div class="bg-white p-6 rounded-lg shadow">
      <form @submit.prevent="submitMenu">
        <!-- Input Nama, Kategori, Harga dibiarkan sama seperti sebelumnya -->
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Nama Menu</label>
          <input v-model="form.name" type="text" required class="w-full border rounded px-3 py-2" placeholder="Misal: Nasi Goreng Kecilung" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Kategori</label>
          <select v-model="form.category_id" required class="w-full border rounded px-3 py-2 bg-white">
            <option value="" disabled>-- Pilih Kategori --</option>
            <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.name }}</option>
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Harga (Rp)</label>
          <input v-model="form.price" type="number" required min="0" class="w-full border rounded px-3 py-2" placeholder="35000" />
        </div>
        
        <!-- TAMBAHAN: Input File Gambar -->
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2">Gambar Menu (Opsional)</label>
          <input type="file" @change="handleFileChange" accept="image/*" class="w-full border rounded px-3 py-2 bg-gray-50" />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 font-bold mb-2">Deskripsi</label>
          <textarea v-model="form.description" rows="4" class="w-full border rounded px-3 py-2"></textarea>
        </div>
        <button type="submit" class="w-full bg-orange-500 text-white font-bold py-3 rounded hover:bg-orange-600 transition">Simpan Menu</button>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: "admin" });
const router = useRouter();
const baseURL = "https://kecilung-resto.vercel.app/api";

const { data: catResponse } = await useFetch(`${baseURL}/categories`);
const categories = computed(() => catResponse.value?.data || []);

const form = ref({ name: "", category_id: "", price: 0, description: "" });

// TAMBAHAN: State untuk menyimpan file gambar
const selectedFile = ref(null);
const handleFileChange = (e) => {
  if (e.target.files.length > 0) {
    selectedFile.value = e.target.files[0];
  }
};

const submitMenu = async () => {
  try {
    // PERUBAHAN: Gunakan FormData alih-alih JSON payload
    const formData = new FormData();
    formData.append("name", form.value.name);
    formData.append("category_id", form.value.category_id);
    formData.append("price", form.value.price);
    formData.append("description", form.value.description);
    
    // Lampirkan gambar jika ada
    if (selectedFile.value) {
      formData.append("image", selectedFile.value);
    }

    // Nuxt/ofetch otomatis mengatur Content-Type menjadi multipart/form-data jika menerima FormData
    await $fetch(`${baseURL}/menus`, { method: "POST", body: formData });
    router.push("/admin/menu/menu_page");
  } catch (error) {
    alert("Gagal menyimpan menu: " + error.message);
  }
};
</script>