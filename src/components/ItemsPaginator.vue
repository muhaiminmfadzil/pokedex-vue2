<template>
  <div class="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
    <div class="flex justify-between flex-1 sm:hidden">
      <button class="relative inline-flex items-center px-4 py-2 text-sm font-medium border rounded-md" :class="[hasPrevious ? 'bg-indigo-800 text-indigo-50' : 'bg-gray-100 text-gray-300']" :disabled="!hasPrevious" @click="updatePage(-1)">Previous</button>
      <button class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium border rounded-md" :class="[hasNext ? 'bg-indigo-800 text-indigo-50' : 'bg-gray-100 text-gray-300']" :disabled="!hasNext" @click="updatePage(1)">Next</button>
    </div>
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          <span class="font-medium">{{ fromCounter }}</span>
          to
          <span class="font-medium">{{ toCounter }}</span>
          of
          <span class="font-medium">{{ totalCount }}</span>
          results
        </p>
      </div>
      <div>
        <nav class="inline-flex -space-x-px rounded-md shadow-sm isolate" aria-label="Pagination">
          <button class="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-l-md ring-1 ring-inset ring-gray-300" :class="[hasPrevious ? 'hover:bg-gray-50 focus:outline-offset-0 focus:z-20' : 'text-gray-300 bg-gray-100']" :disabled="!hasPrevious" @click="updatePage(-1)">
            <span class="sr-only">Previous</span>
            <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
            </svg>
          </button>
          <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
          <button aria-current="page" class="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold bg-indigo-800 text-indigo-50 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</button>
          <button class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</button>
          <button class="relative items-center hidden px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</button>
          <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
          <button class="relative items-center hidden px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</button>
          <button class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</button>
          <button class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</button>
          <button class="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-r-md ring-1 ring-inset ring-gray-300" :class="[hasNext ? 'hover:bg-gray-50 focus:outline-offset-0 focus:z-20' : 'text-gray-300 bg-gray-100']" :disabled="!hasNext" @click="updatePage(1)">
            <span class="sr-only">Next</span>
            <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalCount: {
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 20,
    },
    offset: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    getTotalPage() {
      if (this.totalCount === 0) return 1;

      return Math.ceil(this.totalCount / this.pageSize);
    },
    hasPrevious() {
      return this.currentPage !== 1;
    },
    hasNext() {
      return this.currentPage !== this.getTotalPage;
    },
    fromCounter() {
      return this.offset + 1;
    },
    toCounter() {
      return this.offset + this.pageSize;
    },
  },
  methods: {
    updatePage(value) {
      this.$emit('update:currentPage', this.currentPage + value);
    },
  },
};
</script>

<style scoped>
</style>