<template>
  <div class="flex min-h-5/6 md:min-h-screen items-center justify-center">
    <div
      class="md:mx-auto md:w-2xl md:p-20 flex flex-col items-center"
      style="background-color: #e5e5e5"
    >
      <FrequencyCard v-for="items in 3" :key="items" />
    </div>
  </div>
</template>

<script>
import FrequencyCard from "../components/FrequencyCard.vue";
export default {
  components: {
    FrequencyCard,
  },
};
</script>
