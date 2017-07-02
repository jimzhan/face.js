<template>
  <div>
    <h2>{{ msg }}</h2>
    <p>
      <spinner></spinner>
    </p>
  </div>
</template>

<script>
import Spinner from '../controls/Spinner';

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  components: { Spinner },
};
</script>