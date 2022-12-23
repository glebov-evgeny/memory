<template>
  <div class="s_popup" @click.stop="popupIsClosed">
    <div @click.stop class="s_popup__content">
      <p>...</p>
    </div>
  </div>
</template>

<script>

import './s_popup.scss';

export default {
  name: 's_popup',
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
