<script>
export default {
  name: 'countItem',
  props: {
    count: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      // required: true,
      default: 10
    },
    min: {
      type: Number,
      default: 1
    }
  },
  methods: {
    addCount () {
      if (this.count >= this.max) {
        this.$swal({
          title: `超過庫存數量`,
          icon: 'error'
        })
        return
      }
      let num = Number(this.count) + 1
      this.$emit('increment', num)
    },
    minusCount () {
      if (this.count <= this.min) {
        this.$swal({
          title: '數量至少大於1',
          icon: 'error'
        })
        return
      }
      let num = Number(this.count) - 1
      this.$emit('decrement', num)
      // this.countNum--
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
