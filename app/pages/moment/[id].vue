<template>
  <div class="container mx-auto px-6 py-16 max-w-5xl">
    <NuxtLink to="/moment" class="text-gray-500 hover:text-orange-500 mb-6 inline-block font-medium">
      &larr; Kembali ke Daftar Moment
    </NuxtLink>
    
    <!-- Indikator Loading -->
    <div v-if="pending" class="flex justify-center py-32">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
    </div>

    <!-- Konten Detail Moment -->
    <div v-else-if="momentData" class="bg-white rounded-2xl shadow-lg p-8 md:flex gap-10">
      
      <!-- Galeri Multi-Gambar -->
      <div class="md:w-1/2">
        <div class="h-80 w-full mb-4 overflow-hidden rounded-xl bg-gray-100 border">
          <img v-if="activeImage" :src="activeImage" class="w-full h-full object-cover shadow-sm" />
          <div v-else class="w-full h-full flex items-center justify-center text-gray-400">Tidak ada gambar</div>
        </div>
        
        <!-- Thumbnail Pilihan Gambar -->
        <div class="flex gap-2 overflow-x-auto pb-2">
          <img 
            v-for="img in momentData.images" 
            :key="img.id" 
            :src="img.image_url" 
            @click="activeImage = img.image_url" 
            class="w-20 h-20 object-cover rounded-md cursor-pointer border-2 transition-colors"
            :class="activeImage === img.image_url ? 'border-orange-500' : 'border-transparent hover:border-orange-300'"
          />
        </div>
      </div>
      
      <!-- Deskripsi dan Tombol Aksi -->
      <div class="md:w-1/2 mt-8 md:mt-0 flex flex-col">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ momentData.name }}</h1>
        <div class="w-16 h-1 bg-orange-500 mb-6 rounded-full"></div>
        <p class="text-gray-700 leading-relaxed mb-8 whitespace-pre-line flex-1">
          {{ momentData.description }}
        </p>
        
        <button @click="openBookingModal" class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transition transform hover:-translate-y-1">
          Reservasi Moment Ini
        </button>
      </div>
    </div>

    <!-- MODAL BOOKING -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div class="bg-white p-8 rounded-xl w-full max-w-md shadow-2xl">
        <h2 class="text-2xl font-bold mb-6 text-gray-800">Formulir Reservasi</h2>
        <form @submit.prevent="submitBooking">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Nama Lengkap</label>
            <input v-model="form.customer_name" type="text" required class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Nomor WhatsApp</label>
            <input v-model="form.phone" type="tel" required class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          
          <div class="mb-8">
            <label class="block text-gray-700 text-sm font-bold mb-2">Tanggal & Waktu Acara</label>
            <input v-model="form.booking_date" type="datetime-local" required class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          
          <div class="flex gap-4">
            <button type="button" @click="showModal = false" class="w-1/2 bg-gray-200 hover:bg-gray-300 py-3 rounded-lg font-bold text-gray-700 transition">Batal</button>
            <button type="submit" :disabled="isSubmitting" class="w-1/2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold transition disabled:opacity-50">
              {{ isSubmitting ? 'Memproses...' : 'Ajukan Reservasi' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2';

const route = useRoute();
const baseURL = "https://kecilung-resto.vercel.app/api";

// Fetch data menggunakan useFetch + lazy untuk SEO dan Load Instan
const { data: res, pending } = useFetch(`${baseURL}/moments/packages/${route.params.id}`, {
  lazy: import.meta.client
});
const momentData = computed(() => res.value?.data);

// Manajemen Gambar Aktif di Galeri
const activeImage = ref('');
watchEffect(() => {
  if (momentData.value?.images && momentData.value.images.length > 0) {
    activeImage.value = momentData.value.images[0].image_url;
  }
});

// Manajemen Modal dan Form
const showModal = ref(false);
const isSubmitting = ref(false);
const openBookingModal = () => showModal.value = true;

// Binding form dengan moment_id
const form = ref({ customer_name: "", phone: "", booking_date: "", moment_id: parseInt(route.params.id) });

const submitBooking = async () => {
  isSubmitting.value = true;
  try {
    // Ubah format tanggal ke ISO untuk GORM Go
    const payload = { 
      ...form.value, 
      booking_date: new Date(form.value.booking_date).toISOString() 
    };
    
    // POST ke rute moment bookings
    await $fetch(`${baseURL}/moments/bookings`, { method: 'POST', body: payload });
    
    showModal.value = false;
    Swal.fire('Berhasil!', 'Reservasi Anda telah diajukan. Admin kami akan segera menghubungi Anda melalui WhatsApp untuk konfirmasi.', 'success');
  } catch (err) {
    Swal.fire('Mohon Maaf', err.response?._data?.error || 'Gagal melakukan reservasi.', 'error');
  } finally {
    isSubmitting.value = false;
  }
};
</script>