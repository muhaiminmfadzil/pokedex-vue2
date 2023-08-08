<template>
  <div class="bg-white bg-opacity-30 rounded-xl">
    <div class="flex justify-start pt-4 pl-4">
      <button class="px-4 py-2 text-sm font-semibold transition duration-200 ease-in delay-100 rounded-l-lg" :class="[isSelected('radar') ? 'text-white bg-blue-600' : 'text-blue-500 ring-1 ring-inset ring-blue-300']" :disabled="isSelected('radar')" @click="onSelectChart('radar')">Radar</button>
      <button class="px-4 py-2 text-sm font-semibold transition duration-200 ease-in delay-100 rounded-r-lg" :class="[isSelected('bar') ? 'text-white bg-blue-600' : 'text-blue-500 ring-1 ring-inset ring-blue-300']" :disabled="isSelected('bar')" @click="onSelectChart('bar')">Bar</button>
    </div>
    <apex-chart :key="chartKey" :height="height" :options="chartOptions" :series="dataSeries"></apex-chart>
  </div>
</template>

<script>
export default {
  props: {
    stats: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedChart: 'radar',
      chartKey: 0,
    };
  },
  mounted() {
    window.addEventListener('resize', this.onViewportChanged);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onViewportChanged);
  },
  computed: {
    height() {
      this.chartKey;
      return window.screen.width < 500 ? '300' : '500';
    },
    isHorizontalBar() {
      return this.height !== '300';
    },
    dataSeries() {
      return [
        {
          name: 'Base value',
          data: this.stats.map((stat) => stat.base_stat),
        },
      ];
    },
    chartOptions() {
      return {
        dataLabels: {
          enabled: false,
          style: {
            fontSize: '14px',
            fontWeight: 'bold',
            colors: ['#2563eb'],
          },
          background: {
            enabled: true,
            foreColor: '#FFF',
            borderColor: null,
            borderRadius: 2,
            padding: 5,
          },
        },
        chart: {
          type: this.selectedChart,
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: this.stats.map((stat) => stat.stat.name.toUpperCase()),
          labels: {
            show: true,
            style: {
              colors: this.stats.map(() => '#2563eb'),
              fontSize: '11px',
              fontWeight: 500,
            },
            rotate: -45,
          },
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: this.isHorizontalBar,
          },
          radar: {
            polygons: {
              fill: {
                colors: ['#eff6ff', '#fff'],
              },
            },
          },
        },
      };
    },
  },
  methods: {
    onSelectChart(value) {
      this.selectedChart = value;
      this.chartKey++;
    },
    isSelected(value) {
      return this.selectedChart === value;
    },
    onViewportChanged() {
      this.chartKey++;
    },
  },
};
</script>

<style scoped>
</style>