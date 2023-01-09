<template>
  <form class="form__update" v-on:submit.prevent="addCard()">
    <input class="form__update-input" placeholder="word" v-model="word" />
    <input class="form__update-input" placeholder="translate" v-model="translate" />
    <button type="submit" class="form__update-button">Отправить</button>
  </form>
</template>

<script>
import {
  getFirestore, collection, onSnapshot, query, setDoc, doc,
} from 'firebase/firestore';
import './s_form_update.scss';

export default {
  name: 'SFormUpdate',
  props: {},
  components: {},
  data() {
    return {
      cards: [],
      word: '',
      translate: '',
    };
  },
  methods: {
    async addCard() {
      const db = getFirestore();
      await setDoc(doc(db, 'words', `${this.cards.length + 1}`), {
        word: this.word,
        translate: this.translate,
        id: this.cards.length + 1,
      });
    },
    fetchCards() {
      const db = getFirestore();
      const getData = query(collection(db, 'words'));
      onSnapshot(getData, (querySnapshot) => {
        const arr = [];
        querySnapshot.forEach((currentDoc) => {
          arr.push(currentDoc.data());
        });
        this.cards = arr;
      });
    },
  },
  mounted() {
    this.fetchCards();
  },
};
</script>
