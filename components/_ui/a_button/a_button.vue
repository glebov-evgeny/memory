<template>
  <button class="button" :class="btnClass"  @click="startTest">{{ btnLabel }}</button>
</template>

<script>
import './a_button.scss';

export default {
  name: 'AButton',
  props: {
    btnLabel: {
      type: String,
    },
    btnClass: {
      type: String,
      default: 'clear',
    },
  },
  methods: {
    startTest() {
      this.$emit('btnClick');
    },
  },
};
</script>
