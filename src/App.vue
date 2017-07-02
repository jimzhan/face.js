<template>
  <div>
    <main class="row medium-10 large-9 columns">
      <transition name="router-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
</style>