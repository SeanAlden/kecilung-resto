<!-- <template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <NuxtLink to="/">
        <img src="/assets/images/kecilung_logo.webp" alt="Kecilung Resto" class="h-12 w-auto object-contain" />
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
</template> -->

<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <NuxtLink to="/">
        <img src="/assets/images/kecilung_logo.webp" alt="Kecilung Resto" class="h-12 w-auto object-contain" />
      </NuxtLink>

      <nav class="hidden md:flex space-x-8 items-center font-medium">
        <NuxtLink to="/" class="hover:text-orange-500 transition-colors">Home</NuxtLink>
        <NuxtLink to="/about" class="hover:text-orange-500 transition-colors">About Us</NuxtLink>

        <!-- Dropdown: Our Menu Dinamis -->
        <div class="relative group py-4">
          <button class="flex items-center gap-1 hover:text-orange-500 transition-colors focus:outline-none">
            Our Menu
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div class="absolute left-0 mt-4 w-52 bg-white rounded-md shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
            <div class="py-2">
              <div v-if="pending" class="px-4 py-2 text-sm text-gray-400 italic">Memuat kategori...</div>
              
              <!-- Looping Kategori dari Database -->
              <NuxtLink 
                v-else
                v-for="cat in categories" 
                :key="cat.id"
                :to="`/menu/category/${cat.id}`" 
                class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors"
              >
                {{ cat.name }}
              </NuxtLink>
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
</template>

<script setup>
const baseURL = "https://kecilung-resto.vercel.app/api";
const { data: response, pending } = useFetch(`${baseURL}/categories`, {
  lazy: import.meta.client
});
const categories = computed(() => response.value?.data || []);
</script>