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
<div class="mt-5 mb-5 px-8">
  <div class="flex justify-between items-center mb-4">
    <router-link :to="{ name: 'berita.createberita' }" class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded shadow">Add</router-link>
    <div class="text-red-500" v-if="berita.length === 0">Tidak ada data!</div>
  </div>
  <div class="overflow-x-auto">
    <table class="min-w-full bg-gray-100">
      <thead class="bg-gray-300 text-gray-800 font-semibold">
        <tr>
          <th class="px-4 py-2">Image</th>
          <th class="px-4 py-2">Title</th>
          <th class="px-2 py-2">Slug</th>
          <th class="px-2 py-2">Excerpt</th>
          <th class="px-4 py-2">Content</th>
          <th class="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody class="bg-gray-100 text-gray-700">
        <tr v-for="(post, index) in berita" :key="index">
          <td class="border px-4 py-2 text-center">
            <img :src="post.image" class="w-32 h-auto rounded-lg mx-auto" alt="Post Image">
          </td>
          <td class="border px-4 py-2 text-center max-w-xs">{{ post.title }}</td>
          <td class="border px-2 py-2 text-center max-w-xs">{{ post.slug }}</td>
          <td class="border px-2 py-2 text-center max-w-xs">{{ post.excerpt }}</td>
          <td class="border px-4 py-2 text-center">{{ post.content }}</td>
          <td class="border px-4 py-2 text-center">
            <div class="flex justify-center items-center">
              <router-link :to="{ name: 'berita.editberita', params:{id: post.id} }" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-full shadow text-xs">Update</router-link>
              <button @click.prevent="deleteBerita(post.id)" class="bg-red-500 hover:bg-red-600 text-white py-2 px-3 rounded-full shadow ml-2 text-xs">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

  <footer class="text-center py-4">
    <hr class="border-gray-300 my-4">
    <p class="text-gray-500 text-sm mt-2">&copy; Sulthan Izza Falqahi</p>
  </footer>

</template>