<template>
  <main class="admin">
    <div class="container">
      <h2>...</h2>
      <SFormUpdate />
    </div>
  </main>
</template>

<script>
import SFormUpdate from '~/components/s_form_update/s_form_update';

export default {
  name: 'pageadmin',
  components: {
    SFormUpdate,
  },
  // middleware: 'auth',
  data() {
    return {};
  },
  mounted() {},
  watch: {},
  methods: {},
};
</script>
