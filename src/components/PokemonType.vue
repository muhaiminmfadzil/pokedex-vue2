<template>
  <div v-if="type" class="inline-flex items-center px-1 bg-white border rounded-lg" :class="[borderColor]">
    <img v-if="getTypeIcon" :src="getTypeIcon" alt="" class="w-5 mr-1" />
    <div class="font-sm" :class="[color]">{{ typeName }}</div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: Object,
      default: null,
    },
  },
  computed: {
    typeName() {
      return this.type?.name;
    },
    color() {
      return `${this.typeName}-color`;
    },
    borderColor() {
      return `${this.typeName}-border-color`;
    },
    getTypeIcon() {
      try {
        const icon = require(`@/assets/icons/${this.typeName}_type_icon.png`);
        return icon;
      } catch (error) {
        return null;
      }
    },
  },
};
</script>

<style scoped>
.normal-color {
  color: #9099a1;
}
.normal-border-color {
  border-color: #9099a1;
}
.fighting-color {
  color: #ce4069;
}
.fighting-border-color {
  border-color: #ce4069;
}
.flying-color {
  color: #90a8dd;
}
.flying-border-color {
  border-color: #90a8dd;
}
.poison-color {
  color: #ab6ac8;
}
.poison-border-color {
  border-color: #ab6ac8;
}
.ground-color {
  color: #d97746;
}
.ground-border-color {
  border-color: #d97746;
}
.rock-color {
  color: #c7b78b;
}
.rock-border-color {
  border-color: #c7b78b;
}
.bug-color {
  color: #90c12c;
}
.bug-border-color {
  border-color: #90c12c;
}
.ghost-color {
  color: #5369ac;
}
.ghost-border-color {
  border-color: #5369ac;
}
.steel-color {
  color: #5a8ea1;
}
.steel-border-color {
  border-color: #5a8ea1;
}
.fire-color {
  color: #ff9c54;
}
.fire-border-color {
  border-color: #ff9c54;
}
.water-color {
  color: #4c90d5;
}
.water-border-color {
  border-color: #4c90d5;
}
.grass-color {
  color: #62bb5b;
}
.grass-border-color {
  border-color: #62bb5b;
}
.electric-color {
  color: #f3d23b;
}
.electric-border-color {
  border-color: #f3d23b;
}
.psychic-color {
  color: #f97176;
}
.psychic-border-color {
  border-color: #f97176;
}
.ice-color {
  color: #73cec0;
}
.ice-border-color {
  border-color: #73cec0;
}
.dragon-color {
  color: #0c6dc4;
}
.dragon-border-color {
  border-color: #0c6dc4;
}
.dark-color {
  color: #5a5366;
}
.dark-border-color {
  border-color: #5a5366;
}
.fairy-color {
  color: #ec8fe6;
}
.fairy-border-color {
  border-color: #ec8fe6;
}
.unknown-color {
  color: black;
}
.shadow-color {
  color: black;
}
</style>