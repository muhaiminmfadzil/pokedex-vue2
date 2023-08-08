<template>
  <div class="bg-white bg-opacity-30 sm:w-10/12 mx-auto rounded-xl h-[45dvh]">
    <apex-chart type="radar" height="100%" :options="chartOptions" :series="dataSeries"></apex-chart>
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
  computed: {
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
          type: 'radar',
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
          },
        },
        plotOptions: {
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
};
</script>

<style scoped>
</style>