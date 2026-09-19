<template>
  <div class="container mx-auto p-6 max-w-6xl">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
      <h1 class="text-3xl font-bold text-gray-800">Manajemen Paket Moment</h1>
      <div class="flex space-x-3">
        <NuxtLink to="/admin/moment/booking_page" class="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-medium transition shadow flex items-center">
          Lihat Data Booking &rarr;
        </NuxtLink>
        <button @click="openModal('add')" class="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition shadow">
          + Tambah Paket
        </button>
      </div>
    </div>

    <!-- Tabel Paket Moment -->
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <!-- ... (HTML Tabel sama persis seperti katering) ... -->
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Gambar Utama</th>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Nama Paket</th>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Deskripsi</th>
            <th class="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase">Aksi</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-if="pending"><td colspan="4" class="text-center py-8 text-gray-500">Memuat data...</td></tr>
          <tr v-else v-for="mom in moments" :key="mom.id" class="hover:bg-gray-50">
            <td class="px-6 py-4">
              <img v-if="mom.images && mom.images.length > 0" :src="mom.images[0].image_url" class="w-20 h-20 object-cover rounded-md shadow-sm border" />
              <div v-else class="w-20 h-20 bg-gray-200 flex items-center justify-center text-xs text-gray-400 rounded-md border">No Image</div>
            </td>
            <td class="px-6 py-4 font-bold text-gray-900">{{ mom.name }}</td>
            <td class="px-6 py-4 text-sm text-gray-600">
              <p class="line-clamp-2">{{ mom.description }}</p>
              <span class="text-xs text-orange-500 font-semibold mt-1 block">{{ mom.images?.length || 0 }} Gambar tersimpan</span>
            </td>
            <td class="px-6 py-4 text-center space-x-3 whitespace-nowrap">
              <button @click="showDetail(mom)" class="text-blue-600 hover:text-blue-900 font-bold">Detail</button>
              <button @click="openModal('edit', mom)" class="text-amber-600 hover:text-amber-900 font-bold">Edit</button>
              <button @click="deleteMoment(mom.id)" class="text-red-600 hover:text-red-900 font-bold">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <!-- Modal HTML sama persis -->
    <!-- MODAL FORM (ADD & EDIT) -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div class="bg-white p-8 rounded-xl w-full max-w-lg shadow-2xl transform transition-all">
        <h2 class="text-2xl font-bold mb-6 text-gray-800">
          {{ modalMode === 'add' ? 'Tambah Paket Baru' : 'Edit Paket Moment' }}
        </h2>
        <form @submit.prevent="saveMoment">
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Nama Paket</label>
            <input v-model="form.name" type="text" required class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-300 focus:outline-none" placeholder="Misal: Ulang Tahun Premium" />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Deskripsi</label>
            <textarea v-model="form.description" rows="4" required class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-300 focus:outline-none" placeholder="Jelaskan isi paket ini..."></textarea>
          </div>
          <div class="mb-8">
            <label class="block text-gray-700 font-bold mb-2">
              Upload Gambar {{ modalMode === 'edit' ? '(Opsional)' : '' }}
            </label>
            <input type="file" multiple @change="handleFileChange" accept="image/*" class="w-full border rounded-lg px-4 py-2 bg-gray-50" />
            <p class="text-xs text-gray-500 mt-2">* Tahan tombol CTRL/Command untuk memilih lebih dari satu gambar.</p>
          </div>
          <div class="flex justify-end space-x-4">
            <button type="button" @click="closeModal" class="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-bold hover:bg-gray-300 transition">Batal</button>
            <button type="submit" :disabled="isSaving" class="bg-orange-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-orange-600 transition disabled:opacity-50">
              {{ isSaving ? 'Menyimpan...' : 'Simpan Paket' }}
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

// PERUBAHAN: Endpoint ke /moments/packages
const { data: res, pending, refresh } = useLazyFetch(`${baseURL}/moments/packages`);
const moments = computed(() => res.value?.data || []);

