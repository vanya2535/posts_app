<template>
  <div id="app" class="w-screen h-screen bg-slate-500">
    <AppHeader />
    <AppBody>
      <router-view />
    </AppBody>
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader'
import AppBody from '@/components/layout/AppBody'

export default {
  name: 'App',
  components: { AppHeader, AppBody }
}
</script>
