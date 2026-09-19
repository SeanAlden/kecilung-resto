<!-- <template>
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
</script> -->

<!-- <template>
  <div class="container mx-auto p-6 max-w-5xl">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-gray-800">Manajemen Kategori</h1>
      <button @click="openModal('add')" class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition">
        + Tambah Kategori
      </button>
    </div>

    <div class="bg-white rounded-lg shadow overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kode</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
            <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          
          <template v-if="pending">
            <tr v-for="n in 4" :key="'skel-cat-' + n" class="animate-pulse slide-up-anim hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap"><div class="h-4 bg-gray-200 rounded w-8"></div></td>
              <td class="px-6 py-4 whitespace-nowrap"><div class="h-4 bg-gray-200 rounded w-16"></div></td>
              <td class="px-6 py-4 whitespace-nowrap"><div class="h-4 bg-gray-200 rounded w-32"></div></td>
              <td class="px-6 py-4 whitespace-nowrap text-center space-x-3 flex justify-center">
                <div class="h-4 bg-gray-200 rounded w-12"></div>
                <div class="h-4 bg-gray-200 rounded w-12"></div>
                <div class="h-4 bg-gray-200 rounded w-12"></div>
              </td>
            </tr>
          </template>

          <template v-else>
            <tr v-for="cat in categories" :key="cat.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ cat.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ cat.code }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ cat.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium space-x-3">
                <NuxtLink :to="`/admin/category/detail/${cat.id}`" class="text-blue-600 hover:text-blue-900">Detail</NuxtLink>
                <button @click="openModal('edit', cat)" class="text-amber-600 hover:text-amber-900">Edit</button>
                <button @click="deleteCategory(cat.id)" class="text-red-600 hover:text-red-900">Hapus</button>
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
const { data: response, pending, refresh } = useLazyFetch(`${baseURL}/categories`);
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
      await $fetch(`${baseURL}/categories`, { method: "POST", body: form.value });
    } else {
      await $fetch(`${baseURL}/categories/${form.value.id}`, { method: "PUT", body: form.value });
    }
    closeModal();
    refresh();
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
</style> -->

<!-- <template>
  <div class="container mx-auto p-6 max-w-5xl">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-gray-800">Manajemen Kategori</h1>
      <button @click="openModal('add')" class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition">
        + Tambah Kategori
      </button>
    </div>

    <div class="bg-white rounded-lg shadow overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kode</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
            <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          
          <template v-if="pending">
            <tr v-for="n in 4" :key="'skel-cat-' + n" class="animate-pulse slide-up-anim hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap"><div class="h-4 bg-gray-200 rounded w-8"></div></td>
              <td class="px-6 py-4 whitespace-nowrap"><div class="h-4 bg-gray-200 rounded w-16"></div></td>
              <td class="px-6 py-4 whitespace-nowrap"><div class="h-4 bg-gray-200 rounded w-32"></div></td>
              <td class="px-6 py-4 whitespace-nowrap text-center space-x-3 flex justify-center">
                <div class="h-4 bg-gray-200 rounded w-12"></div>
                <div class="h-4 bg-gray-200 rounded w-12"></div>
                <div class="h-4 bg-gray-200 rounded w-12"></div>
              </td>
            </tr>
          </template>

          <template v-else>
            <tr v-for="cat in categories" :key="cat.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ cat.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ cat.code }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ cat.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium space-x-3">
                <NuxtLink :to="`/admin/category/detail/${cat.id}`" class="text-blue-600 hover:text-blue-900">Detail</NuxtLink>
                <button @click="openModal('edit', cat)" class="text-amber-600 hover:text-amber-900">Edit</button>
                <button @click="deleteCategory(cat.id)" class="text-red-600 hover:text-red-900">Hapus</button>
              </td>
            </tr>
          </template>

        </tbody>
      </table>
    </div>

    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-xl w-full max-w-md slide-up-anim">
        <h2 class="text-xl font-bold mb-4">
          {{ modalMode === "add" ? "Tambah Kategori" : "Edit Kategori" }}
        </h2>
        <form @submit.prevent="saveCategory">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Kode Kategori</label>
            <input v-model="form.code" type="text" required class="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-orange-300" placeholder="Misal: MC" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Nama Kategori</label>
            <input v-model="form.name" type="text" required class="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-orange-300" placeholder="Misal: Main Course" />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2">Deskripsi</label>
            <textarea v-model="form.description" rows="3" class="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-orange-300"></textarea>
          </div>
          <div class="flex justify-end space-x-3">
            <button type="button" @click="closeModal" class="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300">Batal</button>
            <button type="submit" class="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600">Simpan</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script setup>
