<script>
export default {
  name: 'product',
  data () {
    return {
      img: 'https://www.tgilive.com/image/frontend/banner/C21.jpg',
      imgObj: {
        src: 'https://www.tgilive.com/image/frontend/banner/C212.jpg',
        error: '/static/img/image_error.png',
        loading: '/static/img/image_Loading.png'
      }
    }
  },
  methods: {
    goHome () {
      this.$router.push({ name: 'home' })
    },
    handler (component) {
      console.log('this component is showing')
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
