<template>
  <main class="main">
    <SStart @btnClickStart="btnClickStart" />
  </main>
</template>

<script>
export default {
  name: 'pagemain',
  components: {},
  data() {
    return {};
  },
  mounted() {},

  watch: {},
  methods: {
    btnClickStart() {
      this.$router.push('/test');
    },
  },
  computed: {},
};
</script>
