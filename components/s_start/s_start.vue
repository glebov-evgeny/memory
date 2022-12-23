<template>
  <section class="s_start">
    <div class="container s_start__container">
      <AButton :btnLabel="btnLabel" :btnClass="btnClass" @btnClick="btnClickStart" />
    </div>
  </section>
</template>

<script>

import './s_start.scss';
import AButton from '@/components/_ui/a_button/a_button';

export default {
  name: 's_start',
  props: {},
  components: {
    AButton,
  },
  data() {
    return {
      btnLabel: 'старт',
      btnClass: '_absolute',
    };
  },
  methods: {
    btnClickStart() {
      this.$emit('btnClickStart');
    },
  },
};
</script>
