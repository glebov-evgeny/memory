<template>
  <div class="s_test">
    <div v-if="questionIndex === cards.length">
      <p class="s_test-final">тест закончился</p>
      <button class="s_test-item-button" @click="startTest">начать сначала</button>
    </div>
    <div v-else>
      <div :class="['s_test-card', `s_test-card-${item.id}`]" v-for="item in cards" :key="item.id">
        <div class="s_test-item" v-if="item.id === questionIndex">
          <div class="s_test-item-content" v-if="isIncorrect">
            <p class="s_test-item-description">слово:</p>
            <p class="s_test-item-title">{{ item.word }}</p>
            <p class="s_test-item-description">перевод:</p>
            <input type="text" class="s_test-item-input" v-model="translateWord" placeholder="..." />
            <button :class="['s_test-item-button', btnDisabled ? 'disabled' : '']" @click="validateInput">
              проверить
            </button>
          </div>
          <div class="s_test-item-content" v-else>
            <p class="s_test-item-description">Правильный ответ:</p>
            <p class="s_test-item-title">{{ item.translate }}</p>
            <button class="s_test-item-button" @click="nextCardShow">дальше</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './s_test.scss';
import {
  getFirestore, collection, onSnapshot, query,
} from 'firebase/firestore';

export default {
  name: 's_test',
  props: {},
  components: {},
  data() {
    return {
      isIncorrect: true,
      btnDisabled: true,
      cards: [],
      questionIndex: 1,
      translateWord: '',
    };
  },
  methods: {
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
    validateInput() {
      if (this.translateWord === '') {
        this.btnDisabled = true;
      } else {
        this.nextCard();
      }
    },
    nextCardShow() {
      this.questionIndex += 1;
      this.translateWord = '';
      this.isIncorrect = true;
    },
    nextCard() {
      const currentCard = this.cards.find((card) => card.id === this.questionIndex).translate;
      console.log(this.translateWord);
      console.log(currentCard);
      if (currentCard === this.translateWord) {
        this.questionIndex += 1;
        this.translateWord = '';
      } else {
        console.log('не совпало');
        this.isIncorrect = false;
      }
    },
    startTest() {
      this.questionIndex = 1;
      this.translateWord = '';
      this.isIncorrect = true;
    },
  },
  watch: {
    translateWord() {
      if (this.translateWord === '') {
        this.btnDisabled = true;
      } else {
        this.btnDisabled = false;
      }
    },
  },
  mounted() {
    this.fetchCards();
  },
};
</script>
