<template>
  <div class="flex flex-col md:flex-row px-[8%] sm:px-[15%] mt-12 md:mt-24">

    <div class="flex flex-col md:max-w-[52vw] pr-0 md:pr-[10vw]">
      <h3 class="font-black italic text-espresso font-playfair text-left text-18-19-24-30">{{ title }}</h3>

      <ul class="text-left text-14-15-16-20 pt-0 md:pt-[35px]">
        <li class="pt-[10px] md:pt-[20px]" v-for="(label, index) in completeLabels" :key="index">
          {{ label }}
        </li>
      </ul>
    </div>


    <div :class="['flex relative mt-12', containerClass]">
      <apexchart
          type="radialBar"
          :options="computedChartOptions"
          :series="series"
          :width="width"
          :height="height"
      />

      <!-- Légende en dessous -->
      <div class="flex justify-around w-[70vw] sm:w-[30vw] mt-4">
        <div
            v-for="(label, idx) in labels"
            :key="idx"
            class="flex items-center space-x-2"
            :class="legendItemClass"
        >
        <span
            class="w-4 h-4 rounded"
            :style="{ backgroundColor: colors[idx] }"
        ></span>
          <span :class="legendLabelClass">{{ label }} ({{ series[idx] }}%)</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: "CompetenceChartComponent",
  components: {apexchart: VueApexCharts},
  props: {
    series: {
      type: Array,
      required: true,
      validator: (val) => val.length === 4 && val.every((v) => typeof v === "number"),
    },
    title: {
      type: String,
      required: true,
    },
    completeLabels: {
      type: Array,
    },
    total: {
      type: Number,
      required: true,
    },
    labels: {
      type: Array,
      default: () => ["AC1", "AC2", "AC3", "AC4"],
      validator: (val) => val.length === 4,
    },
    colors: {
      type: Array,
      default: () => ["#5A3E2B", "#a67c52", "#c0a980", "#e8d9c4"],
      validator: (val) => val.length === 4,
    },
    width: {
      type: [String, Number],
      default: "w-[200px] h-[200px] md:w-[250px] md:h-[250px]",
    },
    height: {
      type: [String, Number],
      default: "w-[200px] h-[200px] md:w-[250px] md:h-[250px]",
    },

    containerClass: {
      type: String,
      default: "w-[200px] h-[200px] md:w-[250px] md:h-[250px] mx-auto mt-24 md:mx-0 flex-col justify-center items-center",
    },
    centerTextClass: {
      type: String,
      default: "text-espresso font-bold italic",
    },
    titleClass: {
      type: String,
      default: "text-lg -mt-[70px] md:-mt-[80px] lg:-mt-[90px]",
    },
    percentClass: {
      type: String,
      default: "text-2xl",
    },
    legendItemClass: {
      type: String,
      default: "",
    },
    legendLabelClass: {
      type: String,
      default: "text-espresso font-semibold text-14-15-18-22",
    },
  },
  computed: {
computedChartOptions() {
  return {
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '45%',
        },
        track: {
          background: '#f1e8d9',
        },
        stroke: {
          lineCap: 'round',
          width: 50,
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: '20px',
            fontWeight: 900,
            offsetY: -10,
            fontFamily: 'Playfair Display, serif',
          },
          value: {
            show: true,
            fontSize: '20px',
            fontWeight: 900,
            offsetY: 10,
            fontFamily: 'Playfair Display, serif',
            formatter: () => `${this.total} %`
          },
          total: {
            show: true,
            label: 'Total',
            fontSize: '20px',
            fontWeight: 900,
            fontFamily: 'Playfair Display, serif',
            formatter: () => `${this.total} %`
          }
        }
      }
    },
    labels: this.labels,
    colors: this.colors,
  };
}
  },
};
</script>

<style scoped>
.text-espresso {
  color: #5A3E2B;
}
</style>
