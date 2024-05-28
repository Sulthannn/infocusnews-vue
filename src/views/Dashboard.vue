<script setup>
import { ref, onMounted } from 'vue';
import api from '../api';
const berita = ref([]);
const fetchDataBerita = async () => {
    try {
        const response = await api.get('/api/news');
        berita.value = response.data.data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

onMounted(() => {
    fetchDataBerita();
});
</script>

<template>
  <main class="container mx-auto px-8">

    <div v-if="berita.length > 0">
      
      <div class="flex justify-start items-start py-8 mb-8">
        <div class="flex items-start">
          <img :src="berita[0].image" alt="Berita Terbaru" class="w-1/3 object-cover object-center rounded-xl transition-transform duration-300 transform hover:scale-105 mr-8">
          <h2 class="font-serif text-3xl font-bold text-gray-800 cursor-pointer transition-colors duration-300 hover:text-gray-600 mt-20 pr-52">{{ berita[0].title }}</h2>
        </div>
      </div>

      <div class="mb-8 text-center">
        <input type="text" class="w-1/3 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-red-700 transition-colors duration-300" placeholder="Looking for news...">
      </div>
      <div class="flex justify-between items-center mb-10">
        <h2 class="text-xl font-bold text-gray-800 text-left">MORE NEWS</h2>
        <a href="#" class="text-red-500 font-medium hover:no-underline mr-4">See All</a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(news, index) in berita.slice(1)" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden mb-8 relative cursor-pointer">
          <img :src="news.image" alt="Berita Image" class="w-full h-72 object-cover object-center transition-transform duration-200 transform hover:scale-105 ">
          <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-75 text-white p-4">
            <h3 class="text-lg font-semibold mb-2 hover:text-gray-300">{{ news.title }}</h3>
          </div>
        </div>
      </div>

    </div>

  </main>

  <footer class="text-center py-4">
    <hr class="border-gray-300 my-4">
    <p class="text-gray-500 text-sm mt-2">&copy; Sulthan Izza Falqahi</p>
  </footer>

</template>