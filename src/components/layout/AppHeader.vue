<template>
  <header
    class="absolute w-3/4 sm:w-2/3 left-1/2 -translate-x-1/2 rounded-lg rounded-t-none shadow top-0 flex justify-center bg-indigo-800 p-2 text-white"
  >
    <router-link to="/" class="text-xs md:text-xl font-medium mr-10">
      Новости
    </router-link>
    <router-link class="text-xs md:text-xl font-medium" to="/post/create">
      Создать новость
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
