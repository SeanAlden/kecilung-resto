<!-- <template>
  <div class="flex items-center justify-center min-h-[60vh]">
    <h1 class="text-4xl font-bold text-gray-800">Home Page</h1>
  </div>
</template> -->

<template>
  <div class="font-sans overflow-x-hidden bg-stone-50">
    
    <!-- HERO SECTION (Top Banner) -->
    <section class="relative h-screen flex items-center justify-center">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <img src="/assets/images/home-banner.png" alt="Kecilung Resto Ambience" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
        <span class="block text-orange-400 font-semibold tracking-widest uppercase mb-4 text-sm md:text-base animate-fade-in-up">
          Sejak Zaman Kolonial Belanda
        </span>
        <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg animate-fade-in-up animation-delay-100">
          Cita Rasa <span class="text-orange-500 italic">Otentik</span> di Jantung Surabaya
        </h1>
        <p class="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light animate-fade-in-up animation-delay-200">
          Manjakan lidah Anda dengan mahakarya kuliner Nusantara dalam balutan kemewahan klasik. Pengalaman bersantap yang tidak akan Anda temukan di tempat lain.
        </p>
        
        <!-- CTA & FOMO -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
          <NuxtLink to="/menu" class="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full shadow-[0_0_20px_rgba(249,115,22,0.4)] transition-all transform hover:-translate-y-1 text-lg">
            Eksplorasi Menu Kami
          </NuxtLink>
          <NuxtLink to="/catering" class="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold rounded-full transition-all text-lg">
            Pesan Layanan Katering
          </NuxtLink>
        </div>
        <!-- <p class="mt-6 text-sm text-orange-300 animate-pulse font-medium">
          🔥 Tersisa 3 slot meja VIP untuk reservasi malam ini!
        </p> -->
      </div>
    </section>

    <!-- URGENCY & VALUE PROPOSITION BAR -->
    <section class="bg-orange-600 text-white py-4 shadow-inner relative z-20 -mt-2">
      <div class="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 font-medium text-sm md:text-base">
        <div class="flex items-center justify-center gap-2">
          <span class="text-2xl">⭐</span>
          <span>Bahan segar berkualitas tinggi setiap hari.</span>
        </div>
        <div class="flex items-center justify-center gap-2">
          <span class="text-2xl">🏛️</span>
          <span>Bangunan bersejarah dengan interior klasik mewah.</span>
        </div>
        <div class="flex items-center justify-center gap-2 text-yellow-200 font-bold">
          <span class="text-2xl">⏳</span>
          <span>Jadwal Katering September Hampir Penuh. Pesan Sekarang!</span>
        </div>
      </div>
    </section>

    <!-- HIGHLIGHT SECTION (Visual & Copywriting) -->
    <section class="py-24 container mx-auto px-6">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <!-- Text -->
        <div class="lg:w-1/2">
          <h2 class="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Kelezatan yang Terbatas, <br/>
            Kenangan yang <span class="text-orange-500">Abadi.</span>
          </h2>
          <div class="w-20 h-1 bg-orange-500 mb-6"></div>
          <p class="text-gray-600 text-lg leading-relaxed mb-6 text-justify">
            Kami menjaga komitmen untuk selalu menyajikan kualitas, bukan kuantitas. Beberapa hidangan <i>signature</i> kami, seperti Nasi Campur Spesial Kecilung dan olahan daging sapi khas Nusantara, disiapkan menggunakan teknik memasak perlahan <i>(slow-cooked)</i> yang memakan waktu belasan jam.
          </p>
          <p class="text-red-600 font-bold mb-8 bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
            Peringatan: Karena proses pembuatan yang kompleks, hidangan andalan kami hanya disajikan dalam 50 porsi setiap harinya dan sering habis sebelum jam makan malam.
          </p>
          <NuxtLink to="/about" class="inline-flex items-center gap-2 text-gray-900 font-bold hover:text-orange-600 transition-colors">
            Pelajari Sejarah Kami 
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </NuxtLink>
        </div>
        <!-- Images Composition -->
        <div class="lg:w-1/2 relative">
          <img src="/assets/images/homeabout.png" alt="Signature Dish" class="w-4/5 rounded-2xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500" />
          <img src="/assets/images/ayam-goreng-home.png" alt="Resto Ambience" class="w-3/5 absolute -bottom-10 -right-4 rounded-2xl shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-500 z-20" />
          <div class="absolute -top-6 -left-6 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIAL SECTION -->
    <section class="py-24 bg-white border-t border-gray-100">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <span class="text-orange-500 font-bold tracking-widest uppercase text-sm block mb-2">— TESTIMONI</span>
          <h2 class="text-4xl font-extrabold text-gray-900 mb-4">Pengalaman Pelanggan</h2>
          <p class="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Dengarkan pengalaman pelanggan yang telah menikmati hidangan terbaik kami dengan cita rasa autentik dan pelayanan yang memuaskan.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          <!-- Testimoni 1 -->
          <div class="bg-stone-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative group transform hover:-translate-y-2">
            <div class="text-orange-200 text-6xl absolute top-4 right-6 font-serif opacity-50 group-hover:text-orange-300 transition-colors">"</div>
            <div class="text-yellow-400 text-xl tracking-widest mb-6">★★★★★</div>
            <p class="text-gray-700 leading-relaxed mb-8 relative z-10 italic">
              "Makanannya benar-benar lezat dan penyajiannya sangat elegan. Suasana restorannya juga nyaman dan cocok untuk keluarga."
            </p>
            <div class="flex items-center gap-4 mt-auto">
              <div class="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold text-xl">R</div>
              <div>
                <h4 class="font-bold text-gray-900">Rina Maharani</h4>
                <p class="text-sm text-gray-500">Pelanggan Setia</p>
              </div>
            </div>
          </div>

          <!-- Testimoni 2 -->
          <div class="bg-stone-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative group transform hover:-translate-y-2">
            <div class="text-orange-200 text-6xl absolute top-4 right-6 font-serif opacity-50 group-hover:text-orange-300 transition-colors">"</div>
            <div class="text-yellow-400 text-xl tracking-widest mb-6">★★★★★</div>
            <p class="text-gray-700 leading-relaxed mb-8 relative z-10 italic">
              "Sop buntutnya juara! Dagingnya empuk dan kuahnya kaya rempah. Pasti akan kembali lagi untuk mencoba menu lainnya."
            </p>
            <div class="flex items-center gap-4 mt-auto">
              <div class="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl">B</div>
              <div>
                <h4 class="font-bold text-gray-900">Budi Santoso</h4>
                <p class="text-sm text-gray-500">Food Enthusiast</p>
              </div>
            </div>
          </div>

          <!-- Testimoni 3 -->
          <div class="bg-stone-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative group transform hover:-translate-y-2">
            <div class="text-orange-200 text-6xl absolute top-4 right-6 font-serif opacity-50 group-hover:text-orange-300 transition-colors">"</div>
            <div class="text-yellow-400 text-xl tracking-widest mb-6">★★★★<span class="text-gray-300">☆</span></div>
            <p class="text-gray-700 leading-relaxed mb-8 relative z-10 italic">
              "Pelayanan sangat ramah dan cepat. Tempatnya bersih dan instagramable. Cocok untuk acara spesial bersama teman."
            </p>
            <div class="flex items-center gap-4 mt-auto">
              <div class="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl">I</div>
              <div>
                <h4 class="font-bold text-gray-900">Intan Permata</h4>
                <p class="text-sm text-gray-500">Pengunjung</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- QUICK CATEGORY PREVIEW -->
    <section class="bg-gray-900 py-24 text-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Pilih Sensasi Rasa Anda</h2>
          <p class="text-gray-400">Jelajahi beragam kategori menu yang kami siapkan khusus hari ini.</p>
        </div>

        <div v-if="pending" class="flex justify-center py-10">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
        </div>

        <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <!-- Mapping Kategori dari API -->
          <!-- <NuxtLink 
            v-for="cat in (categories.slice(0,4))" 
            :key="cat.id"
            :to="`/menu/category/${cat.id}`"
            class="relative h-48 md:h-64 rounded-2xl overflow-hidden group block"
          >
            <div class="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 transition-transform duration-500 group-hover:scale-110 flex items-center justify-center p-4">
              <span class="text-6xl opacity-10 absolute right-[-10px] bottom-[-10px] transform group-hover:rotate-12 transition-transform">🍽️</span>
            </div>
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-300"></div>
            <div class="absolute inset-0 flex flex-col justify-end p-6">
              <h3 class="text-xl md:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">{{ cat.name }}</h3>
              <p class="text-sm text-gray-300 mt-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Lihat Daftar Menu &rarr;</p>
            </div>
          </NuxtLink> -->

          <!-- Mapping Kategori dari API -->
          <NuxtLink 
            v-for="cat in (categories.slice(0,4))" 
            :key="cat.id"
            :to="`/menu/category/${cat.id}`"
            class="relative h-48 md:h-64 rounded-2xl overflow-hidden group block shadow-lg"
          >
            <!-- Background Kategori Terhubung dengan API -->
            <img 
              v-if="cat.image_url" 
              :src="cat.image_url" 
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              :alt="cat.name"
            />
            <!-- Fallback Jika Belum Ada Gambar -->
            <div v-else class="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 transition-transform duration-500 group-hover:scale-110 flex items-center justify-center p-4">
              <span class="text-6xl opacity-10 absolute right-[-10px] bottom-[-10px] transform group-hover:rotate-12 transition-transform">🍽️</span>
            </div>

            <!-- Overlay & Text -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:bg-black/30 transition-colors duration-300"></div>
            <div class="absolute inset-0 flex flex-col justify-end p-6">
              <h3 class="text-xl md:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors drop-shadow-md">
                {{ cat.name }}
              </h3>
              <p class="text-sm text-orange-300 mt-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 font-medium">
                Lihat Daftar Menu &rarr;
              </p>
            </div>
          </NuxtLink>
        </div>
        
        <div class="text-center mt-12">
          <NuxtLink to="/menu/category/1" class="text-orange-500 hover:text-white font-bold text-lg transition-colors border-b-2 border-orange-500 hover:border-white pb-1">
            Lihat Seluruh Menu Kami
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const baseURL = "https://kecilung-resto.vercel.app/api";

// Fetch data kategori untuk grid interaktif
const { data: categoryResponse, pending } = useFetch(`${baseURL}/categories`, {
  lazy: import.meta.client // Sempurna untuk SEO
});
const categories = computed(() => categoryResponse.value?.data || []);
</script>

<style scoped>
/* Custom Animations */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}
.animation-delay-100 { animation-delay: 100ms; }
.animation-delay-200 { animation-delay: 200ms; }
.animation-delay-300 { animation-delay: 300ms; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
</style>