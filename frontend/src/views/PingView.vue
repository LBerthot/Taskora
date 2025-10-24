<template>
  <div class="ping-container">
    <h1>Ping Test</h1>
    <button @click="callPing">Call /ping</button>
    <p v-if="loading">Loading...</p>
    <p v-if="error" style="color: red">{{ error }}</p>
    <p v-if="response">{{ response }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { get, getText } from '../api/api';

export default defineComponent({
  name: 'PingView',
  setup() {
    const response = ref<string | null>(null);
    const error = ref<string | null>(null);
    const loading = ref(false);

    const callPing = async () => {
      loading.value = true;
      response.value = null;
      error.value = null;

      try {
        const data = await getText('/ping');
        response.value = data;
      } catch (err: any) {
        error.value = err.message || 'Erreur lors de l’appel API';
      } finally {
        loading.value = false;
      }
    };

    return {
      response,
      error,
      loading,
      callPing,
    };
  },
});
</script>

<style scoped>
.ping-container {
  text-align: center;
  margin-top: 2rem;
}
button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
}
</style>
