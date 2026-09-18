<template>
  <div class="container mx-auto p-6 max-w-5xl">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-gray-800">Manajemen Kategori</h1>
      <button
        @click="openModal('add')"
        class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition"
      >
        + Tambah Kategori
      </button>
    </div>

    <!-- Tabel Kategori -->
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ID
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Kode
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Nama
            </th>
            <th
              class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
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
            v-for="cat in categories"
            :key="cat.id"
            class="hover:bg-gray-50"
          >
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ cat.id }}
            </td>
            <td
              class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
            >
              {{ cat.code }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
              {{ cat.name }}
            </td>
            <td
              class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium space-x-3"
            >
              <NuxtLink
                :to="`/admin/category/detail/${cat.id}`"
                class="text-blue-600 hover:text-blue-900"
                >Detail</NuxtLink
              >
              <button
                @click="openModal('edit', cat)"
                class="text-amber-600 hover:text-amber-900"
              >
                Edit
              </button>
              <button
                @click="deleteCategory(cat.id)"
                class="text-red-600 hover:text-red-900"
              >
                Hapus
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal Form Tambah/Edit -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 class="text-xl font-bold mb-4">
          {{ modalMode === "add" ? "Tambah Kategori" : "Edit Kategori" }}
        </h2>
        <form @submit.prevent="saveCategory">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Kode Kategori</label
            >
            <input
              v-model="form.code"
              type="text"
              required
              class="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-orange-300"
              placeholder="Misal: MC"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Nama Kategori</label
            >
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-orange-300"
              placeholder="Misal: Main Course"
            />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Deskripsi</label
            >
            <textarea
              v-model="form.description"
              rows="3"
              class="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-orange-300"
            ></textarea>
          </div>
          <div class="flex justify-end space-x-3">
            <button
              type="button"
              @click="closeModal"
              class="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
            >
              Batal
            </button>
            <button
              type="submit"
              class="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});

const baseURL = "https://kecilung-resto.vercel.app/api";
const {
  data: response,
  pending,
  refresh,
} = await useFetch(`${baseURL}/categories`);
const categories = computed(() => response.value?.data || []);

const isModalOpen = ref(false);
const modalMode = ref("add");
const form = ref({ id: null, code: "", name: "", description: "" });

const openModal = (mode, data = null) => {
  modalMode.value = mode;
  if (mode === "edit" && data) {
    form.value = { ...data };
  } else {
    form.value = { id: null, code: "", name: "", description: "" };
  }
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const saveCategory = async () => {
  try {
    if (modalMode.value === "add") {
      await $fetch(`${baseURL}/categories`, {
        method: "POST",
        body: form.value,
      });
    } else {
      await $fetch(`${baseURL}/categories/${form.value.id}`, {
        method: "PUT",
        body: form.value,
      });
    }
    closeModal();
    refresh(); // Memuat ulang data tabel
  } catch (error) {
    alert("Gagal menyimpan data: " + error.message);
  }
};

const deleteCategory = async (id) => {
  if (!confirm("Yakin ingin menghapus kategori ini?")) return;
  try {
    await $fetch(`${baseURL}/categories/${id}`, { method: "DELETE" });
    refresh();
  } catch (error) {
    alert("Gagal menghapus data");
  }
};
</script>
