<script setup>
import { ref, onMounted } from 'vue';
import api from '../../api';

  const berita = ref([]);
  const fetchDataBerita = async () => {
    await api.get('/api/news')
    .then(response => {
    berita.value = response.data.data.data
      });
  }

  onMounted(() => {
    fetchDataBerita();
    });

  const deleteBerita = async (id) => {
    await api.delete(`/api/news/${id}`)
    .then(() => {
    fetchDataBerita();
  })
};
</script>

<template>
  <section class="space-y-6">
    <div class="flex items-center justify-between">
      <h2 class="text-xl font-bold text-gray-900">News</h2>
      <router-link :to="{ name: 'berita.createberita' }" class="inline-flex items-center px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 shadow-soft">Add</router-link>
    </div>

    <div v-if="berita.length === 0" class="text-center text-gray-500 py-16">Tidak ada data!</div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <article v-for="(post, index) in berita" :key="index" class="bg-white rounded-2xl overflow-hidden shadow-soft">
        <img :src="post.image" class="w-full h-48 object-cover" alt="Post Image" />
        <div class="p-4 space-y-2">
          <h3 class="font-semibold text-gray-900 line-clamp-2">{{ post.title }}</h3>
          <p class="text-xs text-gray-500">/{{ post.slug }}</p>
          <p class="text-sm text-gray-700 line-clamp-2">{{ post.excerpt }}</p>
          <div class="pt-2 flex gap-2">
            <router-link :to="{ name: 'berita.editberita', params: { id: post.id } }" class="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs hover:bg-blue-700">Update</router-link>
            <button @click.prevent="deleteBerita(post.id)" class="px-3 py-1.5 rounded-lg bg-red-600 text-white text-xs hover:bg-red-700">Delete</button>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>