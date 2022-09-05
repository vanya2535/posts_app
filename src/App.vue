<template>
  <div id="app" class="w-screen h-screen pt-11 bg-slate-100">
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
import AppHeader from './components/layout/AppHeader'

export default {
  name: 'App',
  components: { AppHeader }
}
</script>
