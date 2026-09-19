<template>
  <div class="container mx-auto px-6 py-16 max-w-5xl" v-if="catering">
    <NuxtLink to="/articles" class="text-gray-500 hover:text-orange-500 mb-6 inline-block">&larr; Kembali</NuxtLink>
    
    <div class="bg-white rounded-2xl shadow-lg p-8 md:flex gap-10">
      <!-- Multi Image Gallery Sederhana -->
      <div class="md:w-1/2">
        <img :src="activeImage" class="w-full h-80 object-cover rounded-xl mb-4 shadow-sm" />
        <div class="flex gap-2 overflow-x-auto">
          <img v-for="img in catering.images" :key="img.id" :src="img.image_url" @click="activeImage = img.image_url" class="w-20 h-20 object-cover rounded-md cursor-pointer border-2 hover:border-orange-500" />
        </div>
      </div>
      
      <!-- Detail -->
      <div class="md:w-1/2 mt-8 md:mt-0">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ catering.name }}</h1>
        <p class="text-gray-700 leading-relaxed mb-8">{{ catering.description }}</p>
        <button @click="openBookingModal" class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transition">
          Book Jadwal Sekarang
        </button>
      </div>
    </div>

    <!-- MODAL BOOKING -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div class="bg-white p-8 rounded-xl w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6">Formulir Booking</h2>
        <form @submit.prevent="submitBooking">
          <input v-model="form.customer_name" type="text" placeholder="Nama Lengkap" required class="w-full mb-4 px-4 py-3 border rounded-lg" />
          <input v-model="form.phone" type="tel" placeholder="Nomor WhatsApp" required class="w-full mb-4 px-4 py-3 border rounded-lg" />
          <input v-model="form.booking_date" type="datetime-local" required class="w-full mb-6 px-4 py-3 border rounded-lg" />
          
          <div class="flex gap-4">
            <button type="button" @click="showModal = false" class="w-1/2 bg-gray-200 py-3 rounded-lg font-bold text-gray-700">Batal</button>
            <button type="submit" class="w-1/2 bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600">Ajukan</button>
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

const { data: res } = await useFetch(`${baseURL}/catering/packages/${route.params.id}`);
const catering = computed(() => res.value?.data);

const activeImage = ref('');
watchEffect(() => {
  if (catering.value?.images?.length > 0) activeImage.value = catering.value.images[0].image_url;
});

const showModal = ref(false);
const openBookingModal = () => showModal.value = true;

const form = ref({ customer_name: "", phone: "", booking_date: "", catering_id: parseInt(route.params.id) });

const submitBooking = async () => {
  try {
    // Ubah tanggal menjadi format RFC3339 yang diterima Go (Time)
    const payload = { ...form.value, booking_date: new Date(form.value.booking_date).toISOString() };
    
    await $fetch(`${baseURL}/catering/bookings`, { method: 'POST', body: payload });
    
    showModal.value = false;
    Swal.fire('Berhasil!', 'Booking diajukan, menunggu konfirmasi Admin.', 'success');
  } catch (err) {
    // Menangkap pesan bentrok jadwal dari backend
    Swal.fire('Maaf', err.response?._data?.error || 'Gagal melakukan booking.', 'error');
  }
};
</script>