import Swal from 'sweetalert2'; // Import SweetAlert2

definePageMeta({ layout: "admin" });

const baseURL = "https://kecilung-resto.vercel.app/api";

const { data: response, pending, refresh } = useLazyFetch(`${baseURL}/categories`);
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

// Modifikasi saveCategory dengan Swal
const saveCategory = async () => {
  try {
    if (modalMode.value === "add") {
      await $fetch(`${baseURL}/categories`, { method: "POST", body: form.value });
    } else {
      await $fetch(`${baseURL}/categories/${form.value.id}`, { method: "PUT", body: form.value });
    }
    
    closeModal();
    refresh();
    
    // Notifikasi Sukses
    Swal.fire({
      icon: 'success',
      title: 'Berhasil!',
      text: `Kategori berhasil ${modalMode.value === 'add' ? 'ditambahkan' : 'diperbarui'}.`,
      timer: 1500,
      showConfirmButton: false
    });

  } catch (error) {
    // Notifikasi Error
    Swal.fire({
      icon: 'error',
      title: 'Gagal!',
      text: 'Gagal menyimpan data: ' + error.message
    });
  }
};

// Modifikasi deleteCategory dengan Swal Konfirmasi
const deleteCategory = async (id) => {
  const result = await Swal.fire({
    title: 'Hapus Kategori?',
    text: "Data yang dihapus tidak dapat dikembalikan!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#ef4444', // red-500
    cancelButtonColor: '#6b7280',  // gray-500
    confirmButtonText: 'Ya, Hapus!',
    cancelButtonText: 'Batal'
  });

  if (result.isConfirmed) {
    try {
      await $fetch(`${baseURL}/categories/${id}`, { method: "DELETE" });
      refresh();
      
      Swal.fire({
        icon: 'success',
        title: 'Terhapus!',
        text: 'Kategori berhasil dihapus.',
        timer: 1500,
        showConfirmButton: false
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'Gagal menghapus data kategori.'
      });
    }
  }
};
</script>

