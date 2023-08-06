<template>
  <div class="min-h-screen bg-blue-200">
    <div class="max-w-4xl p-4 mx-auto">
      <h5>Hello {{ id }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
};
</script>

<style scoped>
</style>