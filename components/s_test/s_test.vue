<template>
  <div class="s_test">
    <div class="container s_test__container">
      <h1 class="s_test__title">Переведите:</h1>
      <ACard/>
    </div>
  </div>
</template>

<script>

import './s_test.scss';
import ACard from '@/components/_ui/a_card/a_card.vue';

export default {
  name: 's_test',
  props: {},
  components: {
    ACard,
  },
  data() {
    return {};
  },
  methods: {
    startTest() {
      this.$emit('startTest');
    },
  },
};
</script>