<style scoped>
.slide-up-anim {
  animation: slideUp 0.4s ease-out forwards;
  opacity: 0;
}
@keyframes slideUp {
  0% { transform: translateY(15px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
</style> -->

<template>
  <div class="container mx-auto p-6 max-w-6xl">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-gray-800">Manajemen Kategori</h1>
      <button @click="openModal('add')" class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition">
        + Tambah Kategori
      </button>
    </div>

    <!-- Tabel Kategori -->
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gambar</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kode</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama</th>
            <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          
          <template v-if="pending">
            <tr v-for="n in 4" :key="'skel-cat-' + n" class="animate-pulse slide-up-anim hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap"><div class="h-12 bg-gray-200 rounded w-16"></div></td>
              <td class="px-6 py-4 whitespace-nowrap"><div class="h-4 bg-gray-200 rounded w-16"></div></td>
              <td class="px-6 py-4 whitespace-nowrap"><div class="h-4 bg-gray-200 rounded w-32"></div></td>
              <td class="px-6 py-4 whitespace-nowrap text-center space-x-3 flex justify-center">
                <div class="h-4 bg-gray-200 rounded w-12"></div>
                <div class="h-4 bg-gray-200 rounded w-12"></div>
              </td>
            </tr>
          </template>

          <template v-else>
            <tr v-for="cat in categories" :key="cat.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <img v-if="cat.image_url" :src="cat.image_url" class="w-16 h-12 object-cover rounded shadow-sm border" />
                <div v-else class="w-16 h-12 bg-gray-100 flex items-center justify-center text-xs text-gray-400 rounded border">No Img</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ cat.code }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{{ cat.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium space-x-3">
                <button @click="openModal('edit', cat)" class="text-amber-600 hover:text-amber-900">Edit</button>
                <button @click="deleteCategory(cat.id)" class="text-red-600 hover:text-red-900">Hapus</button>
              </td>
            </tr>
          </template>

        </tbody>
      </table>
    </div>

    <!-- MODAL FORM DENGAN INPUT GAMBAR -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-6 rounded-lg shadow-xl w-full max-w-md slide-up-anim">
        <h2 class="text-xl font-bold mb-4">
          {{ modalMode === "add" ? "Tambah Kategori" : "Edit Kategori" }}
        </h2>
        <form @submit.prevent="saveCategory">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Kode Kategori</label>
            <input v-model="form.code" type="text" required class="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-orange-300" placeholder="Misal: MC" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Nama Kategori</label>
            <input v-model="form.name" type="text" required class="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-orange-300" placeholder="Misal: Main Course" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Deskripsi</label>
            <textarea v-model="form.description" rows="2" class="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-orange-300"></textarea>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2">Gambar Kategori (Opsional)</label>
            <input type="file" @change="handleFileChange" accept="image/*" class="w-full border rounded px-3 py-2 text-sm bg-gray-50" />
          </div>
          <div class="flex justify-end space-x-3">
            <button type="button" @click="closeModal" class="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300">Batal</button>
            <button type="submit" :disabled="isSaving" class="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600 disabled:opacity-50">
              {{ isSaving ? 'Menyimpan...' : 'Simpan' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2';

definePageMeta({ layout: "admin" });

const baseURL = "https://kecilung-resto.vercel.app/api";

const { data: response, pending, refresh } = useLazyFetch(`${baseURL}/categories`);
const categories = computed(() => response.value?.data || []);

const isModalOpen = ref(false);
const modalMode = ref("add");
const isSaving = ref(false);
const form = ref({ id: null, code: "", name: "", description: "" });
const selectedFile = ref(null);

const openModal = (mode, data = null) => {
  modalMode.value = mode;
  selectedFile.value = null; 
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

const handleFileChange = (e) => {
  if (e.target.files.length > 0) {
    selectedFile.value = e.target.files[0];
  }
};

const saveCategory = async () => {
  isSaving.value = true;
  try {
    const formData = new FormData();
    formData.append("code", form.value.code);
    formData.append("name", form.value.name);
    formData.append("description", form.value.description || "");
    if (selectedFile.value) {
      formData.append("image", selectedFile.value);
    }

    if (modalMode.value === "add") {
      await $fetch(`${baseURL}/categories`, { method: "POST", body: formData });
    } else {
      await $fetch(`${baseURL}/categories/${form.value.id}`, { method: "PUT", body: formData });
    }
    
    closeModal();
    refresh();
    
    Swal.fire({
      icon: 'success',
      title: 'Berhasil!',
      text: `Kategori berhasil ${modalMode.value === 'add' ? 'ditambahkan' : 'diperbarui'}.`,
      timer: 1500,
      showConfirmButton: false
    });

  } catch (error) {
    Swal.fire({ icon: 'error', title: 'Gagal!', text: 'Gagal menyimpan data: ' + error.message });
  } finally {
    isSaving.value = false;
  }
};

const deleteCategory = async (id) => {
  const result = await Swal.fire({
    title: 'Hapus Kategori?',
    text: "Data yang dihapus tidak dapat dikembalikan!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#ef4444',
    cancelButtonColor: '#6b7280',
    confirmButtonText: 'Ya, Hapus!',
    cancelButtonText: 'Batal'
  });

  if (result.isConfirmed) {
    try {
      await $fetch(`${baseURL}/categories/${id}`, { method: "DELETE" });
      refresh();
      Swal.fire({ icon: 'success', title: 'Terhapus!', text: 'Kategori dihapus.', timer: 1500, showConfirmButton: false });
    } catch (error) {
      Swal.fire({ icon: 'error', title: 'Gagal!', text: 'Gagal menghapus data kategori.' });
    }
  }
};
</script>

<style scoped>
.slide-up-anim {
  animation: slideUp 0.4s ease-out forwards;
  opacity: 0;
}
@keyframes slideUp {
  0% { transform: translateY(15px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}
</style>