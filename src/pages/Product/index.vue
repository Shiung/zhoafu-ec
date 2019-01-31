<script>
export default {
  name: 'product',
  methods: {
    goHome () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
