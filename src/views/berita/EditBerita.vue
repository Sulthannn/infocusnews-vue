<script setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from 'vue-router';
import api from "../../api";

    const router = useRouter();
    const route = useRoute();
    const image = ref("");
    const title = ref("");
    const slug = ref("");
    const excerpt = ref("");
    const content = ref("");
    const errors = ref([]);

    onMounted( async () => {
        await api.get(`/api/news/${route.params.id}`)
        .then(response => {
            title.value = response.data.data.title
            slug.value = response.data.data.slug
            excerpt.value = response.data.data.excerpt
            content.value = response.data.data.content
        });
    })

    const handleFileChange = (e) => {
        image.value = e.target.files[0];
    };

    const updateBerita = async () => {
        let formData = new FormData();
        formData.append("image", image.value);
        formData.append("title", title.value);
        formData.append("slug", slug.value);
        formData.append("excerpt", excerpt.value);
        formData.append("content", content.value);
        formData.append("_method", "PATCH");
        await api.post(`/api/news/${route.params.id}`, formData)
        .then(() => {
            router.push({ path: "/berita" });
        })
        .catch((error) => {
            errors.value = error.response.data;
        });
    };
</script>

<template>
    <section class="max-w-3xl mx-auto">
        <div class="bg-white rounded-2xl shadow-soft p-8">
            <h2 class="text-2xl font-bold mb-6 text-gray-800">Edit Berita</h2>
            <form @submit.prevent="updateBerita" class="space-y-6">
                <div>
                    <label for="image" class="block mb-2 text-gray-700 font-medium">Image</label>
                    <input type="file" id="image" @change="handleFileChange" class="block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <div v-if="errors.image" class="mt-2 text-red-600 text-sm">
                        <span>{{ errors.image[0] }}</span>
                    </div>
                </div>
                <div>
                    <label for="title" class="block mb-2 text-gray-700 font-medium">Title <span class="text-red-500">*</span></label>
                    <input type="text" id="title" v-model="title" placeholder="Title Post" class="block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                    <div v-if="errors.title" class="mt-2 text-red-600 text-sm">
                        <span>{{ errors.title[0] }}</span>
                    </div>
                </div>
                <div>
                    <label for="slug" class="block mb-2 text-gray-700 font-medium">Slug <span class="text-red-500">*</span></label>
                    <input type="text" id="slug" v-model="slug" placeholder="Slug Post" class="block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                    <div v-if="errors.slug" class="mt-2 text-red-600 text-sm">
                        <span>{{ errors.slug[0] }}</span>
                    </div>
                </div>
                <div>
                    <label for="excerpt" class="block mb-2 text-gray-700 font-medium">Excerpt <span class="text-red-500">*</span></label>
                    <input type="text" id="excerpt" v-model="excerpt" placeholder="Excerpt Post" class="block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent" />
                    <div v-if="errors.excerpt" class="mt-2 text-red-600 text-sm">
                        <span>{{ errors.excerpt[0] }}</span>
                    </div>
                </div>
                <div>
                    <label for="content" class="block mb-2 text-gray-700 font-medium">Content <span class="text-red-500">*</span></label>
                    <textarea id="content" v-model="content" rows="5" placeholder="Content Post" class="block w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent required"></textarea>
                    <div v-if="errors.content" class="mt-2 text-red-600 text-sm">
                        <span>{{ errors.content[0] }}</span>
                    </div>
                </div>
                <div class="flex justify-between">
                    <router-link :to="{ name: 'berita.index' }" class="px-6 py-2 rounded-xl bg-gray-600 text-white hover:bg-gray-700">Back</router-link>
                    <button type="submit" class="px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700">Save</button>
                </div>
            </form>
        </div>
    </section>
</template>