<template>
  <div class="container mx-auto p-6 max-w-6xl">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Manajemen Booking Moment</h1>
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <!-- ... (HTML Tabel sama persis seperti katering booking) ... -->
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Pelanggan</th>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Jadwal</th>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Status</th>
            <th class="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase">Aksi</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="book in bookings" :key="book.id">
            <td class="px-6 py-4">
              <p class="font-bold text-gray-900">{{ book.customer_name }}</p>
              <p class="text-sm text-gray-500">{{ book.phone }}</p>
              <p class="text-xs text-orange-600">Paket: {{ book.moment?.name }}</p>
            </td>
            <td class="px-6 py-4 font-medium text-gray-700">
              {{ new Date(book.booking_date).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}
            </td>
            <td class="px-6 py-4">
              <span :class="{'bg-yellow-100 text-yellow-800': book.status === 'PENDING', 'bg-green-100 text-green-800': book.status === 'APPROVED', 'bg-red-100 text-red-800': book.status === 'REJECTED'}" class="px-3 py-1 rounded-full text-xs font-bold">
                {{ book.status }}
              </span>
            </td>
            <td class="px-6 py-4 text-center space-x-2">
              <button v-if="book.status === 'PENDING'" @click="updateStatus(book.id, 'approve')" class="bg-green-500 text-white px-3 py-1 rounded text-sm font-bold hover:bg-green-600">Terima</button>
              <button v-if="book.status === 'PENDING'" @click="updateStatus(book.id, 'reject')" class="bg-red-500 text-white px-3 py-1 rounded text-sm font-bold hover:bg-red-600">Tolak</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2';
definePageMeta({ layout: "admin" });

const baseURL = "https://kecilung-resto.vercel.app/api";
// PERUBAHAN: Endpoint ke /moments/bookings
const { data: res, refresh } = useLazyFetch(`${baseURL}/moments/bookings`);
const bookings = computed(() => res.value?.data || []);

const updateStatus = async (id, action) => {
  const isApprove = action === 'approve';
  const confirm = await Swal.fire({
    title: isApprove ? 'Terima Booking?' : 'Tolak Booking?',
    text: isApprove ? "Jadwal ini akan dikunci untuk pelanggan ini." : "Pelanggan akan ditolak.",
    icon: 'warning', showCancelButton: true
  });

  if (confirm.isConfirmed) {
    // PERUBAHAN: Endpoint action
    await $fetch(`${baseURL}/moments/bookings/${id}/${action}`, { method: 'PUT' });
    Swal.fire('Berhasil!', `Booking telah di-${isApprove ? 'Setujui' : 'Tolak'}.`, 'success');
    refresh();
  }
};
</script>