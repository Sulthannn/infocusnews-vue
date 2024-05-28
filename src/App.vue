<template>
 
  <nav class="navbar bg-gray-100 p-4 fixed top-0 z-50 w-full">
    <div class="container px-8 mx-auto">
      <div class="flex justify-between items-center">
        <div class="flex items-center font-extrabold">
          <router-link :to="{ name: 'dashboard' }" class="text-gray-800 mr-4 hover:text-gray-500 focus:text-gray-500">Dashboard</router-link>
          <router-link :to="{ name: 'berita.index' }" class="text-gray-800 mr-4 hover:text-gray-500 focus:text-gray-500">News</router-link>
        </div>
        <div class="flex items-center">
          <a href="#" class="mr-4">
            <img :src="$profileImage" alt="Instagram Profile" class="w-8 h-8 rounded-full object-cover hover:opacity-75 transition-opacity duration-300">
          </a>
        </div>
      </div>
    </div>
  </nav>

  <div class="flex items-center justify-center flex-grow mt-20">
     <h1 class="text-red-700 text-5xl font-black text-center font-serif">INFOCUS NEWS</h1>
  </div>

  <div class="pt-8"></div>

  <router-view></router-view>

</template>