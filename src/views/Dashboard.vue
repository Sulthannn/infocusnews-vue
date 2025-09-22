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
  <div>
    <div v-if="berita.length > 0" class="space-y-10">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div class="lg:col-span-2 group relative overflow-hidden rounded-2xl shadow-soft">
          <img :src="berita[0].image" alt="Berita Terbaru" class="w-full h-80 md:h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <h2 class="absolute bottom-4 left-4 right-4 text-white text-2xl md:text-3xl font-bold drop-shadow-lg">
            {{ berita[0].title }}
          </h2>
        </div>
        <div class="space-y-4">
          <input type="text" placeholder="Search news..." class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
          <div class="bg-white rounded-2xl p-5 shadow-soft">
            <div class="flex items-center justify-between">
              <h3 class="text-lg font-semibold text-gray-800">More News</h3>
              <router-link :to="{ name: 'berita.index' }" class="text-primary-600 hover:text-primary-700 text-sm">See All</router-link>
            </div>
            <ul class="mt-4 space-y-3">
              <li v-for="(n, i) in berita.slice(1, 6)" :key="i" class="text-sm text-gray-700 line-clamp-2">{{ n.title }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <article v-for="(news, index) in berita.slice(1)" :key="index" class="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-shadow">
          <div class="relative overflow-hidden">
            <img :src="news.image" alt="Berita Image" class="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-gray-900 line-clamp-2">{{ news.title }}</h3>
          </div>
        </article>
      </div>
    </div>

    <div v-else class="text-center text-gray-500 py-20">No news available.</div>
  </div>

</template>