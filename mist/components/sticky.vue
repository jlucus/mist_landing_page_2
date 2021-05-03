<template>
  <div class="sticky" :class="type">
    <div class="message">{{ message }}</div>
    <div v-if="to.length" class="action">
      <button>
        <a :href="to">{{ btnText }}</a>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sticky',
  props: {
    type: {
      type: String,
      default: 'error',
    },
    message: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '',
    },
    btnText: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped></style>
