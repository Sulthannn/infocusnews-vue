<template>
  <header class="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-100">
    <nav class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-6">
          <router-link :to="{ name: 'dashboard' }" class="text-gray-900 font-semibold hover:text-primary-600">Dashboard</router-link>
          <router-link :to="{ name: 'berita.index' }" class="text-gray-900 font-semibold hover:text-primary-600">News</router-link>
        </div>
        <div class="flex items-center space-x-3">
          <img :src="$profileImage" alt="Profile" class="w-9 h-9 rounded-full object-cover ring-2 ring-gray-200" />
        </div>
      </div>
    </nav>
  </header>

  <section class="max-w-7xl mx-auto px-6 pt-10">
    <h1 class="text-4xl md:text-5xl font-black tracking-tight font-serif text-primary-700">INFOCUS NEWS</h1>
  </section>

  <main class="max-w-7xl mx-auto px-6 py-8">
    <router-view />
  </main>

  <footer class="max-w-7xl mx-auto px-6 py-8 text-center text-sm text-gray-500 border-t border-gray-100">
    © {{ new Date().getFullYear() }} Infocus News
  </footer>
</template>