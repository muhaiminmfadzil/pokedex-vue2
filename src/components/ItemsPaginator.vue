<template>
  <div class="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
    <div class="flex justify-between flex-1 sm:hidden">
      <button class="relative inline-flex items-center px-4 py-2 text-sm font-medium border rounded-md w-[25%] justify-center" :class="[hasPrevious ? 'bg-blue-800 text-blue-50' : 'bg-gray-100 text-gray-300']" :disabled="!hasPrevious" @click="onClickPrev">Previous</button>
      <button class="relative inline-flex items-center px-4 py-2 text-sm border rounded-md whitespace-nowrap w-[25%] justify-center" @click="togglePaginateMenu" v-click-outside="closePaginationMenu">
        {{ currentPage }} of {{ totalPage }}
        <transition enter-active-class="duration-200 ease-out" enter-from-class="transform opacity-0" enter-to-class="opacity-100" leave-active-class="duration-200 ease-in" leave-from-class="opacity-100" leave-to-class="transform opacity-0">
          <ul v-if="showPaginateMenu" ref="menuList" class="absolute h-[50dvh] overflow-auto text-gray-700 inset-x-0 bottom-11 dropdown-menu rounded-md bg-blue-100 shadow-md">
            <li v-for="x in totalPage" :key="x">
              <button :data-page="x" class="w-full px-4 py-2 whitespace-nowrap" :class="[isCurrentPage(x) ? 'bg-blue-600 text-white' : 'hover:bg-blue-200']" :disabled="isCurrentPage(x)" @click="onClickPage(x)">{{ x }}</button>
            </li>
          </ul>
        </transition>
      </button>
      <button class="relative inline-flex items-center px-4 py-2 text-sm font-medium border rounded-md w-[25%] justify-center" :class="[hasNext ? 'bg-blue-800 text-blue-50' : 'bg-gray-100 text-gray-300']" :disabled="!hasNext" @click="onClickNext">Next</button>
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
          <button class="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-l-md ring-1 ring-inset ring-gray-300" :class="[hasPrevious ? 'hover:bg-gray-50 focus:outline-offset-0 focus:z-20' : 'text-gray-300 bg-gray-100']" :disabled="!hasPrevious" @click="onClickPrev">
            <span class="sr-only">Previous</span>
            <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
            </svg>
          </button>
          <div v-for="(paginate, index) in paginationNumbers" :key="`${paginate}-${index}`">
            <button
              v-if="isNumber(paginate)"
              class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 transition duration-200 ease-in delay-150 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ring-1 ring-inset ring-gray-300"
              :class="[{ 'bg-blue-600 text-white hover:bg-blue-600 focus:z-20 focus:outline-offset-0': isCurrentPage(paginate) }]"
              :disabled="isCurrentPage(paginate)"
              @click="onClickPage(paginate)"
            >
              {{ paginate }}
            </button>
            <button v-else class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900" disabled>
              {{ paginate }}
            </button>
          </div>
          <button class="relative inline-flex items-center px-2 py-2 text-gray-400 rounded-r-md ring-1 ring-inset ring-gray-300" :class="[hasNext ? 'hover:bg-gray-50 focus:outline-offset-0 focus:z-20' : 'text-gray-300 bg-gray-100']" :disabled="!hasNext" @click="onClickNext">
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
import ClickOutside from 'vue-click-outside';

export default {
  directives: {
    ClickOutside,
  },
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
  data() {
    return {
      showPaginateMenu: false,
    };
  },
  computed: {
    totalPage() {
      if (this.totalCount === 0) return 1;

      return Math.ceil(this.totalCount / this.pageSize);
    },
    hasPrevious() {
      return this.currentPage !== 1;
    },
    hasNext() {
      return this.currentPage !== this.totalPage;
    },
    fromCounter() {
      return this.offset + 1;
    },
    toCounter() {
      return this.offset + this.pageSize;
    },
    paginationNumbers() {
      const getRange = (start, end) => {
        const length = end - start + 1;
        return Array(length)
          .fill()
          .map((_, i) => start + i);
      };

      const clamp = (number, lower, upper) => {
        return Math.min(Math.max(number, lower), upper);
      };
      // Data preparation
      let currentPage = this.currentPage;
      const pageCount = this.totalPage;
      let pagesShown = 9;
      const MINIMUM_PAGE_SIZE = 5;
      // Data validation
      let delta;
      currentPage = clamp(currentPage, 1, pageCount);
      pagesShown = clamp(pagesShown, MINIMUM_PAGE_SIZE, pageCount);
      const centerPagesShown = pagesShown - 5;
      const boundaryPagesShown = pagesShown - 3;

      if (pageCount <= pagesShown) {
        delta = pagesShown;
      } else {
        delta = currentPage < boundaryPagesShown || currentPage > pageCount - boundaryPagesShown ? boundaryPagesShown : centerPagesShown;
      }

      const range = {
        start: Math.round(currentPage - delta / 2),
        end: Math.round(currentPage + delta / 2),
      };

      if (range.start - 1 === 1 || range.end + 1 === pageCount) {
        range.start += 1;
        range.end += 1;
      }
      let pages = currentPage > delta ? getRange(Math.min(range.start, pageCount - delta), Math.min(range.end, pageCount)) : getRange(1, Math.min(pageCount, delta + 1));

      if (currentPage > pageCount - boundaryPagesShown && pageCount > pagesShown) {
        pages = getRange(pageCount - delta, pageCount);
      }

      const withDots = (value, pair) => (pages.length + 1 !== pageCount ? pair : [value]);
      const lastPage = pages[pages.length - 1];

      if (pages[0] !== 1) {
        pages = withDots(1, [1, '...']).concat(pages);
      }

      if (lastPage && lastPage < pageCount) {
        pages = pages.concat(withDots(pageCount, ['...', pageCount]));
      }

      return pages;
    },
  },
  methods: {
    onClickNext() {
      this.$emit('update:currentPage', this.currentPage + 1);
    },
    onClickPrev() {
      this.$emit('update:currentPage', this.currentPage - 1);
    },
    isCurrentPage(value) {
      return this.currentPage === value;
    },
    isNumber(value) {
      return typeof value === 'number';
    },
    onClickPage(value) {
      this.$emit('update:currentPage', value);
    },
    togglePaginateMenu() {
      this.showPaginateMenu = !this.showPaginateMenu;
      if (this.showPaginateMenu) {
        // Wait for the Vue to finish rendering and then scroll to the selected page
        this.$nextTick(() => {
          const menuList = this.$refs.menuList;
          if (menuList) {
            const selectedPageButton = menuList.querySelector(`button[data-page="${this.currentPage}"]`);
            if (selectedPageButton) {
              selectedPageButton.scrollIntoView({ block: 'center' });
            }
          }
        });
      }
    },
    closePaginationMenu() {
      this.showPaginateMenu = false;
    },
  },
};
</script>

<style scoped>
</style>