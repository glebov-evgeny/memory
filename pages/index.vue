<template>
  <div class="wrapper">
    <main class="main">
      <SStart v-if="showStartBtn" @btnClickStart="btnClickStart"/>
      <STest v-if="showStartBtn === false"/>
    </main>
  </div>
</template>

<script>
// import {
//   getFirestore, setDoc, doc, collection, onSnapshot, query, where, deleteDoc,
// } from 'firebase/firestore';

export default {
  name: 'pagemain',
  components: {},
  data() {
    return {
      showStartBtn: true,
      // btnLabel: 'старт',
      // btnClass: '_marginTop',
    };
  },
  mounted() {
  },

  watch: {

  },
  methods: {
    btnClickStart() {
      this.showStartBtn = false;
      console.log('клик');
    },
  },
  computed: {},
};
</script>
