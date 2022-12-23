<template>
  <div class="select">
    <div class="select__toggle" @click="toggleListHandler">
      <p class="select__current" :data-current="regionsCurrent">{{ regionsCurrentText }}</p>
    </div>
    <div class="select__list" :class="toggleList ? '_active' : ''">
      <p
        v-for="regions in regionsList"
        class="select__list-option"
        :key="regions.code"
        @click="toggleOption(regions.code)"
      >
        {{ regions.text }}
      </p>
    </div>
  </div>
</template>

<script>
import './m_select.scss';

export default {
  name: 'MCardSelect',
  props: {
    regionsList: {
      type: Array,
    },
    regionsCurrent: {
      type: String,
    },
    regionsCurrentText: {
      type: String,
    },
    toggleList: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    toggleListHandler(event) {
      this.$emit('toggleListHandler', event);
    },
    toggleOption(codeRegion) {
      this.$emit('toggleOption', codeRegion);
    },
  },
};
</script>
