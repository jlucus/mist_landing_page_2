<template>
  <div class="tool">
    <div class="row head">
      <div class="col-4">
        <img src="@/assets/img/mist-m.png" class="logo" />
      </div>
      <div class="col-8">
        <div class="cur">{{ title }}</div>
      </div>
    </div>

    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tool',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped></style>
