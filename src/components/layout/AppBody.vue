<template>
  <main class="w-full h-full pt-10 lg:pt-12">
    <div
      class="max-w-screen-xl h-full mx-auto bg-gray-100 px-2 lg:px-8 py-2 shadow-lg"
    >
      <slot />
    </div>
  </main>
</template>

<script>
export default {
  name: 'AppBody'
}
</script>
