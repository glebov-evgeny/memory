<template>
  <main class="main admin">
    <div class="container">
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