const isModalOpen = ref(false);
const modalMode = ref("add");
const isSaving = ref(false);
const selectedFiles = ref([]);
const form = ref({ id: null, name: "", description: "" });

const showDetail = (mom) => {
  let imagesHtml = '';
  if (mom.images && mom.images.length > 0) {
    const imgTags = mom.images.map(img => `<img src="${img.image_url}" class="w-24 h-24 object-cover rounded-md border shadow-sm" />`).join('');
    imagesHtml = `<div class="flex gap-2 overflow-x-auto justify-center mb-4 p-2 bg-gray-50 rounded-lg">${imgTags}</div>`;
  } else {
    imagesHtml = `<div class="text-gray-400 italic mb-4 bg-gray-50 py-4 rounded-lg">Tidak ada gambar yang tersimpan</div>`;
  }

  Swal.fire({
    title: `<span class="text-2xl font-bold text-gray-900">${mom.name}</span>`,
    html: `${imagesHtml}<div class="text-left bg-orange-50 text-gray-800 p-4 rounded-lg max-h-64 overflow-y-auto border border-orange-100 whitespace-pre-line text-sm leading-relaxed">${mom.description}</div>`,
    width: '600px', showCloseButton: true, focusConfirm: false, confirmButtonText: 'Tutup', confirmButtonColor: '#f97316', customClass: { popup: 'rounded-xl shadow-2xl', title: 'pb-2 border-b' }
  });
};

const openModal = (mode, data = null) => {
  modalMode.value = mode;
  selectedFiles.value = [];
  if (mode === "edit" && data) {
    form.value = { id: data.id, name: data.name, description: data.description };
  } else {
    form.value = { id: null, name: "", description: "" };
  }
  isModalOpen.value = true;
};
const closeModal = () => { isModalOpen.value = false; };
const handleFileChange = (e) => {
  if (e.target.files.length > 0) selectedFiles.value = Array.from(e.target.files);
  else selectedFiles.value = [];
};

const saveMoment = async () => {
  isSaving.value = true;
  try {
    const formData = new FormData();
    formData.append("name", form.value.name);
    formData.append("description", form.value.description);
    selectedFiles.value.forEach((file) => { formData.append("images", file); });

    if (modalMode.value === "add") {
      await $fetch(`${baseURL}/moments/packages`, { method: "POST", body: formData });
      Swal.fire({ icon: 'success', title: 'Berhasil!', text: 'Paket moment ditambahkan.', timer: 1500, showConfirmButton: false });
    } else {
      await $fetch(`${baseURL}/moments/packages/${form.value.id}`, { method: "PUT", body: formData });
      Swal.fire({ icon: 'success', title: 'Diperbarui!', text: 'Paket moment diubah.', timer: 1500, showConfirmButton: false });
    }
    closeModal(); refresh();
  } catch (error) {
    Swal.fire({ icon: 'error', title: 'Gagal!', text: 'Gagal menyimpan data: ' + error.message });
  } finally { isSaving.value = false; }
};

const deleteMoment = async (id) => {
  const result = await Swal.fire({
    title: 'Hapus Paket Ini?', text: "Data akan terhapus permanen!", icon: 'warning',
    showCancelButton: true, confirmButtonColor: '#ef4444', cancelButtonColor: '#6b7280', confirmButtonText: 'Ya, Hapus!', cancelButtonText: 'Batal'
  });
  if (result.isConfirmed) {
    try {
      await $fetch(`${baseURL}/moments/packages/${id}`, { method: "DELETE" });
      refresh();
      Swal.fire({ icon: 'success', title: 'Terhapus!', text: 'Paket moment dihapus.', timer: 1500, showConfirmButton: false });
    } catch (error) {
      Swal.fire({ icon: 'error', title: 'Gagal!', text: 'Gagal menghapus paket moment.' });
    }
  }
};
</script>