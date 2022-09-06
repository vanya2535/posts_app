<template>
  <header
    class="absolute left-0 right-0 top-0 py-3 px-12 bg-gray-800 shadow-xl"
  >
    <div
      class="max-w-screen-xl mx-auto flex justify-center text-white text-xs sm:text-sm lg:text-base font-medium"
    >
      <router-link class="mr-10" to="/"> Новости </router-link>
      <router-link to="/post/create"> Опубликовать новость </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
