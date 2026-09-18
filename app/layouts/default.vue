<!-- <template>
  <div class="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-800">
    
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-extrabold text-orange-600 tracking-wide">
          Kecilung Resto
        </NuxtLink>

        <nav class="hidden md:flex space-x-8 items-center font-medium">
          <NuxtLink to="/" class="hover:text-orange-500 transition-colors">Home</NuxtLink>
          <NuxtLink to="/about" class="hover:text-orange-500 transition-colors">About Us</NuxtLink>

          <div class="relative group py-4">
            <button class="flex items-center gap-1 hover:text-orange-500 transition-colors focus:outline-none">
              Our Menu
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div class="absolute left-0 mt-4 w-52 bg-white rounded-md shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
              <div class="py-2">
                <NuxtLink to="/menu/main-course" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Main Course</NuxtLink>
                <NuxtLink to="/menu/rice-noodle" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Rice & Noodle</NuxtLink>
                <NuxtLink to="/menu/vegetables" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Vegetables</NuxtLink>
                <NuxtLink to="/menu/snacks" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Snacks</NuxtLink>
                <NuxtLink to="/menu/drinks-dessert" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Drinks & Dessert</NuxtLink>
              </div>
            </div>
          </div>

          <NuxtLink to="/catering" class="hover:text-orange-500 transition-colors">Catering</NuxtLink>
          <NuxtLink to="/moment" class="hover:text-orange-500 transition-colors">Moment</NuxtLink>
          <NuxtLink to="/articles" class="hover:text-orange-500 transition-colors">Articles</NuxtLink>
        </nav>

        <button class="md:hidden flex items-center text-gray-600 hover:text-orange-600 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 class="text-xl font-bold text-white mb-4">Kecilung Resto</h3>
            <p class="text-sm leading-relaxed text-gray-400">
              Menyajikan perpaduan autentik cita rasa Nusantara dengan standar kualitas terbaik. Nikmati pengalaman bersantap istimewa bersama keluarga dan kolega Anda di tempat kami.
            </p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold text-white mb-4">Tautan Cepat</h3>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to="/about" class="hover:text-orange-500 transition-colors">Tentang Kami</NuxtLink></li>
              <li><NuxtLink to="/menu" class="hover:text-orange-500 transition-colors">Daftar Menu</NuxtLink></li>
              <li><NuxtLink to="/catering" class="hover:text-orange-500 transition-colors">Layanan Catering</NuxtLink></li>
              <li><NuxtLink to="/moment" class="hover:text-orange-500 transition-colors">Galeri Momen</NuxtLink></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold text-white mb-4">Hubungi Kami</h3>
            <ul class="space-y-3 text-sm text-gray-400">
              <li class="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Jl. Pahlawan No. 123, Surabaya, Jawa Timur, Indonesia</span>
              </li>
              <li class="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+62 812 3456 7890</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {{ new Date().getFullYear() }} Kecilung Resto. All rights reserved.</p>
          <div class="flex space-x-4 mt-4 md:mt-0">
            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template> -->

<template>
  <div class="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-800">
    
    <!-- Komponen Header Otomatis Dipanggil -->
    <AppHeader />

    <!-- MAIN CONTENT -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Komponen Footer Otomatis Dipanggil -->
    <AppFooter />
    
  </div>
</template>