<template>
  <main class="main">
    <SStart @btnClickStart="btnClickStart" />
  </main>
</template>

<script>
// import {
//   getFirestore, setDoc, doc, collection, onSnapshot, query, where, deleteDoc,
// } from 'firebase/firestore';

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
