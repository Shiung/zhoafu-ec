<script>
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  computed: {
    // vuex
    ...mapGetters(['menuStatus'])
  },
  components: {
    navBar: () => import('@/components/Navbar'),
    footerBox: () => import('@/components/Footerbox')
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
