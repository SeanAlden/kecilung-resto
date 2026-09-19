<template>
  <div class="bg-stone-50 min-h-screen overflow-hidden font-sans">
    
    <!-- Hero / Header Section -->
    <section class="container mx-auto px-6 pt-20 pb-16 lg:flex lg:items-center lg:justify-between lg:gap-16">
      <div class="lg:w-1/2 mb-10 lg:mb-0">
        <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
          ABOUT <br />
          <span class="text-orange-600">THE KECILUNG</span> <br />
          KITCHEN & RESTO
        </h1>
        <div class="w-24 h-2 bg-orange-500 rounded-full mb-8"></div>
      </div>
      <div class="lg:w-1/2 relative group">
        <div class="absolute inset-0 bg-orange-200 rounded-2xl transform translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
        <img 
          src="/assets/images/gedung.webp" 
          alt="Gedung Kecilung Kitchen & Resto" 
          class="w-full h-[400px] object-cover rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-[1.02]" 
        />
      </div>
    </section>

    <!-- Paragraf 1: Teks Kiri, Gambar Kanan -->
    <section class="container mx-auto px-6 py-16 lg:flex lg:items-center lg:gap-16">
      <div class="lg:w-1/2 order-2 lg:order-1">
        <p class="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
          <span class="font-bold text-orange-600 text-2xl">K</span>ecilung Kitchen & Resto merupakan restoran yang memanjakan lidah dengan masakan Indonesia yang lezat dan otentik. Restoran ini terletak di pusat kota dengan konsep bangunan yang klasik dan elegan. Kecilung Kitchen & Resto juga sempat beberapa kali berganti wajah dan tema masakan, seperti yang dulunya Asian Fusion sekarang menjadi masakan Indonesia akan tetapi tetap konsisten dalam menjaga kepuasan dan kenyamanan pelanggan.
        </p>
      </div>
      <div class="lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
        <img 
          src="/assets/images/aboutus1.webp" 
          alt="Suasana Kecilung 1" 
          class="w-full h-80 md:h-[400px] object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300" 
        />
      </div>
    </section>

    <!-- Paragraf 2: Gambar Kiri, Teks Kanan (Selang-seling) -->
    <section class="bg-white py-16">
      <div class="container mx-auto px-6 lg:flex lg:items-center lg:gap-16">
        <div class="lg:w-1/2 mb-8 lg:mb-0">
          <img 
            src="/assets/images/aboutus2.webp" 
            alt="Hidangan Kecilung" 
            class="w-full h-80 md:h-[400px] object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300" 
          />
        </div>
        <div class="lg:w-1/2">
          <p class="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
            Kami memahami pentingnya menjaga kelezatan kuliner khas Indonesia, oleh karena itu Kecilung Kitchen & Resto berkomitmen untuk menggunakan bahan-bahan segar dan berkualitas untuk memastikan makanan yang disajikan selalu lezat dan bergizi. Selain itu, Kecilung Kitchen & Resto juga menerima pesanan berupa catering, hampers, buffet dan booth sehingga bisa dipesan untuk acara spesial dan bisa dinikmati kapan saja dan dimana saja.
          </p>
        </div>
      </div>
    </section>

    <!-- Paragraf 3: Teks Kiri, Gambar Kanan -->
    <section class="container mx-auto px-6 py-16 lg:flex lg:items-center lg:gap-16">
      <div class="lg:w-1/2 order-2 lg:order-1">
        <p class="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
          Kecilung Kitchen & Resto memiliki bangunan dengan sejarah yang panjang, karena sudah dibangun sejak zaman kolonial Belanda. Kecilung Kitchen & Resto berkomitmen untuk terus melestarikan bangunan ini, karena itu bangunan ini tidak pernah dirombak dan hanya direnovasi sehingga tetap terjaga keasliannya. Selain itu, interior disini juga menggunakan tema klasik elegan yang nyaman dan terlihat mewah. Karena bangunan dan suasananya yang unik di tengah kota Surabaya inilah, Kecilung Kitchen & Resto juga menyediakan layanan untuk acara penting dan moment berharga seperti Ulang Tahun, Pernikahan, Acara gathering dan Meeting.
        </p>
      </div>
      <div class="lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
        <img 
          src="/assets/images/aboutus3.webp" 
          alt="Interior Klasik Kecilung" 
          class="w-full h-80 md:h-[400px] object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300" 
        />
      </div>
    </section>

  </div>
</template>

<script setup>
// Jika halaman ini berada di sisi pengunjung (bukan admin),
// pastikan menggunakan layout default atau hilangkan definePageMeta layout admin.
</script>